import cors from 'cors';
import { NextFunction, Response } from 'express';
import { GraphQLServer, PubSub } from 'graphql-yoga';
import helmet from 'helmet';
import logger from 'morgan';
import schema from './schema';
import decodeJWT from './utils/decodeJWT';

class App {
	public app: GraphQLServer;
	// graphql-yoga에서 제공해 주는 것 실제 사용에서는 사용 x
	public pubSub: any;
	// App 클래스를 새로 시작(생성) 하면 가장 처음 실행되는 함수
	constructor() {
		this.pubSub = new PubSub();
		// 에러를 위한 임시 처리
		this.pubSub.ee.setMaxListeners(99);
		this.app = new GraphQLServer({
			schema,
			context: (req) => {
				const { connection: { context = null } = {} } = req;
				return {
					req: req.request,
					pubSub: this.pubSub,
					context
				};
			}
		});
		this.middlewares();
	}
	private middlewares = (): void => {
		this.app.express.use(cors());
		this.app.express.use(logger('dev'));
		this.app.express.use(helmet());
		this.app.express.use(this.jwt);
	};

	private jwt = async (req, res: Response, next: NextFunction): Promise<void> => {
		const token = req.get('X-JWT');
		if (token) {
			const user = await decodeJWT(token);
			if (user) {
				req.user = user;
			} else {
				req.user = undefined;
			}
		}
		next();
	};
}

export default new App().app;

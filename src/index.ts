import dotenv from 'dotenv';
// import connectionOptions from './ormConfig'보다 상단에 존재해야 합니다.
dotenv.config();

import { createConnection } from 'typeorm';
import { Options } from '../node_modules/graphql-yoga';
import app from './app';
import connectionOptions from './ormConfig';
import decodeJWT from './utils/decodeJWT';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';
const SUBSCRIPTION_ENDPOINT: string = 'subscripton';

const appOptions: Options = {
	port: PORT,
	playground: PLAYGROUND_ENDPOINT,
	endpoint: GRAPHQL_ENDPOINT,
	subscriptions: {
		path: SUBSCRIPTION_ENDPOINT,
		onConnect: async (connectParams) => {
			const token = connectParams['X-JWT'];
			if (token) {
				const user = await decodeJWT(token);
				if (user) {
					return {
						currentUser: user
					};
				}
			}
			throw new Error("No JWT. Can't subscribe");
		}
	}
};

const handleAppStart = () => console.log(`Listening on prot ${PORT}`);

createConnection(connectionOptions)
	.then(() => {
		app.start(appOptions, handleAppStart);
	})
	.catch((error) => console.log(error));

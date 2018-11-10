import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema";

class App {
  public app: GraphQLServer;
  // App 클래스를 새로 시작(생성) 하면 가장 처음 실행되는 함수
  constructor() {
    this.app = new GraphQLServer({
      schema,
    });
    this.middlewares();
  }
  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger("dev"));
    this.app.express.use(helmet());
  };
}

export default new App().app;

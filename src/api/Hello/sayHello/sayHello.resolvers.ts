
import { SayHelloQueryArgs, sayHelloResponse } from "../../../types/graph";

const resolvers = {
  Query: {
    // parent, args, context 순으로 전달 됩니다.
    sayHello: (_, args:SayHelloQueryArgs) : sayHelloResponse => {
      return {
        error: false,
        text: `Hello ${args.name}`
      }
    }
  }
};

export default resolvers;

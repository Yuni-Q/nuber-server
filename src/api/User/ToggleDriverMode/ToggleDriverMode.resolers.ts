import User from "src/entities/User";
import { ToggleDriverModeResponse } from "src/types/graph";
import { Resolvers } from "src/types/resolvers";
import privateResolver from "src/utils/privateResolver";

const resolvers: Resolvers = {
  Mutation: {
    ToggleDriverMode: privateResolver(
      async (_, __, { req }): Promise<ToggleDriverModeResponse> => {
        const user: User = req.user;
        user.isDriving = !user.isDriving;
        user.save();
        return {
          ok: true,
          error: null
        };
      }
    )
  }
};

export default resolvers;

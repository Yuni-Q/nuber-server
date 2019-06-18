import User from "../../../entities/User";
import { ToggleDriverModeResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

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

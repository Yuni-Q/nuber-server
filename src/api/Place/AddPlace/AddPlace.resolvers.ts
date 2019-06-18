import Place from "../../../entities/Place";
import User from "../../../entities/User";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
  Mutation: {
    AddPlace: privateResolver(async (_, args, { req }) => {
      const user: User = req.user;
      try {
        await Place.create({ ...args, user }).save();
        return {
          ok: true,
          errro: null
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    })
  }
};

export default resolvers;

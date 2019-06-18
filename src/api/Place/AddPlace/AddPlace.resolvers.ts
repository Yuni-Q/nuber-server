import Place from "src/entities/Place";
import User from "src/entities/User";
import { Resolvers } from "src/types/resolvers";
import privateResolver from "src/utils/privateResolver";

const resolvers: Resolvers = {
  Mutation: {
    addPlace: privateResolver(async (_, args, { req }) => {
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

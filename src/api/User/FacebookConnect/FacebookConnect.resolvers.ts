
import User from "src/entities/User";
import {
  FacebookConnectMutaionArgs,
  FacebookConnectResponse,
} from "src/types/graph";
import { Resolvers } from "src/types/resolvers";
import { nonInputTypeOnVarMessage } from "graphql/validation/rules/VariablesAreInputTypes";

const resolvers: Resolvers = {
  Mutation: {
    FacebookConnet: async (_, args: FacebookConnectMutaionArgs): Promise<FacebookConnectResponse> => {
      const { fbId } = args;
      try {
        const existingUser = await User.findOne({ fbId })
        if (existingUser) {
          return {
            ok: true,
            error: null,
            token: 'Coming soon',
          }
        } else {

        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        }
      }
      try {
        await User.create({ ...args, profilePhoto: `hppt://graph.facebook.com/${fbId}/picture>type=square` }).save();
        return {
          ok: true,
          error: null,
          token: 'Coming soon',
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        }
      }
    }
  }
}

export default resolvers;
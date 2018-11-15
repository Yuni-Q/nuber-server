

import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    StratPhoneVerification: async (_, args: StratPhoneVerificationMutationArgs): Promise<StratPhoneVerificationResponse> => {
      const { phoneNumber } = args;
      try {
        
        return {
          ok: true,
          error: null,
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        }
      }
    }
  }
};

export default resolvers;
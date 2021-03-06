import Verification from "../../../entities/Verification";
import {
  StratPhoneVerificationMutationArgs,
  StratPhoneVerificationResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    StratPhoneVerification: async (
      _,
      args: StratPhoneVerificationMutationArgs
    ): Promise<StratPhoneVerificationResponse> => {
      const { phoneNumber } = args;
      try {
        const existingVerification = await Verification.findOne({
          payload: phoneNumber
        });
        if (existingVerification) {
          await existingVerification.remove();
        }
        const newVerifcation = await Verification.create({
          payload: phoneNumber,
          target: "PHONE"
        }).save();
        // TODO: send sms
        // await sendVerificationSMS(newVerifcation.payload, newVerifcation.key);
        console.log(newVerifcation);
        return {
          ok: true,
          error: newVerifcation.key
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;

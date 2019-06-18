import User from "src/entities/User";
import {
  UpdateMyProfileMutationArgs,
  UpdateMyProfileResponse
} from "src/types/graph";
import cleanNullArgs from "src/utils/cleanNullArgs";
import privateResolver from "src/utils/privateResolver";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    UpdateMyProfile: privateResolver(
      async (
        _,
        args: UpdateMyProfileMutationArgs,
        { req }
      ): Promise<UpdateMyProfileResponse> => {
        const user: User = req.user;
        const notNull: any = cleanNullArgs(args); // 👈🏻 Add ':any'
        // ⚠️ Take the if(notNull.password) OUT of the try/catch
        if (notNull.password !== null) {
          // 👈🏻 Change from args to notNull
          user.password = notNull.password; // 👈🏻 Same here
          user.save();
          delete notNull.password; // <--  ⚠️⚠️⚠️ Delete password  from notNull or is going to be saved again without encoding ⚠️⚠️⚠️
        }
        try {
          await User.update({ id: user.id }, { ...notNull });
          return {
            ok: true,
            error: null
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message
          };
        }
      }
    )
  }
};

export default resolvers;

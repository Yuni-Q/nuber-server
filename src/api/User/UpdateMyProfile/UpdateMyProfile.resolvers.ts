import User from "src/entities/User";
import { UpdateMyProfileMutationArgs } from "src/types/graph";
import privateResolver from "src/utils/privateResolver";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    UpdateMyProfile: privateResolver( async(_, args: UpdateMyProfileMutationArgs, {req}) => {
      const user: User = req.user;
      await User.update({id: user.id}, {..args})
    })
  }
};

export default resolvers;

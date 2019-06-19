import { Resolvers } from 'src/types/resolvers';

const resolvers: Resolvers = {
	Subscription: {
		subscribe: (_, __, { pubSub }) => {
			return pubSub.asyncIterator('driverUpdate');
		}
	}
};

export default resolvers;

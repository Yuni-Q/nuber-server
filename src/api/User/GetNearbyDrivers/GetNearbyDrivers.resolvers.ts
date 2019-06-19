import { Between, getRepository } from 'typeorm';

import User from '../../../entities/User';
import { GetNearbyDriversRespose } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
	Query: {
		GetNearbyDrivers: privateResolver(async (_, __, { req }): Promise<GetNearbyDriversRespose> => {
			const user: User = req.user;
			const { lastLat, lastLng } = user;
			try {
				// 특정 함수를 사용하려면 getRepository 사용
				const drivers: User[] = await getRepository(User).find({
					isDriving: true,
					lastLat: Between(lastLat - 0.05, lastLat + 0.05),
					lastLng: Between(lastLng - 0.05, lastLng + 0.05)
				});
				return {
					ok: true,
					error: null,
					drivers
				};
			} catch (error) {
				return {
					ok: false,
					error: error.message,
					drivers: null
				};
			}
		})
	}
};

export default resolvers;

import { ApiUserCountersDto } from '../../../swagger/models/api-user-counters-dto';
import { UserCounters } from '../../models/user-counters.interface';

export const userCountersAdapter = (source?: ApiUserCountersDto | null): UserCounters => {
  return {
    favoritesCount: source?.FavoritesCount,
    newMessagesCount: source?.NewMessagesCount,
  };
}

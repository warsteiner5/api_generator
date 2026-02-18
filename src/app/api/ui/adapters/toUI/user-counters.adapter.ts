import { ApiUserCountersDto } from '../../../swagger/models/api-user-counters-dto';
import { UserCounters } from '../../models/user-counters.interface';

export function adaptUserCountersToUI(source?: ApiUserCountersDto | null): UserCounters {
  return {
    favoritesCount: source?.FavoritesCount ?? 0,
    newMessagesCount: source?.NewMessagesCount ?? 0,
  };
}

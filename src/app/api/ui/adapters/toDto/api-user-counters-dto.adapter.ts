import { UserCounters } from '../../models/user-counters.interface';
import { ApiUserCountersDto } from '../../../swagger/models/api-user-counters-dto';

export function adaptApiUserCountersDto(source?: UserCounters | null): ApiUserCountersDto {
  return {
    FavoritesCount: source?.favoritesCount,
    NewMessagesCount: source?.newMessagesCount,
  };
}

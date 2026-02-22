import { UserActionLog } from '../../models/user-action-log.interface';
import { ApiUserActionLogDto } from '../../../swagger/models/api-user-action-log-dto';

export const apiUserActionLogDtoAdapter = (source?: UserActionLog | null): ApiUserActionLogDto => {
  return {
    ActionId: source?.actionId,
    EntityId: source?.entityId,
  };
}

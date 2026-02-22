import { ApiUserActionLogDto } from '../../../swagger/models/api-user-action-log-dto';
import { UserActionLog } from '../../models/user-action-log.interface';

export const userActionLogAdapter = (source?: ApiUserActionLogDto | null): UserActionLog => {
  return {
    actionId: source?.ActionId,
    entityId: source?.EntityId,
  };
}

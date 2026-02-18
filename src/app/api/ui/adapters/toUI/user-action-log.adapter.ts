import { ApiUserActionLogDto } from '../../../swagger/models/api-user-action-log-dto';
import { UserActionLog } from '../../models/user-action-log.interface';

export function adaptUserActionLogToUI(source?: ApiUserActionLogDto | null): UserActionLog {
  return {
    actionId: source?.ActionId ?? 0,
    entityId: source?.EntityId ?? 0,
  };
}

import { UserActionLog } from '../../models/user-action-log.interface';
import { ApiUserActionLogDto } from '../../../swagger/models/api-user-action-log-dto';

export function adaptApiUserActionLogDto(source?: UserActionLog | null): ApiUserActionLogDto {
  return {
    ActionId: source?.actionId,
    EntityId: source?.entityId,
  };
}

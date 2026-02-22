import { LogLogAction$Params } from '../../../swagger/fn/log/log-log-action';
import { UserActionLog } from '../../models/user-action-log.interface';
import { apiUserActionLogDtoAdapter } from '../../adapters/models/api-user-action-log-dto.adapter';

// @ts-ignore
export interface LogLogActionParams {
  body?: UserActionLog;
}

export function logLogActionAdapter(params?: LogLogActionParams): LogLogAction$Params {
  if (!params) {
    return {} as LogLogAction$Params;
  }
  return {
      body: apiUserActionLogDtoAdapter(params.body),
  };
}

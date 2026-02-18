import { LogLogAction$Params } from '../../../swagger/fn/log/log-log-action';
import { UserActionLog } from '../../models/user-action-log.interface';
import { adaptApiUserActionLogDto } from '../../adapters/toDto/api-user-action-log-dto.adapter';

export interface LogLogActionParams {
  body?: UserActionLog;
}

export const logLogActionParamsAdapter = {
  adapt(params?: LogLogActionParams): LogLogAction$Params {
    if (!params) {
      return {} as LogLogAction$Params;
    }
    return {
      body: adaptApiUserActionLogDto(params.body),
    };
  }
};

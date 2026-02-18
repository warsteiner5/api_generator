import { LogJavaScriptError } from '../../models/log-java-script-error.interface';
import { LogLogError$Params } from '../../../swagger/fn/log/log-log-error';
import { adaptApiLogJavaScriptErrorDto } from '../../adapters/toDto/api-log-java-script-error-dto.adapter';

export interface LogLogErrorParams {
  body?: LogJavaScriptError;
}

export const logLogErrorParamsAdapter = {
  adapt(params?: LogLogErrorParams): LogLogError$Params {
    if (!params) {
      return {} as LogLogError$Params;
    }
    return {
      body: adaptApiLogJavaScriptErrorDto(params.body),
    };
  }
};

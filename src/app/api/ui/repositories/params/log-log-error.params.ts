import { LogJavaScriptError } from '../../models/log-java-script-error.interface';
import { LogLogError$Params } from '../../../swagger/fn/log/log-log-error';
import { apiLogJavaScriptErrorDtoAdapter } from '../../adapters/models/api-log-java-script-error-dto.adapter';

// @ts-ignore
export interface LogLogErrorParams {
  body?: LogJavaScriptError;
}

export function logLogErrorAdapter(params?: LogLogErrorParams): LogLogError$Params {
  if (!params) {
    return {} as LogLogError$Params;
  }
  return {
      body: apiLogJavaScriptErrorDtoAdapter(params.body),
  };
}

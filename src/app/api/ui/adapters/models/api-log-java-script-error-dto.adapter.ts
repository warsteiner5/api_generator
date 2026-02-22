import { LogJavaScriptError } from '../../models/log-java-script-error.interface';
import { ApiLogJavaScriptErrorDto } from '../../../swagger/models/api-log-java-script-error-dto';

export const apiLogJavaScriptErrorDtoAdapter = (source?: LogJavaScriptError | null): ApiLogJavaScriptErrorDto => {
  return {
    ErrorMessage: source?.errorMessage,
  };
}

import { ApiLogJavaScriptErrorDto } from '../../../swagger/models/api-log-java-script-error-dto';
import { LogJavaScriptError } from '../../models/log-java-script-error.interface';

export const logJavaScriptErrorAdapter = (source?: ApiLogJavaScriptErrorDto | null): LogJavaScriptError => {
  return {
    errorMessage: source?.ErrorMessage,
  };
}

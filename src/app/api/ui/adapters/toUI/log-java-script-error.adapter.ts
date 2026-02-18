import { ApiLogJavaScriptErrorDto } from '../../../swagger/models/api-log-java-script-error-dto';
import { LogJavaScriptError } from '../../models/log-java-script-error.interface';

export function adaptLogJavaScriptErrorToUI(source?: ApiLogJavaScriptErrorDto | null): LogJavaScriptError {
  return {
    errorMessage: source?.ErrorMessage ?? '',
  };
}

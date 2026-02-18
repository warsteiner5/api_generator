import { ApiValueDtoOfStringAltDto } from '../../../swagger/models/api-value-dto-of-string';
import { ValueDtoOfStringAlt } from '../../models/value-dto-of-string-alt.interface';

export function adaptValueDtoOfStringAltToUI(source?: ApiValueDtoOfStringAltDto | null): ValueDtoOfStringAlt {
  return {
    value: source?.Value ?? '',
  };
}

import { ApiOkopfDto } from '../../../swagger/models/api-okopf-dto';
import { Okopf } from '../../models/okopf.interface';

export const okopfAdapter = (source?: ApiOkopfDto | null): Okopf => {
  return {
    actual: source?.Actual,
    code: source?.Code,
    name: source?.Name,
    parentCode: source?.ParentCode,
  };
}

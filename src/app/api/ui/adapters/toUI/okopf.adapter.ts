import { ApiOkopfDto } from '../../../swagger/models/api-okopf-dto';
import { Okopf } from '../../models/okopf.interface';

export function adaptOkopfToUI(source?: ApiOkopfDto | null): Okopf {
  return {
    actual: source?.Actual ?? false,
    code: source?.Code ?? '',
    name: source?.Name ?? '',
    parentCode: source?.ParentCode ?? '',
  };
}

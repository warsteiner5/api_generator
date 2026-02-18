import { ApiOkpd2CodeDto2 } from '../../../swagger/models/api-okpd-2-code-dto-2';
import { Okpd2CodeDto2 } from '../../models/okpd-2-code-dto-2.interface';

export function adaptOkpd2CodeDto2ToUI(source?: ApiOkpd2CodeDto2 | null): Okpd2CodeDto2 {
  return {
    code: source?.Code ?? '',
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
  };
}

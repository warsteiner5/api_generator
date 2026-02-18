import { ApiOkpd2Dto } from '../../../swagger/models/api-okpd-2-dto';
import { Okpd2 } from '../../models/okpd-2.interface';

export function adaptOkpd2ToUI(source?: ApiOkpd2Dto | null): Okpd2 {
  return {
    code: source?.Code ?? '',
    name: source?.Name ?? '',
  };
}

import { ApiOkpd2CodeDto } from '../../../swagger/models/api-okpd-2-code-dto';
import { Okpd2Code } from '../../models/okpd-2-code.interface';

export const okpd2CodeAdapter = (source?: ApiOkpd2CodeDto | null): Okpd2Code => {
  return {
    code: source?.Code,
    id: source?.Id,
    name: source?.Name,
  };
}

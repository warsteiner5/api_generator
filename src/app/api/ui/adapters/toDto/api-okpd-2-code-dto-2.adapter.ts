import { Okpd2CodeDto2 } from '../../models/okpd-2-code-dto-2.interface';
import { ApiOkpd2CodeDto2 } from '../../../swagger/models/api-okpd-2-code-dto-2';

export function adaptApiOkpd2CodeDto2(source?: Okpd2CodeDto2 | null): ApiOkpd2CodeDto2 {
  return {
    Code: source?.code,
    Id: source?.id,
    Name: source?.name,
  };
}

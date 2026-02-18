import { Okpd2Code } from '../../models/okpd-2-code.interface';
import { ApiOkpd2CodeDto } from '../../../swagger/models/api-okpd-2-code-dto';

export function adaptApiOkpd2CodeDto(source?: Okpd2Code | null): ApiOkpd2CodeDto {
  return {
    Code: source?.code,
    Id: source?.id,
    Name: source?.name,
  };
}

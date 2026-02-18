import { Okopf } from '../../models/okopf.interface';
import { ApiOkopfDto } from '../../../swagger/models/api-okopf-dto';

export function adaptApiOkopfDto(source?: Okopf | null): ApiOkopfDto {
  return {
    Actual: source?.actual,
    Code: source?.code,
    Name: source?.name,
    ParentCode: source?.parentCode,
  };
}

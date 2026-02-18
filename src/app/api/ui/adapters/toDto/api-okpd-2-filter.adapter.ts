import { Okpd2FilterAlt } from '../../models/okpd-2-filter-alt.interface';
import { ApiOkpd2FilterAltDto } from '../../../swagger/models/api-okpd-2-filter';

export function adaptApiOkpd2FilterAltDto(source?: Okpd2FilterAlt | null): ApiOkpd2FilterAltDto {
  return {
    MaxReturnCount: source?.maxReturnCount,
    SearchValue: source?.searchValue,
  };
}

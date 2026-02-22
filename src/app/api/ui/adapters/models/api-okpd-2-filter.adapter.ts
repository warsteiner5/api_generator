import { Okpd2FilterAlt } from '../../models/okpd-2-filter-alt.interface';
import { ApiOkpd2FilterAltDto } from '../../../swagger/models/api-okpd-2-filter';

export const apiOkpd2FilterAltDtoAdapter = (source?: Okpd2FilterAlt | null): ApiOkpd2FilterAltDto => {
  return {
    MaxReturnCount: source?.maxReturnCount,
    SearchValue: source?.searchValue,
  };
}

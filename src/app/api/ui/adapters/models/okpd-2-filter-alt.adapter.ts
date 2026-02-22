import { ApiOkpd2FilterAltDto } from '../../../swagger/models/api-okpd-2-filter';
import { Okpd2FilterAlt } from '../../models/okpd-2-filter-alt.interface';

export const okpd2FilterAltAdapter = (source?: ApiOkpd2FilterAltDto | null): Okpd2FilterAlt => {
  return {
    maxReturnCount: source?.MaxReturnCount,
    searchValue: source?.SearchValue,
  };
}

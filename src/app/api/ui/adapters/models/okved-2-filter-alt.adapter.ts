import { ApiOkved2FilterAltDto } from '../../../swagger/models/api-okved-2-filter';
import { Okved2FilterAlt } from '../../models/okved-2-filter-alt.interface';

export const okved2FilterAltAdapter = (source?: ApiOkved2FilterAltDto | null): Okved2FilterAlt => {
  return {
    maxReturnCount: source?.MaxReturnCount,
    searchValue: source?.SearchValue,
  };
}

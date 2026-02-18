import { ApiOkved2FilterAltDto } from '../../../swagger/models/api-okved-2-filter';
import { Okved2FilterAlt } from '../../models/okved-2-filter-alt.interface';

export function adaptOkved2FilterAltToUI(source?: ApiOkved2FilterAltDto | null): Okved2FilterAlt {
  return {
    maxReturnCount: source?.MaxReturnCount ?? 0,
    searchValue: source?.SearchValue ?? '',
  };
}

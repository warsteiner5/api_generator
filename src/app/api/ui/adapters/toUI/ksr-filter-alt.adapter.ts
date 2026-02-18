import { ApiKsrFilterAltDto } from '../../../swagger/models/api-ksr-filter';
import { KsrFilterAlt } from '../../models/ksr-filter-alt.interface';

export function adaptKsrFilterAltToUI(source?: ApiKsrFilterAltDto | null): KsrFilterAlt {
  return {
    maxReturnCount: source?.MaxReturnCount ?? 0,
    searchValue: source?.SearchValue ?? '',
  };
}

import { ApiKsrFilterAltDto } from '../../../swagger/models/api-ksr-filter';
import { KsrFilterAlt } from '../../models/ksr-filter-alt.interface';

export const ksrFilterAltAdapter = (source?: ApiKsrFilterAltDto | null): KsrFilterAlt => {
  return {
    maxReturnCount: source?.MaxReturnCount,
    searchValue: source?.SearchValue,
  };
}

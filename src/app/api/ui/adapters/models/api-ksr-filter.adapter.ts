import { KsrFilterAlt } from '../../models/ksr-filter-alt.interface';
import { ApiKsrFilterAltDto } from '../../../swagger/models/api-ksr-filter';

export const apiKsrFilterAltDtoAdapter = (source?: KsrFilterAlt | null): ApiKsrFilterAltDto => {
  return {
    MaxReturnCount: source?.maxReturnCount,
    SearchValue: source?.searchValue,
  };
}

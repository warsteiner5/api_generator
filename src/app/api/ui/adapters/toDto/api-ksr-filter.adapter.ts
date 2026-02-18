import { KsrFilterAlt } from '../../models/ksr-filter-alt.interface';
import { ApiKsrFilterAltDto } from '../../../swagger/models/api-ksr-filter';

export function adaptApiKsrFilterAltDto(source?: KsrFilterAlt | null): ApiKsrFilterAltDto {
  return {
    MaxReturnCount: source?.maxReturnCount,
    SearchValue: source?.searchValue,
  };
}

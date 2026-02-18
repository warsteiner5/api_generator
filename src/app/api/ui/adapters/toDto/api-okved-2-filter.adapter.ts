import { Okved2FilterAlt } from '../../models/okved-2-filter-alt.interface';
import { ApiOkved2FilterAltDto } from '../../../swagger/models/api-okved-2-filter';

export function adaptApiOkved2FilterAltDto(source?: Okved2FilterAlt | null): ApiOkved2FilterAltDto {
  return {
    MaxReturnCount: source?.maxReturnCount,
    SearchValue: source?.searchValue,
  };
}

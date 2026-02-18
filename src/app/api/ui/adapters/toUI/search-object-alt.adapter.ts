import { ApiSearchObjectAltDto } from '../../../swagger/models/api-search-object';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptBaseFieldAltToUI } from './base-field-alt.adapter';
import { adaptSearchPagingObjectAltToUI } from './search-paging-object-alt.adapter';
import { adaptSortedFieldAltToUI } from './sorted-field-alt.adapter';

export function adaptSearchObjectAltToUI(source?: ApiSearchObjectAltDto | null): SearchObjectAlt {
  return {
    filtering: (source?.Filtering ?? []).map((item) => adaptBaseFieldAltToUI(item)),
    paging: adaptSearchPagingObjectAltToUI(source?.Paging),
    sorting: (source?.Sorting ?? []).map((item) => adaptSortedFieldAltToUI(item)),
  };
}

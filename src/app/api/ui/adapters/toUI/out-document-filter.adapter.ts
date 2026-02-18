import { ApiOutDocumentFilterDto } from '../../../swagger/models/api-out-document-filter-dto';
import { OutDocumentFilter } from '../../models/out-document-filter.interface';

export function adaptOutDocumentFilterToUI(source?: ApiOutDocumentFilterDto | null): OutDocumentFilter {
  return (source ?? {}) as OutDocumentFilter;
}

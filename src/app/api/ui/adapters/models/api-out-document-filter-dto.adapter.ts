import { OutDocumentFilter } from '../../models/out-document-filter.interface';
import { ApiOutDocumentFilterDto } from '../../../swagger/models/api-out-document-filter-dto';

export const apiOutDocumentFilterDtoAdapter = (source?: OutDocumentFilter | null): ApiOutDocumentFilterDto => {
  return (source ?? {}) as ApiOutDocumentFilterDto;
}

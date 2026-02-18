import { ApiApiSearchResultOfOutDocumentDto } from '../../../swagger/models/api-api-search-result-of-out-document-dto';
import { ApiSearchResultOfOutDocument } from '../../models/api-search-result-of-out-document.interface';
import { adaptOutDocumentToUI } from './out-document.adapter';

export function adaptApiSearchResultOfOutDocumentToUI(source?: ApiApiSearchResultOfOutDocumentDto | null): ApiSearchResultOfOutDocument {
  return {
    currpage: source?.currpage ?? 0,
    invdata: (source?.invdata ?? []).map((item) => adaptOutDocumentToUI(item)),
    showTotal: source?.showTotal ?? false,
    totalpages: source?.totalpages ?? 0,
    totalrecords: source?.totalrecords ?? 0,
  };
}

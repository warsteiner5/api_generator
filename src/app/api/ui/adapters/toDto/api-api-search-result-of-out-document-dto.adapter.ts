import { ApiSearchResultOfOutDocument } from '../../models/api-search-result-of-out-document.interface';
import { ApiApiSearchResultOfOutDocumentDto } from '../../../swagger/models/api-api-search-result-of-out-document-dto';
import { adaptApiOutDocumentDto } from './api-out-document-dto.adapter';

export function adaptApiApiSearchResultOfOutDocumentDto(source?: ApiSearchResultOfOutDocument | null): ApiApiSearchResultOfOutDocumentDto {
  return {
    currpage: source?.currpage,
    invdata: (source?.invdata ?? []).map((item) => adaptApiOutDocumentDto(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

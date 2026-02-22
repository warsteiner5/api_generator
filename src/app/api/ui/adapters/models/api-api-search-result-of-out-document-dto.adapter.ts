import { ApiSearchResultOfOutDocument } from '../../models/api-search-result-of-out-document.interface';
import { ApiApiSearchResultOfOutDocumentDto } from '../../../swagger/models/api-api-search-result-of-out-document-dto';
import { apiOutDocumentDtoAdapter } from './api-out-document-dto.adapter';

export const apiApiSearchResultOfOutDocumentDtoAdapter = (source?: ApiSearchResultOfOutDocument | null): ApiApiSearchResultOfOutDocumentDto => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => apiOutDocumentDtoAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

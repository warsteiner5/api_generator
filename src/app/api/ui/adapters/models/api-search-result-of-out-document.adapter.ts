import { ApiApiSearchResultOfOutDocumentDto } from '../../../swagger/models/api-api-search-result-of-out-document-dto';
import { ApiSearchResultOfOutDocument } from '../../models/api-search-result-of-out-document.interface';
import { outDocumentAdapter } from './out-document.adapter';

export const apiSearchResultOfOutDocumentAdapter = (source?: ApiApiSearchResultOfOutDocumentDto | null): ApiSearchResultOfOutDocument => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => outDocumentAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

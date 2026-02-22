import { ApiSearchResultOfApplicationInfoAlt } from '../../models/api-search-result-of-application-info-alt.interface';
import { ApiApiSearchResultOfApplicationInfoAltDto } from '../../../swagger/models/api-api-search-result-of-application-info';
import { apiApplicationInfoAltDtoAdapter } from './api-application-info.adapter';

export const apiApiSearchResultOfApplicationInfoAltDtoAdapter = (source?: ApiSearchResultOfApplicationInfoAlt | null): ApiApiSearchResultOfApplicationInfoAltDto => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => apiApplicationInfoAltDtoAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

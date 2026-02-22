import { ApiSearchResultOfDealInfoAlt } from '../../models/api-search-result-of-deal-info-alt.interface';
import { ApiApiSearchResultOfDealInfoAltDto } from '../../../swagger/models/api-api-search-result-of-deal-info';
import { apiDealInfoAltDtoAdapter } from './api-deal-info.adapter';

export const apiApiSearchResultOfDealInfoAltDtoAdapter = (source?: ApiSearchResultOfDealInfoAlt | null): ApiApiSearchResultOfDealInfoAltDto => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => apiDealInfoAltDtoAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

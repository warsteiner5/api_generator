import { ApiApiSearchResultOfDealInfoAltDto } from '../../../swagger/models/api-api-search-result-of-deal-info';
import { ApiSearchResultOfDealInfoAlt } from '../../models/api-search-result-of-deal-info-alt.interface';
import { dealInfoAltAdapter } from './deal-info-alt.adapter';

export const apiSearchResultOfDealInfoAltAdapter = (source?: ApiApiSearchResultOfDealInfoAltDto | null): ApiSearchResultOfDealInfoAlt => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => dealInfoAltAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

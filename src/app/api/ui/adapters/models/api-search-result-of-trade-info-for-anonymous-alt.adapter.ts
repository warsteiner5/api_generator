import { ApiApiSearchResultOfTradeInfoForAnonymousAltDto } from '../../../swagger/models/api-api-search-result-of-trade-info-for-anonymous';
import { ApiSearchResultOfTradeInfoForAnonymousAlt } from '../../models/api-search-result-of-trade-info-for-anonymous-alt.interface';
import { tradeInfoForAnonymousAltAdapter } from './trade-info-for-anonymous-alt.adapter';

export const apiSearchResultOfTradeInfoForAnonymousAltAdapter = (source?: ApiApiSearchResultOfTradeInfoForAnonymousAltDto | null): ApiSearchResultOfTradeInfoForAnonymousAlt => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => tradeInfoForAnonymousAltAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

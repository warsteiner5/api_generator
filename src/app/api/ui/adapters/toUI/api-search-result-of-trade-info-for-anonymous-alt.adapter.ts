import { ApiApiSearchResultOfTradeInfoForAnonymousAltDto } from '../../../swagger/models/api-api-search-result-of-trade-info-for-anonymous';
import { ApiSearchResultOfTradeInfoForAnonymousAlt } from '../../models/api-search-result-of-trade-info-for-anonymous-alt.interface';
import { adaptTradeInfoForAnonymousAltToUI } from './trade-info-for-anonymous-alt.adapter';

export function adaptApiSearchResultOfTradeInfoForAnonymousAltToUI(source?: ApiApiSearchResultOfTradeInfoForAnonymousAltDto | null): ApiSearchResultOfTradeInfoForAnonymousAlt {
  return {
    currpage: source?.currpage ?? 0,
    invdata: (source?.invdata ?? []).map((item) => adaptTradeInfoForAnonymousAltToUI(item)),
    showTotal: source?.showTotal ?? false,
    totalpages: source?.totalpages ?? 0,
    totalrecords: source?.totalrecords ?? 0,
  };
}

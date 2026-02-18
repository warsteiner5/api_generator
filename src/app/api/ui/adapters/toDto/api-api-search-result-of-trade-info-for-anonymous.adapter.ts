import { ApiSearchResultOfTradeInfoForAnonymousAlt } from '../../models/api-search-result-of-trade-info-for-anonymous-alt.interface';
import { ApiApiSearchResultOfTradeInfoForAnonymousAltDto } from '../../../swagger/models/api-api-search-result-of-trade-info-for-anonymous';
import { adaptApiTradeInfoForAnonymousAltDto } from './api-trade-info-for-anonymous.adapter';

export function adaptApiApiSearchResultOfTradeInfoForAnonymousAltDto(source?: ApiSearchResultOfTradeInfoForAnonymousAlt | null): ApiApiSearchResultOfTradeInfoForAnonymousAltDto {
  return {
    currpage: source?.currpage,
    invdata: (source?.invdata ?? []).map((item) => adaptApiTradeInfoForAnonymousAltDto(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

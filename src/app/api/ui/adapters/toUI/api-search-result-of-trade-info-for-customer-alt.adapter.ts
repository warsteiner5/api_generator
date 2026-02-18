import { ApiApiSearchResultOfTradeInfoForCustomerAltDto } from '../../../swagger/models/api-api-search-result-of-trade-info-for-customer';
import { ApiSearchResultOfTradeInfoForCustomerAlt } from '../../models/api-search-result-of-trade-info-for-customer-alt.interface';
import { adaptTradeInfoForCustomerAltToUI } from './trade-info-for-customer-alt.adapter';

export function adaptApiSearchResultOfTradeInfoForCustomerAltToUI(source?: ApiApiSearchResultOfTradeInfoForCustomerAltDto | null): ApiSearchResultOfTradeInfoForCustomerAlt {
  return {
    currpage: source?.currpage ?? 0,
    invdata: (source?.invdata ?? []).map((item) => adaptTradeInfoForCustomerAltToUI(item)),
    showTotal: source?.showTotal ?? false,
    totalpages: source?.totalpages ?? 0,
    totalrecords: source?.totalrecords ?? 0,
  };
}

import { ApiApiSearchResultOfTradeInfoForCustomerAltDto } from '../../../swagger/models/api-api-search-result-of-trade-info-for-customer';
import { ApiSearchResultOfTradeInfoForCustomerAlt } from '../../models/api-search-result-of-trade-info-for-customer-alt.interface';
import { tradeInfoForCustomerAltAdapter } from './trade-info-for-customer-alt.adapter';

export const apiSearchResultOfTradeInfoForCustomerAltAdapter = (source?: ApiApiSearchResultOfTradeInfoForCustomerAltDto | null): ApiSearchResultOfTradeInfoForCustomerAlt => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => tradeInfoForCustomerAltAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

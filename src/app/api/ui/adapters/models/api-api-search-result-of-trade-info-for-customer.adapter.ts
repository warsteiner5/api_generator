import { ApiSearchResultOfTradeInfoForCustomerAlt } from '../../models/api-search-result-of-trade-info-for-customer-alt.interface';
import { ApiApiSearchResultOfTradeInfoForCustomerAltDto } from '../../../swagger/models/api-api-search-result-of-trade-info-for-customer';
import { apiTradeInfoForCustomerAltDtoAdapter } from './api-trade-info-for-customer.adapter';

export const apiApiSearchResultOfTradeInfoForCustomerAltDtoAdapter = (source?: ApiSearchResultOfTradeInfoForCustomerAlt | null): ApiApiSearchResultOfTradeInfoForCustomerAltDto => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => apiTradeInfoForCustomerAltDtoAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

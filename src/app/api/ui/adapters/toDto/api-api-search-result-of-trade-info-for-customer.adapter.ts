import { ApiSearchResultOfTradeInfoForCustomerAlt } from '../../models/api-search-result-of-trade-info-for-customer-alt.interface';
import { ApiApiSearchResultOfTradeInfoForCustomerAltDto } from '../../../swagger/models/api-api-search-result-of-trade-info-for-customer';
import { adaptApiTradeInfoForCustomerAltDto } from './api-trade-info-for-customer.adapter';

export function adaptApiApiSearchResultOfTradeInfoForCustomerAltDto(source?: ApiSearchResultOfTradeInfoForCustomerAlt | null): ApiApiSearchResultOfTradeInfoForCustomerAltDto {
  return {
    currpage: source?.currpage,
    invdata: (source?.invdata ?? []).map((item) => adaptApiTradeInfoForCustomerAltDto(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

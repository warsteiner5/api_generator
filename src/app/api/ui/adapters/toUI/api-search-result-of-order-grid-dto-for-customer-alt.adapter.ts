import { ApiApiSearchResultOfOrderGridDtoForCustomerAltDto } from '../../../swagger/models/api-api-search-result-of-order-grid-dto-for-customer';
import { ApiSearchResultOfOrderGridDtoForCustomerAlt } from '../../models/api-search-result-of-order-grid-dto-for-customer-alt.interface';
import { adaptOrderGridDtoForCustomerAltToUI } from './order-grid-dto-for-customer-alt.adapter';

export function adaptApiSearchResultOfOrderGridDtoForCustomerAltToUI(source?: ApiApiSearchResultOfOrderGridDtoForCustomerAltDto | null): ApiSearchResultOfOrderGridDtoForCustomerAlt {
  return {
    currpage: source?.currpage ?? 0,
    invdata: (source?.invdata ?? []).map((item) => adaptOrderGridDtoForCustomerAltToUI(item)),
    showTotal: source?.showTotal ?? false,
    totalpages: source?.totalpages ?? 0,
    totalrecords: source?.totalrecords ?? 0,
  };
}

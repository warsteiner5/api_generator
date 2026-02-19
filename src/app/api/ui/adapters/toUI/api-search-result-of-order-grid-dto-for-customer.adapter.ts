import { ApiApiSearchResultOfOrderGridDtoForCustomer } from '../../../swagger/models/api-api-search-result-of-order-grid-dto-for-customer';
import { ApiSearchResultOfOrderGridDtoForCustomer } from '../../models/api-search-result-of-order-grid-dto-for-customer.interface';
import { adaptOrderGridDtoForCustomerToUI } from './order-grid-dto-for-customer.adapter';

export function adaptApiSearchResultOfOrderGridDtoForCustomerToUI(source?: ApiApiSearchResultOfOrderGridDtoForCustomer | null): ApiSearchResultOfOrderGridDtoForCustomer {
  return {
    currpage: source?.currpage ?? 0,
    invdata: (source?.invdata ?? []).map((item) => adaptOrderGridDtoForCustomerToUI(item)),
    showTotal: source?.showTotal ?? false,
    totalpages: source?.totalpages ?? 0,
    totalrecords: source?.totalrecords ?? 0,
  };
}

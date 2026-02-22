import { ApiSearchResultOfOrderGridDtoForCustomer } from '../../models/api-search-result-of-order-grid-dto-for-customer.interface';
import { ApiApiSearchResultOfOrderGridDtoForCustomer } from '../../../swagger/models/api-api-search-result-of-order-grid-dto-for-customer';
import { apiOrderGridDtoForCustomerAdapter } from './api-order-grid-dto-for-customer.adapter';

export const apiApiSearchResultOfOrderGridDtoForCustomerAdapter = (source?: ApiSearchResultOfOrderGridDtoForCustomer | null): ApiApiSearchResultOfOrderGridDtoForCustomer => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => apiOrderGridDtoForCustomerAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

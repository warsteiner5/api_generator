import { ApiApiSearchResultOfOrderGridDtoForCustomer } from '../../../swagger/models/api-api-search-result-of-order-grid-dto-for-customer';
import { ApiSearchResultOfOrderGridDtoForCustomer } from '../../models/api-search-result-of-order-grid-dto-for-customer.interface';
import { orderGridDtoForCustomerAdapter } from './order-grid-dto-for-customer.adapter';

export const apiSearchResultOfOrderGridDtoForCustomerAdapter = (source?: ApiApiSearchResultOfOrderGridDtoForCustomer | null): ApiSearchResultOfOrderGridDtoForCustomer => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => orderGridDtoForCustomerAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

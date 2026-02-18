import { ApiSearchResultOfOrderGridDtoForCustomerAlt } from '../../models/api-search-result-of-order-grid-dto-for-customer-alt.interface';
import { ApiApiSearchResultOfOrderGridDtoForCustomerAltDto } from '../../../swagger/models/api-api-search-result-of-order-grid-dto-for-customer';
import { adaptApiOrderGridDtoForCustomerAltDto } from './api-order-grid-dto-for-customer.adapter';

export function adaptApiApiSearchResultOfOrderGridDtoForCustomerAltDto(source?: ApiSearchResultOfOrderGridDtoForCustomerAlt | null): ApiApiSearchResultOfOrderGridDtoForCustomerAltDto {
  return {
    currpage: source?.currpage,
    invdata: (source?.invdata ?? []).map((item) => adaptApiOrderGridDtoForCustomerAltDto(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

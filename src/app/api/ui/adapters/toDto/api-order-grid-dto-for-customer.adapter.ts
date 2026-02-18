import { OrderGridDtoForCustomerAlt } from '../../models/order-grid-dto-for-customer-alt.interface';
import { ApiOrderGridDtoForCustomerAltDto } from '../../../swagger/models/api-order-grid-dto-for-customer';

export function adaptApiOrderGridDtoForCustomerAltDto(source?: OrderGridDtoForCustomerAlt | null): ApiOrderGridDtoForCustomerAltDto {
  return (source ?? {}) as ApiOrderGridDtoForCustomerAltDto;
}

import { OrderFromCartCreatedInfoAlt } from '../../models/order-from-cart-created-info-alt.interface';
import { ApiOrderFromCartCreatedInfoAltDto } from '../../../swagger/models/api-order-from-cart-created-info';

export function adaptApiOrderFromCartCreatedInfoAltDto(source?: OrderFromCartCreatedInfoAlt | null): ApiOrderFromCartCreatedInfoAltDto {
  return {
    Date: source?.date,
    Id: source?.id,
    Sum: source?.sum,
  };
}

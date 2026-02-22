import { CartItemPut } from '../../models/cart-item-put.interface';
import { ApiCartItemPutDto } from '../../../swagger/models/api-cart-item-put-dto';

export const apiCartItemPutDtoAdapter = (source?: CartItemPut | null): ApiCartItemPutDto => {
  return {
    CustomerPrice: source?.customerPrice,
    DeliveryAddress: source?.deliveryAddress,
    DeliveryTime: source?.deliveryTime,
    IsChecked: source?.isChecked,
    KladrRegionCode: source?.kladrRegionCode,
    Quantity: source?.quantity,
  };
}

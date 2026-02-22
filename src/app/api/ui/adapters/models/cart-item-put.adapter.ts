import { ApiCartItemPutDto } from '../../../swagger/models/api-cart-item-put-dto';
import { CartItemPut } from '../../models/cart-item-put.interface';

export const cartItemPutAdapter = (source?: ApiCartItemPutDto | null): CartItemPut => {
  return {
    customerPrice: source?.CustomerPrice,
    deliveryAddress: source?.DeliveryAddress,
    deliveryTime: source?.DeliveryTime,
    isChecked: source?.IsChecked,
    kladrRegionCode: source?.KladrRegionCode,
    quantity: source?.Quantity,
  };
}

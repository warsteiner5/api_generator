import { ApiCartItemPutDto } from '../../../swagger/models/api-cart-item-put-dto';
import { CartItemPut } from '../../models/cart-item-put.interface';

export function adaptCartItemPutToUI(source?: ApiCartItemPutDto | null): CartItemPut {
  return {
    customerPrice: source?.CustomerPrice ?? 0,
    deliveryAddress: source?.DeliveryAddress ?? '',
    deliveryTime: source?.DeliveryTime ?? '',
    isChecked: source?.IsChecked ?? false,
    kladrRegionCode: source?.KladrRegionCode ?? '',
    quantity: source?.Quantity ?? 0,
  };
}

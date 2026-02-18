import { ApiCartPutDto } from '../../../swagger/models/api-cart-put-dto';
import { CartPut } from '../../models/cart-put.interface';

export function adaptCartPutToUI(source?: ApiCartPutDto | null): CartPut {
  return {
    deliveryAddress: source?.DeliveryAddress ?? '',
    deliveryTime: source?.DeliveryTime ?? '',
    isFederalLawsEnable: source?.IsFederalLawsEnable ?? false,
    kladrRegionCode: source?.KladrRegionCode ?? '',
    zmoFinanceSource: source?.ZmoFinanceSource ?? 0,
    zmoFzType: source?.ZmoFzType ?? 0,
  };
}

import { ApiCartPutDto } from '../../../swagger/models/api-cart-put-dto';
import { CartPut } from '../../models/cart-put.interface';

export const cartPutAdapter = (source?: ApiCartPutDto | null): CartPut => {
  return {
    deliveryAddress: source?.DeliveryAddress,
    deliveryTime: source?.DeliveryTime,
    isFederalLawsEnable: source?.IsFederalLawsEnable,
    kladrRegionCode: source?.KladrRegionCode,
    zmoFinanceSource: source?.ZmoFinanceSource,
    zmoFzType: source?.ZmoFzType,
  };
}

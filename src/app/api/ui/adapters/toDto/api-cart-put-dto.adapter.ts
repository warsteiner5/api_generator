import { CartPut } from '../../models/cart-put.interface';
import { ApiCartPutDto } from '../../../swagger/models/api-cart-put-dto';

export function adaptApiCartPutDto(source?: CartPut | null): ApiCartPutDto {
  return {
    DeliveryAddress: source?.deliveryAddress,
    DeliveryTime: source?.deliveryTime,
    IsFederalLawsEnable: source?.isFederalLawsEnable,
    KladrRegionCode: source?.kladrRegionCode,
    ZmoFinanceSource: source?.zmoFinanceSource,
    ZmoFzType: source?.zmoFzType,
  };
}

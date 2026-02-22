import { ApiCartDto } from '../../../swagger/models/api-cart-dto';
import { Cart } from '../../models/cart.interface';
import { cartItemAdapter } from './cart-item.adapter';

export const cartAdapter = (source?: ApiCartDto | null): Cart => {
  return {
    businessOperatorId: source?.BusinessOperatorId,
    clientSessionId: source?.ClientSessionId,
    createdOn: source?.CreatedOn,
    deliveryAddress: source?.DeliveryAddress,
    deliveryTime: source?.DeliveryTime,
    employeeId: source?.EmployeeId,
    id: source?.Id,
    isFederalLawsEnable: source?.IsFederalLawsEnable,
    items: source?.Items?.map((item) => cartItemAdapter(item)),
    kladrRegionCode: source?.KladrRegionCode,
    lastModificationDate: source?.LastModificationDate,
    zmoFinanceSource: source?.ZmoFinanceSource,
    zmoFzType: source?.ZmoFzType,
  };
}

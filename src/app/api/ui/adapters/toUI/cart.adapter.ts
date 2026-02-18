import { ApiCartDto } from '../../../swagger/models/api-cart-dto';
import { Cart } from '../../models/cart.interface';
import { adaptCartItemToUI } from './cart-item.adapter';

export function adaptCartToUI(source?: ApiCartDto | null): Cart {
  return {
    businessOperatorId: source?.BusinessOperatorId ?? 0,
    clientSessionId: source?.ClientSessionId ?? '',
    createdOn: source?.CreatedOn ?? '',
    deliveryAddress: source?.DeliveryAddress ?? '',
    deliveryTime: source?.DeliveryTime ?? '',
    employeeId: source?.EmployeeId ?? 0,
    id: source?.Id ?? '',
    isFederalLawsEnable: source?.IsFederalLawsEnable ?? false,
    items: (source?.Items ?? []).map((item) => adaptCartItemToUI(item)),
    kladrRegionCode: source?.KladrRegionCode ?? '',
    lastModificationDate: source?.LastModificationDate ?? '',
    zmoFinanceSource: source?.ZmoFinanceSource ?? 0,
    zmoFzType: source?.ZmoFzType ?? 0,
  };
}

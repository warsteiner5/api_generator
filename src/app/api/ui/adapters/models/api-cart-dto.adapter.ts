import { Cart } from '../../models/cart.interface';
import { ApiCartDto } from '../../../swagger/models/api-cart-dto';
import { apiCartItemDtoAdapter } from './api-cart-item-dto.adapter';

export const apiCartDtoAdapter = (source?: Cart | null): ApiCartDto => {
  return {
    BusinessOperatorId: source?.businessOperatorId,
    ClientSessionId: source?.clientSessionId,
    CreatedOn: source?.createdOn,
    DeliveryAddress: source?.deliveryAddress,
    DeliveryTime: source?.deliveryTime,
    EmployeeId: source?.employeeId,
    Id: source?.id,
    IsFederalLawsEnable: source?.isFederalLawsEnable,
    Items: source?.items?.map((item) => apiCartItemDtoAdapter(item)),
    KladrRegionCode: source?.kladrRegionCode,
    LastModificationDate: source?.lastModificationDate,
    ZmoFinanceSource: source?.zmoFinanceSource,
    ZmoFzType: source?.zmoFzType,
  };
}

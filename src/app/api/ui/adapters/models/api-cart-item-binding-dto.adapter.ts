import { CartItemBinding } from '../../models/cart-item-binding.interface';
import { ApiCartItemBindingDto } from '../../../swagger/models/api-cart-item-binding-dto';

export const apiCartItemBindingDtoAdapter = (source?: CartItemBinding | null): ApiCartItemBindingDto => {
  return {
    BusinessOperatorId: source?.businessOperatorId,
    Comment: source?.comment,
    DeliveryAddress: source?.deliveryAddress,
    DeliveryTime: source?.deliveryTime,
    IsChecked: source?.isChecked,
    OriginPrice: source?.originPrice,
    ParticipantOfferId: source?.participantOfferId,
    Quantity: source?.quantity,
    TenantId: source?.tenantId,
  };
}

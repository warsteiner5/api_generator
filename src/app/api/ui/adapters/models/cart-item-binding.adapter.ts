import { ApiCartItemBindingDto } from '../../../swagger/models/api-cart-item-binding-dto';
import { CartItemBinding } from '../../models/cart-item-binding.interface';

export const cartItemBindingAdapter = (source?: ApiCartItemBindingDto | null): CartItemBinding => {
  return {
    businessOperatorId: source?.BusinessOperatorId,
    comment: source?.Comment,
    deliveryAddress: source?.DeliveryAddress,
    deliveryTime: source?.DeliveryTime,
    isChecked: source?.IsChecked,
    originPrice: source?.OriginPrice,
    participantOfferId: source?.ParticipantOfferId,
    quantity: source?.Quantity,
    tenantId: source?.TenantId,
  };
}

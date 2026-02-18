import { ApiCartItemBindingDto } from '../../../swagger/models/api-cart-item-binding-dto';
import { CartItemBinding } from '../../models/cart-item-binding.interface';

export function adaptCartItemBindingToUI(source?: ApiCartItemBindingDto | null): CartItemBinding {
  return {
    businessOperatorId: source?.BusinessOperatorId ?? 0,
    comment: source?.Comment ?? '',
    deliveryAddress: source?.DeliveryAddress ?? '',
    deliveryTime: source?.DeliveryTime ?? '',
    isChecked: source?.IsChecked ?? false,
    originPrice: source?.OriginPrice ?? 0,
    participantOfferId: source?.ParticipantOfferId ?? 0,
    quantity: source?.Quantity ?? 0,
    tenantId: source?.TenantId ?? 0,
  };
}

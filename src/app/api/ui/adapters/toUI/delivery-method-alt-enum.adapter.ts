import { ApiDeliveryMethodAltEnum } from '../../../swagger/models/api-delivery-method';
import { DeliveryMethodAltEnum } from '../../enums/delivery-method-alt.enum';

export function adaptDeliveryMethodAltEnumToUI(source?: ApiDeliveryMethodAltEnum | null): DeliveryMethodAltEnum {
  switch (source) {
    case ApiDeliveryMethodAltEnum.DeliveryByTransportCompany:
      return DeliveryMethodAltEnum.DeliveryByTransportCompany;
    case ApiDeliveryMethodAltEnum.FromStorage:
      return DeliveryMethodAltEnum.FromStorage;
    case ApiDeliveryMethodAltEnum.DeliveryBySeller:
      return DeliveryMethodAltEnum.DeliveryBySeller;
    default:
      throw new Error(`Enum value is not defined: ApiDeliveryMethodAltEnum=${String(source)}`);
  }
}

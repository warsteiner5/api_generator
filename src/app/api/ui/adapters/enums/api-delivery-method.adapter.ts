import { DeliveryMethodAltEnum } from '../../enums/delivery-method-alt.enum';
import { ApiDeliveryMethodAltEnum } from '../../../swagger/models/api-delivery-method';

export const apiDeliveryMethodAltEnumAdapter = (source?: DeliveryMethodAltEnum | null): ApiDeliveryMethodAltEnum => {
  switch (source) {
    case DeliveryMethodAltEnum.DeliveryByTransportCompany:
      return ApiDeliveryMethodAltEnum.DeliveryByTransportCompany;
    case DeliveryMethodAltEnum.FromStorage:
      return ApiDeliveryMethodAltEnum.FromStorage;
    case DeliveryMethodAltEnum.DeliveryBySeller:
      return ApiDeliveryMethodAltEnum.DeliveryBySeller;
    default:
      throw new Error(`Enum value is not defined: DeliveryMethodAltEnum=${String(source)}`);
  }
}

import { ApiDeliveryRegionInfoDto } from '../../../swagger/models/api-delivery-region-info-dto';
import { DeliveryRegionInfo } from '../../models/delivery-region-info.interface';

export const deliveryRegionInfoAdapter = (source?: ApiDeliveryRegionInfoDto | null): DeliveryRegionInfo => {
  return {
    id: source?.Id,
    kladrCode: source?.KladrCode,
    kladrName: source?.KladrName,
    participantOfferId: source?.ParticipantOfferId,
    priceListId: source?.PriceListId,
  };
}

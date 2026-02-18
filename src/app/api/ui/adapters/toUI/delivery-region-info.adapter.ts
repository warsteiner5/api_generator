import { ApiDeliveryRegionInfoDto } from '../../../swagger/models/api-delivery-region-info-dto';
import { DeliveryRegionInfo } from '../../models/delivery-region-info.interface';

export function adaptDeliveryRegionInfoToUI(source?: ApiDeliveryRegionInfoDto | null): DeliveryRegionInfo {
  return {
    id: source?.Id ?? 0,
    kladrCode: source?.KladrCode ?? '',
    kladrName: source?.KladrName ?? '',
    participantOfferId: source?.ParticipantOfferId ?? 0,
    priceListId: source?.PriceListId ?? 0,
  };
}

import { DeliveryRegionInfo } from '../../models/delivery-region-info.interface';
import { ApiDeliveryRegionInfoDto } from '../../../swagger/models/api-delivery-region-info-dto';

export function adaptApiDeliveryRegionInfoDto(source?: DeliveryRegionInfo | null): ApiDeliveryRegionInfoDto {
  return {
    Id: source?.id,
    KladrCode: source?.kladrCode,
    KladrName: source?.kladrName,
    ParticipantOfferId: source?.participantOfferId,
    PriceListId: source?.priceListId,
  };
}

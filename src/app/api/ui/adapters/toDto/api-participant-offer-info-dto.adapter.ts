import { ParticipantOfferInfo } from '../../models/participant-offer-info.interface';
import { ApiParticipantOfferInfoDto } from '../../../swagger/models/api-participant-offer-info-dto';

export function adaptApiParticipantOfferInfoDto(source?: ParticipantOfferInfo | null): ApiParticipantOfferInfoDto {
  return {
    Id: source?.id,
    OrganizationGuid: source?.organizationGuid,
    PriceListId: source?.priceListId,
    ProductName: source?.productName,
  };
}

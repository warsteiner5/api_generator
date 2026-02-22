import { ApiParticipantOfferInfoDto } from '../../../swagger/models/api-participant-offer-info-dto';
import { ParticipantOfferInfo } from '../../models/participant-offer-info.interface';

export const participantOfferInfoAdapter = (source?: ApiParticipantOfferInfoDto | null): ParticipantOfferInfo => {
  return {
    id: source?.Id,
    organizationGuid: source?.OrganizationGuid,
    priceListId: source?.PriceListId,
    productName: source?.ProductName,
  };
}

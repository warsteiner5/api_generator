import { ApiParticipantOfferInfoDto } from '../../../swagger/models/api-participant-offer-info-dto';
import { ParticipantOfferInfo } from '../../models/participant-offer-info.interface';

export function adaptParticipantOfferInfoToUI(source?: ApiParticipantOfferInfoDto | null): ParticipantOfferInfo {
  return {
    id: source?.Id ?? 0,
    organizationGuid: source?.OrganizationGuid ?? '',
    priceListId: source?.PriceListId ?? 0,
    productName: source?.ProductName ?? '',
  };
}

import { ApiParticipantOfferShortInfoDto } from '../../../swagger/models/api-participant-offer-short-info-dto';
import { ParticipantOfferShortInfo } from '../../models/participant-offer-short-info.interface';

export const participantOfferShortInfoAdapter = (source?: ApiParticipantOfferShortInfoDto | null): ParticipantOfferShortInfo => {
  return {
    id: source?.Id,
    lotItemId: source?.LotItemId,
    lotItemOkeiName: source?.LotItemOkeiName,
    name: source?.Name,
    selected: source?.Selected,
    unitPrice: source?.UnitPrice,
  };
}

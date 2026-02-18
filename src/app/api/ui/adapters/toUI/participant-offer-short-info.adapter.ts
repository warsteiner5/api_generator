import { ApiParticipantOfferShortInfoDto } from '../../../swagger/models/api-participant-offer-short-info-dto';
import { ParticipantOfferShortInfo } from '../../models/participant-offer-short-info.interface';

export function adaptParticipantOfferShortInfoToUI(source?: ApiParticipantOfferShortInfoDto | null): ParticipantOfferShortInfo {
  return {
    id: source?.Id ?? 0,
    lotItemId: source?.LotItemId ?? 0,
    lotItemOkeiName: source?.LotItemOkeiName ?? '',
    name: source?.Name ?? '',
    selected: source?.Selected ?? false,
    unitPrice: source?.UnitPrice ?? 0,
  };
}

import { ParticipantOfferShortInfo } from '../../models/participant-offer-short-info.interface';
import { ApiParticipantOfferShortInfoDto } from '../../../swagger/models/api-participant-offer-short-info-dto';

export function adaptApiParticipantOfferShortInfoDto(source?: ParticipantOfferShortInfo | null): ApiParticipantOfferShortInfoDto {
  return {
    Id: source?.id,
    LotItemId: source?.lotItemId,
    LotItemOkeiName: source?.lotItemOkeiName,
    Name: source?.name,
    Selected: source?.selected,
    UnitPrice: source?.unitPrice,
  };
}

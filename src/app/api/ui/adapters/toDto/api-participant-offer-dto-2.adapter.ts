import { ParticipantOfferDto2 } from '../../models/participant-offer-dto-2.interface';
import { ApiParticipantOfferDto2 } from '../../../swagger/models/api-participant-offer-dto-2';
import { adaptApiOkpd2MarketDto } from './api-okpd-2-market-dto.adapter';
import { adaptApiParticipantOfferStateEnum } from './api-participant-offer-state-enum.adapter';

export function adaptApiParticipantOfferDto2(source?: ParticipantOfferDto2 | null): ApiParticipantOfferDto2 {
  return {
    Id: source?.id,
    ImageUrl: source?.imageUrl,
    OfferState: adaptApiParticipantOfferStateEnum(source?.offerState),
    OfferTerms: source?.offerTerms,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Values: (source?.okpd2Values ?? []).map((item) => adaptApiOkpd2MarketDto(item)),
    ParticipantInn: source?.participantInn,
    ParticipantKpp: source?.participantKpp,
    ProductName: source?.productName,
    Quantity: source?.quantity,
    UnitPrice: source?.unitPrice,
  };
}

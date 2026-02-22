import { ParticipantOfferDto2 } from '../../models/participant-offer-dto-2.interface';
import { ApiParticipantOfferDto2 } from '../../../swagger/models/api-participant-offer-dto-2';
import { apiOkpd2MarketDtoAdapter } from './api-okpd-2-market-dto.adapter';
import { apiParticipantOfferStateEnumAdapter } from '../enums/api-participant-offer-state-enum.adapter';

export const apiParticipantOfferDto2Adapter = (source?: ParticipantOfferDto2 | null): ApiParticipantOfferDto2 => {
  return {
    Id: source?.id,
    ImageUrl: source?.imageUrl,
    OfferState: source?.offerState === null ? undefined : apiParticipantOfferStateEnumAdapter(source?.offerState),
    OfferTerms: source?.offerTerms,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Values: source?.okpd2Values?.map((item) => apiOkpd2MarketDtoAdapter(item)),
    ParticipantInn: source?.participantInn,
    ParticipantKpp: source?.participantKpp,
    ProductName: source?.productName,
    Quantity: source?.quantity,
    UnitPrice: source?.unitPrice,
  };
}

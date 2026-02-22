import { ApiParticipantOfferDto2 } from '../../../swagger/models/api-participant-offer-dto-2';
import { ParticipantOfferDto2 } from '../../models/participant-offer-dto-2.interface';
import { okpd2MarketAdapter } from './okpd-2-market.adapter';
import { participantOfferStateEnumAdapter } from '../enums/participant-offer-state-enum.adapter';

export const participantOfferDto2Adapter = (source?: ApiParticipantOfferDto2 | null): ParticipantOfferDto2 => {
  return {
    id: source?.Id,
    imageUrl: source?.ImageUrl,
    offerState: source?.OfferState === null ? undefined : participantOfferStateEnumAdapter(source?.OfferState),
    offerTerms: source?.OfferTerms,
    okeiCode: source?.OkeiCode,
    okeiDescription: source?.OkeiDescription,
    okpd2Values: source?.Okpd2Values?.map((item) => okpd2MarketAdapter(item)),
    participantInn: source?.ParticipantInn,
    participantKpp: source?.ParticipantKpp,
    productName: source?.ProductName,
    quantity: source?.Quantity,
    unitPrice: source?.UnitPrice,
  };
}

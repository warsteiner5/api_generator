import { ApiParticipantOfferDto2 } from '../../../swagger/models/api-participant-offer-dto-2';
import { ParticipantOfferDto2 } from '../../models/participant-offer-dto-2.interface';
import { adaptOkpd2MarketToUI } from './okpd-2-market.adapter';
import { adaptParticipantOfferStateEnumToUI } from './participant-offer-state-enum.adapter';

export function adaptParticipantOfferDto2ToUI(source?: ApiParticipantOfferDto2 | null): ParticipantOfferDto2 {
  return {
    id: source?.Id ?? 0,
    imageUrl: source?.ImageUrl ?? '',
    offerState: adaptParticipantOfferStateEnumToUI(source?.OfferState),
    offerTerms: source?.OfferTerms ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okeiDescription: source?.OkeiDescription ?? '',
    okpd2Values: (source?.Okpd2Values ?? []).map((item) => adaptOkpd2MarketToUI(item)),
    participantInn: source?.ParticipantInn ?? '',
    participantKpp: source?.ParticipantKpp ?? '',
    productName: source?.ProductName ?? '',
    quantity: source?.Quantity ?? 0,
    unitPrice: source?.UnitPrice ?? 0,
  };
}

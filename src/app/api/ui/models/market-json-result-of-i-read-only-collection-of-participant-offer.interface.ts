import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { ParticipantOfferDto2 } from './participant-offer-dto-2.interface';

export type MarketJsonResultOfIReadOnlyCollectionOfParticipantOffer = MarketJsonVoidResultAlt & { 'data'?: Array<ParticipantOfferDto2> | null; };

import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { ParticipantOfferItem } from './participant-offer-item.interface';

export type MarketJsonResultOfListOfParticipantOfferItem = MarketJsonVoidResultAlt & { 'data'?: Array<ParticipantOfferItem> | null; };

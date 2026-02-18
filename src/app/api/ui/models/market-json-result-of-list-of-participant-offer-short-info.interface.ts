import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { ParticipantOfferShortInfo } from './participant-offer-short-info.interface';

export type MarketJsonResultOfListOfParticipantOfferShortInfo = MarketJsonVoidResultAlt & { 'data'?: Array<ParticipantOfferShortInfo> | null; };

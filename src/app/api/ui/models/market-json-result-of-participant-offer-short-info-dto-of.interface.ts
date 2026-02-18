import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { ParticipantOfferShortInfo } from './participant-offer-short-info.interface';

export type MarketJsonResultOfParticipantOfferShortInfoDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<ParticipantOfferShortInfo> | null; };

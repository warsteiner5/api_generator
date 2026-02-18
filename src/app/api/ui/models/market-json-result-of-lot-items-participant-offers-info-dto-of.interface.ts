import { LotItemsParticipantOffersInfo } from './lot-items-participant-offers-info.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfLotItemsParticipantOffersInfoDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<LotItemsParticipantOffersInfo> | null; };

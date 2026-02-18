import { ExternalLotItemsParticipantOffersInfo } from './external-lot-items-participant-offers-info.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<ExternalLotItemsParticipantOffersInfo> | null; };

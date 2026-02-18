import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { ParticipantOfferPublishResult } from './participant-offer-publish-result.interface';

export type MarketJsonResultOfParticipantOfferPublishResult = MarketJsonVoidResultAlt & { 'data'?: ParticipantOfferPublishResult | null; };

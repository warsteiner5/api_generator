import { CompetitiveListItemForParticipantOfferTemplate } from './competitive-list-item-for-participant-offer-template.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCompetitiveListItemForParticipantOfferTemplate = MarketJsonVoidResultAlt & { 'data'?: CompetitiveListItemForParticipantOfferTemplate | null; };

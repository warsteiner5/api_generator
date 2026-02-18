import { ApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto } from '../../../swagger/models/api-market-json-result-of-competitive-list-item-for-participant-offer-template-dto';
import { MarketJsonResultOfCompetitiveListItemForParticipantOfferTemplate } from '../../models/market-json-result-of-competitive-list-item-for-participant-offer-template.interface';

export function adaptMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateToUI(source?: ApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto | null): MarketJsonResultOfCompetitiveListItemForParticipantOfferTemplate {
  return (source ?? {}) as MarketJsonResultOfCompetitiveListItemForParticipantOfferTemplate;
}

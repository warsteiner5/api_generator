import { MarketJsonResultOfCompetitiveListItemForParticipantOfferTemplate } from '../../models/market-json-result-of-competitive-list-item-for-participant-offer-template.interface';
import { ApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto } from '../../../swagger/models/api-market-json-result-of-competitive-list-item-for-participant-offer-template-dto';

export function adaptApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto(source?: MarketJsonResultOfCompetitiveListItemForParticipantOfferTemplate | null): ApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto {
  return (source ?? {}) as ApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto;
}

import { ApiMarketJsonResultOfFormTemplateDto } from '../../../swagger/models/api-market-json-result-of-form-template-dto';
import { MarketJsonResultOfFormTemplate } from '../../models/market-json-result-of-form-template.interface';

export function adaptMarketJsonResultOfFormTemplateToUI(source?: ApiMarketJsonResultOfFormTemplateDto | null): MarketJsonResultOfFormTemplate {
  return (source ?? {}) as MarketJsonResultOfFormTemplate;
}

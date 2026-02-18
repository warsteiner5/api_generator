import { MarketJsonResultOfFormTemplate } from '../../models/market-json-result-of-form-template.interface';
import { ApiMarketJsonResultOfFormTemplateDto } from '../../../swagger/models/api-market-json-result-of-form-template-dto';

export function adaptApiMarketJsonResultOfFormTemplateDto(source?: MarketJsonResultOfFormTemplate | null): ApiMarketJsonResultOfFormTemplateDto {
  return (source ?? {}) as ApiMarketJsonResultOfFormTemplateDto;
}

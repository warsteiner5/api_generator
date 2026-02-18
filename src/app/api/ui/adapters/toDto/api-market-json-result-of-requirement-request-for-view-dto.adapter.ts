import { MarketJsonResultOfRequirementRequestForView } from '../../models/market-json-result-of-requirement-request-for-view.interface';
import { ApiMarketJsonResultOfRequirementRequestForViewDto } from '../../../swagger/models/api-market-json-result-of-requirement-request-for-view-dto';

export function adaptApiMarketJsonResultOfRequirementRequestForViewDto(source?: MarketJsonResultOfRequirementRequestForView | null): ApiMarketJsonResultOfRequirementRequestForViewDto {
  return (source ?? {}) as ApiMarketJsonResultOfRequirementRequestForViewDto;
}

import { ApiMarketJsonResultOfRequirementRequestForViewDto } from '../../../swagger/models/api-market-json-result-of-requirement-request-for-view-dto';
import { MarketJsonResultOfRequirementRequestForView } from '../../models/market-json-result-of-requirement-request-for-view.interface';

export function adaptMarketJsonResultOfRequirementRequestForViewToUI(source?: ApiMarketJsonResultOfRequirementRequestForViewDto | null): MarketJsonResultOfRequirementRequestForView {
  return (source ?? {}) as MarketJsonResultOfRequirementRequestForView;
}

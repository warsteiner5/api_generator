import { ApiMarketJsonResultOfTagOperatorViewDto } from '../../../swagger/models/api-market-json-result-of-tag-operator-view-dto';
import { MarketJsonResultOfTagOperatorView } from '../../models/market-json-result-of-tag-operator-view.interface';

export function adaptMarketJsonResultOfTagOperatorViewToUI(source?: ApiMarketJsonResultOfTagOperatorViewDto | null): MarketJsonResultOfTagOperatorView {
  return (source ?? {}) as MarketJsonResultOfTagOperatorView;
}

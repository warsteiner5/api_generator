import { MarketJsonResultOfTagOperatorView } from '../../models/market-json-result-of-tag-operator-view.interface';
import { ApiMarketJsonResultOfTagOperatorViewDto } from '../../../swagger/models/api-market-json-result-of-tag-operator-view-dto';

export function adaptApiMarketJsonResultOfTagOperatorViewDto(source?: MarketJsonResultOfTagOperatorView | null): ApiMarketJsonResultOfTagOperatorViewDto {
  return (source ?? {}) as ApiMarketJsonResultOfTagOperatorViewDto;
}

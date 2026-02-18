import { ApiMarketJsonResultOfOkopfDto } from '../../../swagger/models/api-market-json-result-of-okopf-dto';
import { MarketJsonResultOfOkopf } from '../../models/market-json-result-of-okopf.interface';

export function adaptMarketJsonResultOfOkopfToUI(source?: ApiMarketJsonResultOfOkopfDto | null): MarketJsonResultOfOkopf {
  return (source ?? {}) as MarketJsonResultOfOkopf;
}

import { ApiMarketJsonResultOfApplicationDto } from '../../../swagger/models/api-market-json-result-of-application-dto';
import { MarketJsonResultOfApplication } from '../../models/market-json-result-of-application.interface';

export function adaptMarketJsonResultOfApplicationToUI(source?: ApiMarketJsonResultOfApplicationDto | null): MarketJsonResultOfApplication {
  return (source ?? {}) as MarketJsonResultOfApplication;
}

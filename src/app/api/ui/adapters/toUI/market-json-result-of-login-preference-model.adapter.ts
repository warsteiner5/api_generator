import { ApiMarketJsonResultOfLoginPreferenceModel } from '../../../swagger/models/api-market-json-result-of-login-preference-model';
import { MarketJsonResultOfLoginPreferenceModel } from '../../models/market-json-result-of-login-preference-model.interface';

export function adaptMarketJsonResultOfLoginPreferenceModelToUI(source?: ApiMarketJsonResultOfLoginPreferenceModel | null): MarketJsonResultOfLoginPreferenceModel {
  return (source ?? {}) as MarketJsonResultOfLoginPreferenceModel;
}

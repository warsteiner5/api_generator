import { MarketJsonResultOfLoginPreferenceModel } from '../../models/market-json-result-of-login-preference-model.interface';
import { ApiMarketJsonResultOfLoginPreferenceModel } from '../../../swagger/models/api-market-json-result-of-login-preference-model';

export function adaptApiMarketJsonResultOfLoginPreferenceModel(source?: MarketJsonResultOfLoginPreferenceModel | null): ApiMarketJsonResultOfLoginPreferenceModel {
  return (source ?? {}) as ApiMarketJsonResultOfLoginPreferenceModel;
}

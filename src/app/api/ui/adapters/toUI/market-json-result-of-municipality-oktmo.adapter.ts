import { ApiMarketJsonResultOfMunicipalityOktmoDto } from '../../../swagger/models/api-market-json-result-of-municipality-oktmo-dto';
import { MarketJsonResultOfMunicipalityOktmo } from '../../models/market-json-result-of-municipality-oktmo.interface';

export function adaptMarketJsonResultOfMunicipalityOktmoToUI(source?: ApiMarketJsonResultOfMunicipalityOktmoDto | null): MarketJsonResultOfMunicipalityOktmo {
  return (source ?? {}) as MarketJsonResultOfMunicipalityOktmo;
}

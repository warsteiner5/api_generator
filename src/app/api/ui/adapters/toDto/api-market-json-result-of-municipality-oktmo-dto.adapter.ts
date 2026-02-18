import { MarketJsonResultOfMunicipalityOktmo } from '../../models/market-json-result-of-municipality-oktmo.interface';
import { ApiMarketJsonResultOfMunicipalityOktmoDto } from '../../../swagger/models/api-market-json-result-of-municipality-oktmo-dto';

export function adaptApiMarketJsonResultOfMunicipalityOktmoDto(source?: MarketJsonResultOfMunicipalityOktmo | null): ApiMarketJsonResultOfMunicipalityOktmoDto {
  return (source ?? {}) as ApiMarketJsonResultOfMunicipalityOktmoDto;
}

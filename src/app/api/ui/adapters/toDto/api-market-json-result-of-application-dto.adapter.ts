import { MarketJsonResultOfApplication } from '../../models/market-json-result-of-application.interface';
import { ApiMarketJsonResultOfApplicationDto } from '../../../swagger/models/api-market-json-result-of-application-dto';

export function adaptApiMarketJsonResultOfApplicationDto(source?: MarketJsonResultOfApplication | null): ApiMarketJsonResultOfApplicationDto {
  return (source ?? {}) as ApiMarketJsonResultOfApplicationDto;
}

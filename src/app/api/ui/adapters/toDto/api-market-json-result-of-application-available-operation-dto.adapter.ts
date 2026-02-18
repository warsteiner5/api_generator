import { MarketJsonResultOfApplicationAvailableOperation } from '../../models/market-json-result-of-application-available-operation.interface';
import { ApiMarketJsonResultOfApplicationAvailableOperationDto } from '../../../swagger/models/api-market-json-result-of-application-available-operation-dto';

export function adaptApiMarketJsonResultOfApplicationAvailableOperationDto(source?: MarketJsonResultOfApplicationAvailableOperation | null): ApiMarketJsonResultOfApplicationAvailableOperationDto {
  return (source ?? {}) as ApiMarketJsonResultOfApplicationAvailableOperationDto;
}

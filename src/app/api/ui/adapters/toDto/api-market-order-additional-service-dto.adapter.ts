import { MarketOrderAdditionalService } from '../../models/market-order-additional-service.interface';
import { ApiMarketOrderAdditionalServiceDto } from '../../../swagger/models/api-market-order-additional-service-dto';

export function adaptApiMarketOrderAdditionalServiceDto(source?: MarketOrderAdditionalService | null): ApiMarketOrderAdditionalServiceDto {
  return {
    Name: source?.name,
    Price: source?.price,
  };
}

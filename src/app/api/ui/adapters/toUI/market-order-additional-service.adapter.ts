import { ApiMarketOrderAdditionalServiceDto } from '../../../swagger/models/api-market-order-additional-service-dto';
import { MarketOrderAdditionalService } from '../../models/market-order-additional-service.interface';

export function adaptMarketOrderAdditionalServiceToUI(source?: ApiMarketOrderAdditionalServiceDto | null): MarketOrderAdditionalService {
  return {
    name: source?.Name ?? '',
    price: source?.Price ?? 0,
  };
}

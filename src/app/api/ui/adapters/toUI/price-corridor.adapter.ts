import { ApiPriceCorridorDto } from '../../../swagger/models/api-price-corridor-dto';
import { PriceCorridor } from '../../models/price-corridor.interface';

export function adaptPriceCorridorToUI(source?: ApiPriceCorridorDto | null): PriceCorridor {
  return {
    isUsed: source?.IsUsed ?? false,
    maximumPrice: source?.MaximumPrice ?? 0,
    minimumPrice: source?.MinimumPrice ?? 0,
  };
}

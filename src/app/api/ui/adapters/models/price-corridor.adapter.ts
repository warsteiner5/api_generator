import { ApiPriceCorridorDto } from '../../../swagger/models/api-price-corridor-dto';
import { PriceCorridor } from '../../models/price-corridor.interface';

export const priceCorridorAdapter = (source?: ApiPriceCorridorDto | null): PriceCorridor => {
  return {
    isUsed: source?.IsUsed,
    maximumPrice: source?.MaximumPrice,
    minimumPrice: source?.MinimumPrice,
  };
}

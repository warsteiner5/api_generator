import { PriceCorridor } from '../../models/price-corridor.interface';
import { ApiPriceCorridorDto } from '../../../swagger/models/api-price-corridor-dto';

export const apiPriceCorridorDtoAdapter = (source?: PriceCorridor | null): ApiPriceCorridorDto => {
  return {
    IsUsed: source?.isUsed,
    MaximumPrice: source?.maximumPrice,
    MinimumPrice: source?.minimumPrice,
  };
}

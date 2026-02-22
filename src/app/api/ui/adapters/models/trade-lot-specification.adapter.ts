import { ApiTradeLotSpecificationDto } from '../../../swagger/models/api-trade-lot-specification-dto';
import { TradeLotSpecification } from '../../models/trade-lot-specification.interface';

export const tradeLotSpecificationAdapter = (source?: ApiTradeLotSpecificationDto | null): TradeLotSpecification => {
  return {
    cost: source?.Cost,
    count: source?.Count,
    id: source?.Id,
    idSpec: source?.IdSpec,
    name: source?.Name,
    okei: source?.Okei,
    okpd2: source?.Okpd2,
    okved2: source?.Okved2,
    totalCost: source?.TotalCost,
  };
}

import { ApiTradeLotSpecificationDto } from '../../../swagger/models/api-trade-lot-specification-dto';
import { TradeLotSpecification } from '../../models/trade-lot-specification.interface';

export function adaptTradeLotSpecificationToUI(source?: ApiTradeLotSpecificationDto | null): TradeLotSpecification {
  return {
    cost: source?.Cost ?? 0,
    count: source?.Count ?? 0,
    id: source?.Id ?? 0,
    idSpec: source?.IdSpec ?? 0,
    name: source?.Name ?? '',
    okei: source?.Okei ?? '',
    okpd2: source?.Okpd2 ?? '',
    okved2: source?.Okved2 ?? '',
    totalCost: source?.TotalCost ?? 0,
  };
}

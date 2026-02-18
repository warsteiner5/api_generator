import { TradeLotSpecification } from '../../models/trade-lot-specification.interface';
import { ApiTradeLotSpecificationDto } from '../../../swagger/models/api-trade-lot-specification-dto';

export function adaptApiTradeLotSpecificationDto(source?: TradeLotSpecification | null): ApiTradeLotSpecificationDto {
  return {
    Cost: source?.cost,
    Count: source?.count,
    Id: source?.id,
    IdSpec: source?.idSpec,
    Name: source?.name,
    Okei: source?.okei,
    Okpd2: source?.okpd2,
    Okved2: source?.okved2,
    TotalCost: source?.totalCost,
  };
}

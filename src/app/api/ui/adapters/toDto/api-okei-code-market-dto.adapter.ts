import { OkeiCodeMarket } from '../../models/okei-code-market.interface';
import { ApiOkeiCodeMarketDto } from '../../../swagger/models/api-okei-code-market-dto';

export function adaptApiOkeiCodeMarketDto(source?: OkeiCodeMarket | null): ApiOkeiCodeMarketDto {
  return {
    Code: source?.code,
    FullName: source?.fullName,
  };
}

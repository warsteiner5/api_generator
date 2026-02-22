import { ApiOkeiCodeMarketDto } from '../../../swagger/models/api-okei-code-market-dto';
import { OkeiCodeMarket } from '../../models/okei-code-market.interface';

export const okeiCodeMarketAdapter = (source?: ApiOkeiCodeMarketDto | null): OkeiCodeMarket => {
  return {
    code: source?.Code,
    fullName: source?.FullName,
  };
}

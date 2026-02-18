import { ApiMarketJsonResultOfEmployeeDto } from '../../../swagger/models/api-market-json-result-of-employee-dto';
import { MarketJsonResultOfEmployee } from '../../models/market-json-result-of-employee.interface';

export function adaptMarketJsonResultOfEmployeeToUI(source?: ApiMarketJsonResultOfEmployeeDto | null): MarketJsonResultOfEmployee {
  return (source ?? {}) as MarketJsonResultOfEmployee;
}

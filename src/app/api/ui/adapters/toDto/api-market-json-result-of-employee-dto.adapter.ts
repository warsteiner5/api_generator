import { MarketJsonResultOfEmployee } from '../../models/market-json-result-of-employee.interface';
import { ApiMarketJsonResultOfEmployeeDto } from '../../../swagger/models/api-market-json-result-of-employee-dto';

export function adaptApiMarketJsonResultOfEmployeeDto(source?: MarketJsonResultOfEmployee | null): ApiMarketJsonResultOfEmployeeDto {
  return (source ?? {}) as ApiMarketJsonResultOfEmployeeDto;
}

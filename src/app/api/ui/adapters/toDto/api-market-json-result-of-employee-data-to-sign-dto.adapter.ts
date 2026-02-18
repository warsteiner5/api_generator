import { MarketJsonResultOfEmployeeDataToSign } from '../../models/market-json-result-of-employee-data-to-sign.interface';
import { ApiMarketJsonResultOfEmployeeDataToSignDto } from '../../../swagger/models/api-market-json-result-of-employee-data-to-sign-dto';

export function adaptApiMarketJsonResultOfEmployeeDataToSignDto(source?: MarketJsonResultOfEmployeeDataToSign | null): ApiMarketJsonResultOfEmployeeDataToSignDto {
  return (source ?? {}) as ApiMarketJsonResultOfEmployeeDataToSignDto;
}

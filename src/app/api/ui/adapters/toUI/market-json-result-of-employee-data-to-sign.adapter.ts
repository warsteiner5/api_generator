import { ApiMarketJsonResultOfEmployeeDataToSignDto } from '../../../swagger/models/api-market-json-result-of-employee-data-to-sign-dto';
import { MarketJsonResultOfEmployeeDataToSign } from '../../models/market-json-result-of-employee-data-to-sign.interface';

export function adaptMarketJsonResultOfEmployeeDataToSignToUI(source?: ApiMarketJsonResultOfEmployeeDataToSignDto | null): MarketJsonResultOfEmployeeDataToSign {
  return (source ?? {}) as MarketJsonResultOfEmployeeDataToSign;
}

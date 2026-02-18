import { MarketJsonResultOfEmployeeAgreement } from '../../models/market-json-result-of-employee-agreement.interface';
import { ApiMarketJsonResultOfEmployeeAgreementDto } from '../../../swagger/models/api-market-json-result-of-employee-agreement-dto';

export function adaptApiMarketJsonResultOfEmployeeAgreementDto(source?: MarketJsonResultOfEmployeeAgreement | null): ApiMarketJsonResultOfEmployeeAgreementDto {
  return (source ?? {}) as ApiMarketJsonResultOfEmployeeAgreementDto;
}

import { ApiMarketJsonResultOfEmployeeAgreementDto } from '../../../swagger/models/api-market-json-result-of-employee-agreement-dto';
import { MarketJsonResultOfEmployeeAgreement } from '../../models/market-json-result-of-employee-agreement.interface';

export function adaptMarketJsonResultOfEmployeeAgreementToUI(source?: ApiMarketJsonResultOfEmployeeAgreementDto | null): MarketJsonResultOfEmployeeAgreement {
  return (source ?? {}) as MarketJsonResultOfEmployeeAgreement;
}

import { ApiMarketJsonResultOfIListOfAdditionalAgreementDto } from '../../../swagger/models/api-market-json-result-of-i-list-of-additional-agreement-dto';
import { MarketJsonResultOfIListOfAdditionalAgreement } from '../../models/market-json-result-of-i-list-of-additional-agreement.interface';

export function adaptMarketJsonResultOfIListOfAdditionalAgreementToUI(source?: ApiMarketJsonResultOfIListOfAdditionalAgreementDto | null): MarketJsonResultOfIListOfAdditionalAgreement {
  return (source ?? {}) as MarketJsonResultOfIListOfAdditionalAgreement;
}

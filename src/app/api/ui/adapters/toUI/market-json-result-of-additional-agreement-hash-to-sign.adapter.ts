import { ApiMarketJsonResultOfAdditionalAgreementHashToSignDto } from '../../../swagger/models/api-market-json-result-of-additional-agreement-hash-to-sign-dto';
import { MarketJsonResultOfAdditionalAgreementHashToSign } from '../../models/market-json-result-of-additional-agreement-hash-to-sign.interface';

export function adaptMarketJsonResultOfAdditionalAgreementHashToSignToUI(source?: ApiMarketJsonResultOfAdditionalAgreementHashToSignDto | null): MarketJsonResultOfAdditionalAgreementHashToSign {
  return (source ?? {}) as MarketJsonResultOfAdditionalAgreementHashToSign;
}

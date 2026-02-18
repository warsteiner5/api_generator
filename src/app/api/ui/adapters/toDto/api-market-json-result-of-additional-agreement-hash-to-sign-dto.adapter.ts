import { MarketJsonResultOfAdditionalAgreementHashToSign } from '../../models/market-json-result-of-additional-agreement-hash-to-sign.interface';
import { ApiMarketJsonResultOfAdditionalAgreementHashToSignDto } from '../../../swagger/models/api-market-json-result-of-additional-agreement-hash-to-sign-dto';

export function adaptApiMarketJsonResultOfAdditionalAgreementHashToSignDto(source?: MarketJsonResultOfAdditionalAgreementHashToSign | null): ApiMarketJsonResultOfAdditionalAgreementHashToSignDto {
  return (source ?? {}) as ApiMarketJsonResultOfAdditionalAgreementHashToSignDto;
}

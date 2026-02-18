import { MarketJsonResultOfIListOfAdditionalAgreement } from '../../models/market-json-result-of-i-list-of-additional-agreement.interface';
import { ApiMarketJsonResultOfIListOfAdditionalAgreementDto } from '../../../swagger/models/api-market-json-result-of-i-list-of-additional-agreement-dto';

export function adaptApiMarketJsonResultOfIListOfAdditionalAgreementDto(source?: MarketJsonResultOfIListOfAdditionalAgreement | null): ApiMarketJsonResultOfIListOfAdditionalAgreementDto {
  return (source ?? {}) as ApiMarketJsonResultOfIListOfAdditionalAgreementDto;
}

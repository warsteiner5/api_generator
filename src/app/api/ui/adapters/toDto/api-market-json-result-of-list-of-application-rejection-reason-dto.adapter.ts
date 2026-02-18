import { MarketJsonResultOfListOfApplicationRejectionReason } from '../../models/market-json-result-of-list-of-application-rejection-reason.interface';
import { ApiMarketJsonResultOfListOfApplicationRejectionReasonDto } from '../../../swagger/models/api-market-json-result-of-list-of-application-rejection-reason-dto';

export function adaptApiMarketJsonResultOfListOfApplicationRejectionReasonDto(source?: MarketJsonResultOfListOfApplicationRejectionReason | null): ApiMarketJsonResultOfListOfApplicationRejectionReasonDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfApplicationRejectionReasonDto;
}

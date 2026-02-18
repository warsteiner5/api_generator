import { MarketJsonResultOfListOfDealRejectionReason } from '../../models/market-json-result-of-list-of-deal-rejection-reason.interface';
import { ApiMarketJsonResultOfListOfDealRejectionReasonDto } from '../../../swagger/models/api-market-json-result-of-list-of-deal-rejection-reason-dto';

export function adaptApiMarketJsonResultOfListOfDealRejectionReasonDto(source?: MarketJsonResultOfListOfDealRejectionReason | null): ApiMarketJsonResultOfListOfDealRejectionReasonDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfDealRejectionReasonDto;
}

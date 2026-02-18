import { ApiMarketJsonResultOfListOfDealRejectionReasonDto } from '../../../swagger/models/api-market-json-result-of-list-of-deal-rejection-reason-dto';
import { MarketJsonResultOfListOfDealRejectionReason } from '../../models/market-json-result-of-list-of-deal-rejection-reason.interface';

export function adaptMarketJsonResultOfListOfDealRejectionReasonToUI(source?: ApiMarketJsonResultOfListOfDealRejectionReasonDto | null): MarketJsonResultOfListOfDealRejectionReason {
  return (source ?? {}) as MarketJsonResultOfListOfDealRejectionReason;
}

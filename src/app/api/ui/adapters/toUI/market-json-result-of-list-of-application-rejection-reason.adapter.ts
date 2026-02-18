import { ApiMarketJsonResultOfListOfApplicationRejectionReasonDto } from '../../../swagger/models/api-market-json-result-of-list-of-application-rejection-reason-dto';
import { MarketJsonResultOfListOfApplicationRejectionReason } from '../../models/market-json-result-of-list-of-application-rejection-reason.interface';

export function adaptMarketJsonResultOfListOfApplicationRejectionReasonToUI(source?: ApiMarketJsonResultOfListOfApplicationRejectionReasonDto | null): MarketJsonResultOfListOfApplicationRejectionReason {
  return (source ?? {}) as MarketJsonResultOfListOfApplicationRejectionReason;
}

import { ApiSignBidRequestNewAltDto } from '../../../swagger/models/api-sign-bid-request-new';
import { SignBidRequestNewAlt } from '../../models/sign-bid-request-new-alt.interface';

export const signBidRequestNewAltAdapter = (source?: ApiSignBidRequestNewAltDto | null): SignBidRequestNewAlt => {
  return {
    amount: source?.Amount,
    tradeGuid: source?.TradeGuid,
  };
}

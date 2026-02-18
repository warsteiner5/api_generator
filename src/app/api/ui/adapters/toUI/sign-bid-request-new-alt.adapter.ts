import { ApiSignBidRequestNewAltDto } from '../../../swagger/models/api-sign-bid-request-new';
import { SignBidRequestNewAlt } from '../../models/sign-bid-request-new-alt.interface';

export function adaptSignBidRequestNewAltToUI(source?: ApiSignBidRequestNewAltDto | null): SignBidRequestNewAlt {
  return {
    amount: source?.Amount ?? 0,
    tradeGuid: source?.TradeGuid ?? '',
  };
}

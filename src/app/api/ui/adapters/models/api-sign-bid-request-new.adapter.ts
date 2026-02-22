import { SignBidRequestNewAlt } from '../../models/sign-bid-request-new-alt.interface';
import { ApiSignBidRequestNewAltDto } from '../../../swagger/models/api-sign-bid-request-new';

export const apiSignBidRequestNewAltDtoAdapter = (source?: SignBidRequestNewAlt | null): ApiSignBidRequestNewAltDto => {
  return {
    Amount: source?.amount,
    TradeGuid: source?.tradeGuid,
  };
}

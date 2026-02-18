import { SignBidRequestNewAlt } from '../../models/sign-bid-request-new-alt.interface';
import { ApiSignBidRequestNewAltDto } from '../../../swagger/models/api-sign-bid-request-new';

export function adaptApiSignBidRequestNewAltDto(source?: SignBidRequestNewAlt | null): ApiSignBidRequestNewAltDto {
  return {
    Amount: source?.amount,
    TradeGuid: source?.tradeGuid,
  };
}

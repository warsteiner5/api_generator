import { ApiSignBidRequestAltDto } from '../../../swagger/models/api-sign-bid-request';
import { SignBidRequestAlt } from '../../models/sign-bid-request-alt.interface';

export function adaptSignBidRequestAltToUI(source?: ApiSignBidRequestAltDto | null): SignBidRequestAlt {
  return {
    amount: source?.Amount ?? 0,
    lotId: source?.LotId ?? 0,
  };
}

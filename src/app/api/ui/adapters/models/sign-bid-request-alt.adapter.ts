import { ApiSignBidRequestAltDto } from '../../../swagger/models/api-sign-bid-request';
import { SignBidRequestAlt } from '../../models/sign-bid-request-alt.interface';

export const signBidRequestAltAdapter = (source?: ApiSignBidRequestAltDto | null): SignBidRequestAlt => {
  return {
    amount: source?.Amount,
    lotId: source?.LotId,
  };
}

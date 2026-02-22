import { ApiSignBidResponseAltDto } from '../../../swagger/models/api-sign-bid-response';
import { SignBidResponseAlt } from '../../models/sign-bid-response-alt.interface';

export const signBidResponseAltAdapter = (source?: ApiSignBidResponseAltDto | null): SignBidResponseAlt => {
  return {
    serverSignature: source?.ServerSignature,
    signedData: source?.SignedData,
  };
}

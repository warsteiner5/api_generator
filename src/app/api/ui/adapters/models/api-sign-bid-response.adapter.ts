import { SignBidResponseAlt } from '../../models/sign-bid-response-alt.interface';
import { ApiSignBidResponseAltDto } from '../../../swagger/models/api-sign-bid-response';

export const apiSignBidResponseAltDtoAdapter = (source?: SignBidResponseAlt | null): ApiSignBidResponseAltDto => {
  return {
    ServerSignature: source?.serverSignature,
    SignedData: source?.signedData,
  };
}

import { SignBidResponseAlt } from '../../models/sign-bid-response-alt.interface';
import { ApiSignBidResponseAltDto } from '../../../swagger/models/api-sign-bid-response';

export function adaptApiSignBidResponseAltDto(source?: SignBidResponseAlt | null): ApiSignBidResponseAltDto {
  return {
    ServerSignature: source?.serverSignature,
    SignedData: source?.signedData,
  };
}

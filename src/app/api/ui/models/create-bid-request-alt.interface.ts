import { SignBidRequestAlt } from './sign-bid-request-alt.interface';

export interface CreateBidRequestAlt {
  clientSignature: string;
  sent: string;
  serverSignature: string;
  signBidInfo: SignBidRequestAlt;
  signedData: string;
}

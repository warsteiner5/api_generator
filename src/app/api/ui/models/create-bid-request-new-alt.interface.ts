import { SignBidRequestNewAlt } from './sign-bid-request-new-alt.interface';

// @ts-ignore
export interface CreateBidRequestNewAlt {
  clientSignature: string;
  sent: string;
  serverSignature: string;
  signBidInfo: SignBidRequestNewAlt;
  signedData: string;
}

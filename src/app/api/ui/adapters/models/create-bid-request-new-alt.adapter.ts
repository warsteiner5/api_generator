import { ApiCreateBidRequestNewAltDto } from '../../../swagger/models/api-create-bid-request-new';
import { CreateBidRequestNewAlt } from '../../models/create-bid-request-new-alt.interface';
import { signBidRequestNewAltAdapter } from './sign-bid-request-new-alt.adapter';

export const createBidRequestNewAltAdapter = (source?: ApiCreateBidRequestNewAltDto | null): CreateBidRequestNewAlt => {
  return {
    clientSignature: source?.ClientSignature,
    sent: source?.Sent,
    serverSignature: source?.ServerSignature,
    signBidInfo: source?.SignBidInfo === null ? undefined : signBidRequestNewAltAdapter(source?.SignBidInfo),
    signedData: source?.SignedData,
  };
}

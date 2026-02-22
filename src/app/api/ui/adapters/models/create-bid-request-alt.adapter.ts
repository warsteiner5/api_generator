import { ApiCreateBidRequestAltDto } from '../../../swagger/models/api-create-bid-request';
import { CreateBidRequestAlt } from '../../models/create-bid-request-alt.interface';
import { signBidRequestAltAdapter } from './sign-bid-request-alt.adapter';

export const createBidRequestAltAdapter = (source?: ApiCreateBidRequestAltDto | null): CreateBidRequestAlt => {
  return {
    clientSignature: source?.ClientSignature,
    sent: source?.Sent,
    serverSignature: source?.ServerSignature,
    signBidInfo: source?.SignBidInfo === null ? undefined : signBidRequestAltAdapter(source?.SignBidInfo),
    signedData: source?.SignedData,
  };
}

import { ApiCreateBidRequestNewAltDto } from '../../../swagger/models/api-create-bid-request-new';
import { CreateBidRequestNewAlt } from '../../models/create-bid-request-new-alt.interface';
import { adaptSignBidRequestNewAltToUI } from './sign-bid-request-new-alt.adapter';

export function adaptCreateBidRequestNewAltToUI(source?: ApiCreateBidRequestNewAltDto | null): CreateBidRequestNewAlt {
  return {
    clientSignature: source?.ClientSignature ?? '',
    sent: source?.Sent ?? '',
    serverSignature: source?.ServerSignature ?? '',
    signBidInfo: adaptSignBidRequestNewAltToUI(source?.SignBidInfo),
    signedData: source?.SignedData ?? '',
  };
}

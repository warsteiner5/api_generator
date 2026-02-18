import { ApiCreateBidRequestAltDto } from '../../../swagger/models/api-create-bid-request';
import { CreateBidRequestAlt } from '../../models/create-bid-request-alt.interface';
import { adaptSignBidRequestAltToUI } from './sign-bid-request-alt.adapter';

export function adaptCreateBidRequestAltToUI(source?: ApiCreateBidRequestAltDto | null): CreateBidRequestAlt {
  return {
    clientSignature: source?.ClientSignature ?? '',
    sent: source?.Sent ?? '',
    serverSignature: source?.ServerSignature ?? '',
    signBidInfo: adaptSignBidRequestAltToUI(source?.SignBidInfo),
    signedData: source?.SignedData ?? '',
  };
}

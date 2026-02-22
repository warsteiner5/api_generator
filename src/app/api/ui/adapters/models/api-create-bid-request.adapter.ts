import { CreateBidRequestAlt } from '../../models/create-bid-request-alt.interface';
import { ApiCreateBidRequestAltDto } from '../../../swagger/models/api-create-bid-request';
import { apiSignBidRequestAltDtoAdapter } from './api-sign-bid-request.adapter';

export const apiCreateBidRequestAltDtoAdapter = (source?: CreateBidRequestAlt | null): ApiCreateBidRequestAltDto => {
  return {
    ClientSignature: source?.clientSignature,
    Sent: source?.sent,
    ServerSignature: source?.serverSignature,
    SignBidInfo: source?.signBidInfo === null ? undefined : apiSignBidRequestAltDtoAdapter(source?.signBidInfo),
    SignedData: source?.signedData,
  };
}

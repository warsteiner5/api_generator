import { CreateBidRequestNewAlt } from '../../models/create-bid-request-new-alt.interface';
import { ApiCreateBidRequestNewAltDto } from '../../../swagger/models/api-create-bid-request-new';
import { apiSignBidRequestNewAltDtoAdapter } from './api-sign-bid-request-new.adapter';

export const apiCreateBidRequestNewAltDtoAdapter = (source?: CreateBidRequestNewAlt | null): ApiCreateBidRequestNewAltDto => {
  return {
    ClientSignature: source?.clientSignature,
    Sent: source?.sent,
    ServerSignature: source?.serverSignature,
    SignBidInfo: source?.signBidInfo === null ? undefined : apiSignBidRequestNewAltDtoAdapter(source?.signBidInfo),
    SignedData: source?.signedData,
  };
}

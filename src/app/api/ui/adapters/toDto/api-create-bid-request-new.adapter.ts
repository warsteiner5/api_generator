import { CreateBidRequestNewAlt } from '../../models/create-bid-request-new-alt.interface';
import { ApiCreateBidRequestNewAltDto } from '../../../swagger/models/api-create-bid-request-new';
import { adaptApiSignBidRequestNewAltDto } from './api-sign-bid-request-new.adapter';

export function adaptApiCreateBidRequestNewAltDto(source?: CreateBidRequestNewAlt | null): ApiCreateBidRequestNewAltDto {
  return {
    ClientSignature: source?.clientSignature,
    Sent: source?.sent,
    ServerSignature: source?.serverSignature,
    SignBidInfo: adaptApiSignBidRequestNewAltDto(source?.signBidInfo),
    SignedData: source?.signedData,
  };
}

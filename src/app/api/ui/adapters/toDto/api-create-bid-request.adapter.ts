import { CreateBidRequestAlt } from '../../models/create-bid-request-alt.interface';
import { ApiCreateBidRequestAltDto } from '../../../swagger/models/api-create-bid-request';
import { adaptApiSignBidRequestAltDto } from './api-sign-bid-request.adapter';

export function adaptApiCreateBidRequestAltDto(source?: CreateBidRequestAlt | null): ApiCreateBidRequestAltDto {
  return {
    ClientSignature: source?.clientSignature,
    Sent: source?.sent,
    ServerSignature: source?.serverSignature,
    SignBidInfo: adaptApiSignBidRequestAltDto(source?.signBidInfo),
    SignedData: source?.signedData,
  };
}

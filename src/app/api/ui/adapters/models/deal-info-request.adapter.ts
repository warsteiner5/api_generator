import { ApiDealInfoRequestDto } from '../../../swagger/models/api-deal-info-request-dto';
import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';

export const dealInfoRequestAdapter = (source?: ApiDealInfoRequestDto | null): DealInfoRequest => {
  return {
    certThumbprint: source?.CertThumbprint,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    fileGuids: source?.FileGuids,
    id: source?.Id,
    signatureAlgorithmOid: source?.SignatureAlgorithmOid,
    signedData: source?.SignedData,
  };
}

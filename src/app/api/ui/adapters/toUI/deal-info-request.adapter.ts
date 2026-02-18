import { ApiDealInfoRequestDto } from '../../../swagger/models/api-deal-info-request-dto';
import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';

export function adaptDealInfoRequestToUI(source?: ApiDealInfoRequestDto | null): DealInfoRequest {
  return {
    certThumbprint: source?.CertThumbprint ?? '',
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    fileGuids: source?.FileGuids ?? [],
    id: source?.Id ?? 0,
    signatureAlgorithmOid: source?.SignatureAlgorithmOid ?? '',
    signedData: source?.SignedData ?? '',
  };
}

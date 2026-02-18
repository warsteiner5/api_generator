import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { ApiDealInfoRequestDto } from '../../../swagger/models/api-deal-info-request-dto';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';

export function adaptApiDealInfoRequestDto(source?: DealInfoRequest | null): ApiDealInfoRequestDto {
  return {
    CertThumbprint: source?.certThumbprint,
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    FileGuids: source?.fileGuids ?? [],
    Id: source?.id,
    SignatureAlgorithmOid: source?.signatureAlgorithmOid,
    SignedData: source?.signedData,
  };
}

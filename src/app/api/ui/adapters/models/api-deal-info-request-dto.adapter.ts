import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { ApiDealInfoRequestDto } from '../../../swagger/models/api-deal-info-request-dto';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';

export const apiDealInfoRequestDtoAdapter = (source?: DealInfoRequest | null): ApiDealInfoRequestDto => {
  return {
    CertThumbprint: source?.certThumbprint,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    FileGuids: source?.fileGuids,
    Id: source?.id,
    SignatureAlgorithmOid: source?.signatureAlgorithmOid,
    SignedData: source?.signedData,
  };
}

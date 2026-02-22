import { DealHashToSign } from '../../models/deal-hash-to-sign.interface';
import { ApiDealHashToSignDto } from '../../../swagger/models/api-deal-hash-to-sign-dto';
import { apiDealDocumentToSignDtoAdapter } from './api-deal-document-to-sign-dto.adapter';
import { apiPowerOfAttorneyInfoDtoAdapter } from './api-power-of-attorney-info-dto.adapter';
import { apiPowerOfAttorneyRequiredStateEnumAdapter } from '../enums/api-power-of-attorney-required-state-enum.adapter';

export const apiDealHashToSignDtoAdapter = (source?: DealHashToSign | null): ApiDealHashToSignDto => {
  return {
    DealHashToSign: source?.dealHashToSign,
    FilesToSign: source?.filesToSign?.map((item) => apiDealDocumentToSignDtoAdapter(item)),
    PowerOfAttorneyRequiredState: source?.powerOfAttorneyRequiredState === null ? undefined : apiPowerOfAttorneyRequiredStateEnumAdapter(source?.powerOfAttorneyRequiredState),
    PowersOfAttorneyInfo: source?.powersOfAttorneyInfo?.map((item) => apiPowerOfAttorneyInfoDtoAdapter(item)),
  };
}

import { AdditionalAgreementHashToSign } from '../../models/additional-agreement-hash-to-sign.interface';
import { ApiAdditionalAgreementHashToSignDto } from '../../../swagger/models/api-additional-agreement-hash-to-sign-dto';
import { apiAdditionalAgreementDocumentToSignDtoAdapter } from './api-additional-agreement-document-to-sign-dto.adapter';
import { apiPowerOfAttorneyInfoDtoAdapter } from './api-power-of-attorney-info-dto.adapter';
import { apiPowerOfAttorneyRequiredStateEnumAdapter } from '../enums/api-power-of-attorney-required-state-enum.adapter';

export const apiAdditionalAgreementHashToSignDtoAdapter = (source?: AdditionalAgreementHashToSign | null): ApiAdditionalAgreementHashToSignDto => {
  return {
    AdditionalAgreementHashToSign: source?.additionalAgreementHashToSign,
    FilesToSign: source?.filesToSign?.map((item) => apiAdditionalAgreementDocumentToSignDtoAdapter(item)),
    PowerOfAttorneyRequiredState: source?.powerOfAttorneyRequiredState === null ? undefined : apiPowerOfAttorneyRequiredStateEnumAdapter(source?.powerOfAttorneyRequiredState),
    PowersOfAttorneyInfo: source?.powersOfAttorneyInfo?.map((item) => apiPowerOfAttorneyInfoDtoAdapter(item)),
  };
}

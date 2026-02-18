import { AdditionalAgreementHashToSign } from '../../models/additional-agreement-hash-to-sign.interface';
import { ApiAdditionalAgreementHashToSignDto } from '../../../swagger/models/api-additional-agreement-hash-to-sign-dto';
import { adaptApiAdditionalAgreementDocumentToSignDto } from './api-additional-agreement-document-to-sign-dto.adapter';
import { adaptApiPowerOfAttorneyInfoDto } from './api-power-of-attorney-info-dto.adapter';
import { adaptApiPowerOfAttorneyRequiredStateEnum } from './api-power-of-attorney-required-state-enum.adapter';

export function adaptApiAdditionalAgreementHashToSignDto(source?: AdditionalAgreementHashToSign | null): ApiAdditionalAgreementHashToSignDto {
  return {
    AdditionalAgreementHashToSign: source?.additionalAgreementHashToSign,
    FilesToSign: (source?.filesToSign ?? []).map((item) => adaptApiAdditionalAgreementDocumentToSignDto(item)),
    PowerOfAttorneyRequiredState: adaptApiPowerOfAttorneyRequiredStateEnum(source?.powerOfAttorneyRequiredState),
    PowersOfAttorneyInfo: (source?.powersOfAttorneyInfo ?? []).map((item) => adaptApiPowerOfAttorneyInfoDto(item)),
  };
}

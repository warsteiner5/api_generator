import { ApiAdditionalAgreementHashToSignDto } from '../../../swagger/models/api-additional-agreement-hash-to-sign-dto';
import { AdditionalAgreementHashToSign } from '../../models/additional-agreement-hash-to-sign.interface';
import { adaptAdditionalAgreementDocumentToSignToUI } from './additional-agreement-document-to-sign.adapter';
import { adaptPowerOfAttorneyInfoToUI } from './power-of-attorney-info.adapter';
import { adaptPowerOfAttorneyRequiredStateEnumToUI } from './power-of-attorney-required-state-enum.adapter';

export function adaptAdditionalAgreementHashToSignToUI(source?: ApiAdditionalAgreementHashToSignDto | null): AdditionalAgreementHashToSign {
  return {
    additionalAgreementHashToSign: source?.AdditionalAgreementHashToSign ?? '',
    filesToSign: (source?.FilesToSign ?? []).map((item) => adaptAdditionalAgreementDocumentToSignToUI(item)),
    powerOfAttorneyRequiredState: adaptPowerOfAttorneyRequiredStateEnumToUI(source?.PowerOfAttorneyRequiredState),
    powersOfAttorneyInfo: (source?.PowersOfAttorneyInfo ?? []).map((item) => adaptPowerOfAttorneyInfoToUI(item)),
  };
}

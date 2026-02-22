import { ApiAdditionalAgreementHashToSignDto } from '../../../swagger/models/api-additional-agreement-hash-to-sign-dto';
import { AdditionalAgreementHashToSign } from '../../models/additional-agreement-hash-to-sign.interface';
import { additionalAgreementDocumentToSignAdapter } from './additional-agreement-document-to-sign.adapter';
import { powerOfAttorneyInfoAdapter } from './power-of-attorney-info.adapter';
import { powerOfAttorneyRequiredStateEnumAdapter } from '../enums/power-of-attorney-required-state-enum.adapter';

export const additionalAgreementHashToSignAdapter = (source?: ApiAdditionalAgreementHashToSignDto | null): AdditionalAgreementHashToSign => {
  return {
    additionalAgreementHashToSign: source?.AdditionalAgreementHashToSign,
    filesToSign: source?.FilesToSign?.map((item) => additionalAgreementDocumentToSignAdapter(item)),
    powerOfAttorneyRequiredState: source?.PowerOfAttorneyRequiredState === null ? undefined : powerOfAttorneyRequiredStateEnumAdapter(source?.PowerOfAttorneyRequiredState),
    powersOfAttorneyInfo: source?.PowersOfAttorneyInfo?.map((item) => powerOfAttorneyInfoAdapter(item)),
  };
}

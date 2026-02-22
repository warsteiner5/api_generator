import { ApiDealHashToSignDto } from '../../../swagger/models/api-deal-hash-to-sign-dto';
import { DealHashToSign } from '../../models/deal-hash-to-sign.interface';
import { dealDocumentToSignAdapter } from './deal-document-to-sign.adapter';
import { powerOfAttorneyInfoAdapter } from './power-of-attorney-info.adapter';
import { powerOfAttorneyRequiredStateEnumAdapter } from '../enums/power-of-attorney-required-state-enum.adapter';

export const dealHashToSignAdapter = (source?: ApiDealHashToSignDto | null): DealHashToSign => {
  return {
    dealHashToSign: source?.DealHashToSign,
    filesToSign: source?.FilesToSign?.map((item) => dealDocumentToSignAdapter(item)),
    powerOfAttorneyRequiredState: source?.PowerOfAttorneyRequiredState === null ? undefined : powerOfAttorneyRequiredStateEnumAdapter(source?.PowerOfAttorneyRequiredState),
    powersOfAttorneyInfo: source?.PowersOfAttorneyInfo?.map((item) => powerOfAttorneyInfoAdapter(item)),
  };
}

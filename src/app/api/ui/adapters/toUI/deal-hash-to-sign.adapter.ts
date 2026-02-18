import { ApiDealHashToSignDto } from '../../../swagger/models/api-deal-hash-to-sign-dto';
import { DealHashToSign } from '../../models/deal-hash-to-sign.interface';
import { adaptDealDocumentToSignToUI } from './deal-document-to-sign.adapter';
import { adaptPowerOfAttorneyInfoToUI } from './power-of-attorney-info.adapter';
import { adaptPowerOfAttorneyRequiredStateEnumToUI } from './power-of-attorney-required-state-enum.adapter';

export function adaptDealHashToSignToUI(source?: ApiDealHashToSignDto | null): DealHashToSign {
  return {
    dealHashToSign: source?.DealHashToSign ?? '',
    filesToSign: (source?.FilesToSign ?? []).map((item) => adaptDealDocumentToSignToUI(item)),
    powerOfAttorneyRequiredState: adaptPowerOfAttorneyRequiredStateEnumToUI(source?.PowerOfAttorneyRequiredState),
    powersOfAttorneyInfo: (source?.PowersOfAttorneyInfo ?? []).map((item) => adaptPowerOfAttorneyInfoToUI(item)),
  };
}

import { DealHashToSign } from '../../models/deal-hash-to-sign.interface';
import { ApiDealHashToSignDto } from '../../../swagger/models/api-deal-hash-to-sign-dto';
import { adaptApiDealDocumentToSignDto } from './api-deal-document-to-sign-dto.adapter';
import { adaptApiPowerOfAttorneyInfoDto } from './api-power-of-attorney-info-dto.adapter';
import { adaptApiPowerOfAttorneyRequiredStateEnum } from './api-power-of-attorney-required-state-enum.adapter';

export function adaptApiDealHashToSignDto(source?: DealHashToSign | null): ApiDealHashToSignDto {
  return {
    DealHashToSign: source?.dealHashToSign,
    FilesToSign: (source?.filesToSign ?? []).map((item) => adaptApiDealDocumentToSignDto(item)),
    PowerOfAttorneyRequiredState: adaptApiPowerOfAttorneyRequiredStateEnum(source?.powerOfAttorneyRequiredState),
    PowersOfAttorneyInfo: (source?.powersOfAttorneyInfo ?? []).map((item) => adaptApiPowerOfAttorneyInfoDto(item)),
  };
}

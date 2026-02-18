/* tslint:disable */
/* eslint-disable */
import { ApiDealDocumentToSignDto } from '../models/api-deal-document-to-sign-dto';
import { ApiPowerOfAttorneyInfoDto } from '../models/api-power-of-attorney-info-dto';
import { ApiPowerOfAttorneyRequiredStateEnum } from '../models/api-power-of-attorney-required-state-enum';
export interface ApiDealHashToSignDto {
  DealHashToSign?: string | null;
  FilesToSign?: Array<ApiDealDocumentToSignDto> | null;
  PowerOfAttorneyRequiredState?: ApiPowerOfAttorneyRequiredStateEnum;
  PowersOfAttorneyInfo?: Array<ApiPowerOfAttorneyInfoDto> | null;
}

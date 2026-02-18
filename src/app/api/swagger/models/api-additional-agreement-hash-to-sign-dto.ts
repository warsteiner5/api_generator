/* tslint:disable */
/* eslint-disable */
import { ApiAdditionalAgreementDocumentToSignDto } from '../models/api-additional-agreement-document-to-sign-dto';
import { ApiPowerOfAttorneyInfoDto } from '../models/api-power-of-attorney-info-dto';
import { ApiPowerOfAttorneyRequiredStateEnum } from '../models/api-power-of-attorney-required-state-enum';
export interface ApiAdditionalAgreementHashToSignDto {
  AdditionalAgreementHashToSign?: string | null;
  FilesToSign?: Array<ApiAdditionalAgreementDocumentToSignDto> | null;
  PowerOfAttorneyRequiredState?: ApiPowerOfAttorneyRequiredStateEnum;
  PowersOfAttorneyInfo?: Array<ApiPowerOfAttorneyInfoDto> | null;
}

import { AdditionalAgreementDocumentToSign } from './additional-agreement-document-to-sign.interface';
import { PowerOfAttorneyInfo } from './power-of-attorney-info.interface';
import { PowerOfAttorneyRequiredStateEnum } from '../enums/power-of-attorney-required-state.enum';

// @ts-ignore
export interface AdditionalAgreementHashToSign {
  additionalAgreementHashToSign: string;
  filesToSign: AdditionalAgreementDocumentToSign[];
  powerOfAttorneyRequiredState: PowerOfAttorneyRequiredStateEnum;
  powersOfAttorneyInfo: PowerOfAttorneyInfo[];
}

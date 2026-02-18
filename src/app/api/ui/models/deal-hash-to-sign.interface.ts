import { DealDocumentToSign } from './deal-document-to-sign.interface';
import { PowerOfAttorneyInfo } from './power-of-attorney-info.interface';
import { PowerOfAttorneyRequiredStateEnum } from '../enums/power-of-attorney-required-state.enum';

export interface DealHashToSign {
  dealHashToSign: string;
  filesToSign: DealDocumentToSign[];
  powerOfAttorneyRequiredState: PowerOfAttorneyRequiredStateEnum;
  powersOfAttorneyInfo: PowerOfAttorneyInfo[];
}

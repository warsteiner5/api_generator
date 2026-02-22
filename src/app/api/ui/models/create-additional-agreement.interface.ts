import { AdditionalAgreementDocument } from './additional-agreement-document.interface';
import { AdditionalAgreementFormEnum } from '../enums/additional-agreement-form.enum';

// @ts-ignore
export interface CreateAdditionalAgreement {
  dealId: number;
  documents: AdditionalAgreementDocument[];
  number: string;
  type: AdditionalAgreementFormEnum;
}

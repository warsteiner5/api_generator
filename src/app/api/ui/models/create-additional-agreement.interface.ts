import { AdditionalAgreementDocument } from './additional-agreement-document.interface';
import { AdditionalAgreementFormEnum } from '../enums/additional-agreement-form.enum';

export interface CreateAdditionalAgreement {
  dealId: number;
  documents: AdditionalAgreementDocument[];
  number: string;
  type: AdditionalAgreementFormEnum;
}

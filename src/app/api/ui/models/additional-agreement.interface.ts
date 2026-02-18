import { AdditionalAgreementDocument } from './additional-agreement-document.interface';
import { AdditionalAgreementFormEnum } from '../enums/additional-agreement-form.enum';
import { AdditionalAgreementInitiatorEnum } from '../enums/additional-agreement-initiator.enum';
import { AdditionalAgreementStateEnum } from '../enums/additional-agreement-state.enum';

export interface AdditionalAgreement {
  conclusionDate: string;
  createDate: string;
  currentOrganizationId: number;
  dealId: number;
  documents: AdditionalAgreementDocument[];
  id: number;
  initiatorOrganizationId: number;
  initiatorType: AdditionalAgreementInitiatorEnum;
  number: string;
  rejectReason: string;
  sentDate: string;
  signByInitiatorDate: string;
  signDate: string;
  state: AdditionalAgreementStateEnum;
  type: AdditionalAgreementFormEnum;
}

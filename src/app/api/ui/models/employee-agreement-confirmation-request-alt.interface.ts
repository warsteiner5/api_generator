import { EmployeeAgreementConfirmationDocument } from './employee-agreement-confirmation-document.interface';

export interface EmployeeAgreementConfirmationRequestAlt {
  documents: EmployeeAgreementConfirmationDocument[];
  regulationType: number;
}

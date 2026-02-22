import { EmployeeAgreementConfirmationDocument } from './employee-agreement-confirmation-document.interface';

// @ts-ignore
export interface EmployeeAgreementConfirmationRequestAlt {
  documents: EmployeeAgreementConfirmationDocument[];
  regulationType: number;
}

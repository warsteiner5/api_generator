import { EmployeeAgreementDocument } from './employee-agreement-document.interface';

export interface EmployeeAgreement {
  documents: EmployeeAgreementDocument[];
  isRegulationRequired: boolean;
}

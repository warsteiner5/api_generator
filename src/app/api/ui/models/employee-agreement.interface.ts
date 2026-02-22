import { EmployeeAgreementDocument } from './employee-agreement-document.interface';

// @ts-ignore
export interface EmployeeAgreement {
  documents: EmployeeAgreementDocument[];
  isRegulationRequired: boolean;
}

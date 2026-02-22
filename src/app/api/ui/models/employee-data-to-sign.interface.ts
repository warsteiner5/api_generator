import { EmployeeDocumentToSign } from './employee-document-to-sign.interface';

// @ts-ignore
export interface EmployeeDataToSign {
  employeeToSign: string;
  filesToSign: EmployeeDocumentToSign[];
}

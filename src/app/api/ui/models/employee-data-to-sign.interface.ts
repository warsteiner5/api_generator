import { EmployeeDocumentToSign } from './employee-document-to-sign.interface';

export interface EmployeeDataToSign {
  employeeToSign: string;
  filesToSign: EmployeeDocumentToSign[];
}

import { DocumentTypesAltEnum } from '../enums/document-types-alt.enum';

// @ts-ignore
export interface EmployeeAgreementDocument {
  documentType: DocumentTypesAltEnum;
  fileGuid: string;
  fileName: string;
}

import { DocumentTypesAltEnum } from '../enums/document-types-alt.enum';

export interface EmployeeAgreementDocument {
  documentType: DocumentTypesAltEnum;
  fileGuid: string;
  fileName: string;
}

import { DocumentTypesAltEnum } from '../enums/document-types-alt.enum';

export interface EmployeeAgreementConfirmationDocument {
  documentType: DocumentTypesAltEnum;
  fileId: string;
}

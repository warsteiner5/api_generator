import { DocumentTypesAltEnum } from '../enums/document-types-alt.enum';

export interface OrganizationRegistrationAgreementFile {
  documentType: DocumentTypesAltEnum;
  fileGuid: string;
  fileName: string;
}

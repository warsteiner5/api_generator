import { DocumentTypesAltEnum } from '../enums/document-types-alt.enum';

export interface EmployeeDocument {
  fileGuid: string;
  id: number;
  name: string;
  size: number;
  type: DocumentTypesAltEnum;
}

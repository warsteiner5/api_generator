import { DocumentTypesAltEnum } from '../enums/document-types-alt.enum';

// @ts-ignore
export interface EmployeeDocument {
  fileGuid: string;
  id: number;
  name: string;
  size: number;
  type: DocumentTypesAltEnum;
}

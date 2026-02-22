import { DocumentTypesAltEnum } from '../enums/document-types-alt.enum';

// @ts-ignore
export interface OrganizationRegistryDocument {
  customType: string;
  fileName: string;
  id: string;
  organizationId: number;
  type: DocumentTypesAltEnum;
}

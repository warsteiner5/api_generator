import { DocumentTypesAltEnum } from '../enums/document-types-alt.enum';

export interface OrganizationRegistryDocument {
  customType: string;
  fileName: string;
  id: string;
  organizationId: number;
  type: DocumentTypesAltEnum;
}

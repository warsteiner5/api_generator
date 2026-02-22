import { MarketOrganizationDocumentTypeEnum } from '../enums/market-organization-document-type.enum';

// @ts-ignore
export interface OrganizationProfileDocument {
  comment: string;
  documentType: MarketOrganizationDocumentTypeEnum;
  fileGuid: string;
  fileName: string;
  fileSize: number;
}

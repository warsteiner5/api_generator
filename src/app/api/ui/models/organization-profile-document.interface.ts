import { MarketOrganizationDocumentTypeEnum } from '../enums/market-organization-document-type.enum';

export interface OrganizationProfileDocument {
  comment: string;
  documentType: MarketOrganizationDocumentTypeEnum;
  fileGuid: string;
  fileName: string;
  fileSize: number;
}

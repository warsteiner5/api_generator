import { ExternalDealInfoDocumentForPublishAlt } from './external-deal-info-document-for-publish-alt.interface';
import { ExternalDealInfoItemForPublishAlt } from './external-deal-info-item-for-publish-alt.interface';
import { ExternalDealSupplierForPublishAlt } from './external-deal-supplier-for-publish-alt.interface';

export interface ExternalDealDtoForPublish {
  dealAgreemntDate: string;
  dealNumber: string;
  documents: ExternalDealInfoDocumentForPublishAlt[];
  endExecutionDate: string;
  externalDealInfoItems: ExternalDealInfoItemForPublishAlt[];
  price: number;
  signedOutOfEpReason: string;
  startExecutionDate: string;
  subjectContract: string;
  supplier: ExternalDealSupplierForPublishAlt;
  tradeIdentificationCode: string;
}

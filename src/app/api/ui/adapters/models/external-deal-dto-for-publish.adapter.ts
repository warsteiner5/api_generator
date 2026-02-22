import { ApiExternalDealDtoForPublish } from '../../../swagger/models/api-external-deal-dto-for-publish';
import { ExternalDealDtoForPublish } from '../../models/external-deal-dto-for-publish.interface';
import { externalDealInfoDocumentForPublishAltAdapter } from './external-deal-info-document-for-publish-alt.adapter';
import { externalDealInfoItemForPublishAltAdapter } from './external-deal-info-item-for-publish-alt.adapter';
import { externalDealSupplierForPublishAltAdapter } from './external-deal-supplier-for-publish-alt.adapter';

export const externalDealDtoForPublishAdapter = (source?: ApiExternalDealDtoForPublish | null): ExternalDealDtoForPublish => {
  return {
    dealAgreemntDate: source?.DealAgreemntDate,
    dealNumber: source?.DealNumber,
    documents: source?.Documents?.map((item) => externalDealInfoDocumentForPublishAltAdapter(item)),
    endExecutionDate: source?.EndExecutionDate,
    externalDealInfoItems: source?.ExternalDealInfoItems?.map((item) => externalDealInfoItemForPublishAltAdapter(item)),
    price: source?.Price,
    signedOutOfEpReason: source?.SignedOutOfEpReason,
    startExecutionDate: source?.StartExecutionDate,
    subjectContract: source?.SubjectContract,
    supplier: source?.Supplier === null ? undefined : externalDealSupplierForPublishAltAdapter(source?.Supplier),
    tradeIdentificationCode: source?.TradeIdentificationCode,
  };
}

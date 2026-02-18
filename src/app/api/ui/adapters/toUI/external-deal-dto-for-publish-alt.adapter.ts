import { ApiExternalDealDtoForPublishAltDto } from '../../../swagger/models/api-external-deal-dto-for-publish';
import { ExternalDealDtoForPublishAlt } from '../../models/external-deal-dto-for-publish-alt.interface';
import { adaptExternalDealInfoDocumentForPublishAltToUI } from './external-deal-info-document-for-publish-alt.adapter';
import { adaptExternalDealInfoItemForPublishAltToUI } from './external-deal-info-item-for-publish-alt.adapter';
import { adaptExternalDealSupplierForPublishAltToUI } from './external-deal-supplier-for-publish-alt.adapter';

export function adaptExternalDealDtoForPublishAltToUI(source?: ApiExternalDealDtoForPublishAltDto | null): ExternalDealDtoForPublishAlt {
  return {
    dealAgreemntDate: source?.DealAgreemntDate ?? '',
    dealNumber: source?.DealNumber ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptExternalDealInfoDocumentForPublishAltToUI(item)),
    endExecutionDate: source?.EndExecutionDate ?? '',
    externalDealInfoItems: (source?.ExternalDealInfoItems ?? []).map((item) => adaptExternalDealInfoItemForPublishAltToUI(item)),
    price: source?.Price ?? 0,
    signedOutOfEpReason: source?.SignedOutOfEpReason ?? '',
    startExecutionDate: source?.StartExecutionDate ?? '',
    subjectContract: source?.SubjectContract ?? '',
    supplier: adaptExternalDealSupplierForPublishAltToUI(source?.Supplier),
    tradeIdentificationCode: source?.TradeIdentificationCode ?? '',
  };
}

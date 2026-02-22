import { ExternalDealDtoForPublish } from '../../models/external-deal-dto-for-publish.interface';
import { ApiExternalDealDtoForPublish } from '../../../swagger/models/api-external-deal-dto-for-publish';
import { apiExternalDealInfoDocumentForPublishAltDtoAdapter } from './api-external-deal-info-document-for-publish.adapter';
import { apiExternalDealInfoItemForPublishAltDtoAdapter } from './api-external-deal-info-item-for-publish.adapter';
import { apiExternalDealSupplierForPublishAltDtoAdapter } from './api-external-deal-supplier-for-publish.adapter';

export const apiExternalDealDtoForPublishAdapter = (source?: ExternalDealDtoForPublish | null): ApiExternalDealDtoForPublish => {
  return {
    DealAgreemntDate: source?.dealAgreemntDate,
    DealNumber: source?.dealNumber,
    Documents: source?.documents?.map((item) => apiExternalDealInfoDocumentForPublishAltDtoAdapter(item)),
    EndExecutionDate: source?.endExecutionDate,
    ExternalDealInfoItems: source?.externalDealInfoItems?.map((item) => apiExternalDealInfoItemForPublishAltDtoAdapter(item)),
    Price: source?.price,
    SignedOutOfEpReason: source?.signedOutOfEpReason,
    StartExecutionDate: source?.startExecutionDate,
    SubjectContract: source?.subjectContract,
    Supplier: source?.supplier === null ? undefined : apiExternalDealSupplierForPublishAltDtoAdapter(source?.supplier),
    TradeIdentificationCode: source?.tradeIdentificationCode,
  };
}

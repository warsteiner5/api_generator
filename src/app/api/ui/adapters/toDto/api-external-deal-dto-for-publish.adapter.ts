import { ExternalDealDtoForPublish } from '../../models/external-deal-dto-for-publish.interface';
import { ApiExternalDealDtoForPublish } from '../../../swagger/models/api-external-deal-dto-for-publish';
import { adaptApiExternalDealInfoDocumentForPublishAltDto } from './api-external-deal-info-document-for-publish.adapter';
import { adaptApiExternalDealInfoItemForPublishAltDto } from './api-external-deal-info-item-for-publish.adapter';
import { adaptApiExternalDealSupplierForPublishAltDto } from './api-external-deal-supplier-for-publish.adapter';

export function adaptApiExternalDealDtoForPublish(source?: ExternalDealDtoForPublish | null): ApiExternalDealDtoForPublish {
  return {
    DealAgreemntDate: source?.dealAgreemntDate,
    DealNumber: source?.dealNumber,
    Documents: (source?.documents ?? []).map((item) => adaptApiExternalDealInfoDocumentForPublishAltDto(item)),
    EndExecutionDate: source?.endExecutionDate,
    ExternalDealInfoItems: (source?.externalDealInfoItems ?? []).map((item) => adaptApiExternalDealInfoItemForPublishAltDto(item)),
    Price: source?.price,
    SignedOutOfEpReason: source?.signedOutOfEpReason,
    StartExecutionDate: source?.startExecutionDate,
    SubjectContract: source?.subjectContract,
    Supplier: adaptApiExternalDealSupplierForPublishAltDto(source?.supplier),
    TradeIdentificationCode: source?.tradeIdentificationCode,
  };
}

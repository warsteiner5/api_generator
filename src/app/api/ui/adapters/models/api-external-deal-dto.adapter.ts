import { ExternalDeal } from '../../models/external-deal.interface';
import { ApiExternalDealDto } from '../../../swagger/models/api-external-deal-dto';
import { apiExternalDealDocumentDtoAdapter } from './api-external-deal-document-dto.adapter';
import { apiExternalDealInfoStateEnumAdapter } from '../enums/api-external-deal-info-state-enum.adapter';
import { apiExternalDealItemDtoAdapter } from './api-external-deal-item-dto.adapter';
import { apiExternalDealSupplierDtoAdapter } from './api-external-deal-supplier-dto.adapter';
import { apiSignedOutOfEpReasonTypeEnumAdapter } from '../enums/api-signed-out-of-ep-reason-type-enum.adapter';

export const apiExternalDealDtoAdapter = (source?: ExternalDeal | null): ApiExternalDealDto => {
  return {
    DealAgreementDate: source?.dealAgreementDate,
    DealNumber: source?.dealNumber,
    Documents: source?.documents?.map((item) => apiExternalDealDocumentDtoAdapter(item)),
    EndExecutionDate: source?.endExecutionDate,
    Id: source?.id,
    IsExecutionBeforeAgreementDate: source?.isExecutionBeforeAgreementDate,
    Items: source?.items?.map((item) => apiExternalDealItemDtoAdapter(item)),
    Price: source?.price,
    PriceWarningMessage: source?.priceWarningMessage,
    SignedOutOfEpReason: source?.signedOutOfEpReason,
    SignedOutOfEpReasonType: source?.signedOutOfEpReasonType === null ? undefined : apiSignedOutOfEpReasonTypeEnumAdapter(source?.signedOutOfEpReasonType),
    StartExecutionDate: source?.startExecutionDate,
    State: source?.state === null ? undefined : apiExternalDealInfoStateEnumAdapter(source?.state),
    SubjectContract: source?.subjectContract,
    Supplier: source?.supplier === null ? undefined : apiExternalDealSupplierDtoAdapter(source?.supplier),
    TradeNumber: source?.tradeNumber,
    TradePrice: source?.tradePrice,
  };
}

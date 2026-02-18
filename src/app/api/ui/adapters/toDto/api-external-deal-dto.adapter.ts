import { ExternalDeal } from '../../models/external-deal.interface';
import { ApiExternalDealDto } from '../../../swagger/models/api-external-deal-dto';
import { adaptApiExternalDealDocumentDto } from './api-external-deal-document-dto.adapter';
import { adaptApiExternalDealInfoStateEnum } from './api-external-deal-info-state-enum.adapter';
import { adaptApiExternalDealItemDto } from './api-external-deal-item-dto.adapter';
import { adaptApiExternalDealSupplierDto } from './api-external-deal-supplier-dto.adapter';
import { adaptApiSignedOutOfEpReasonTypeEnum } from './api-signed-out-of-ep-reason-type-enum.adapter';

export function adaptApiExternalDealDto(source?: ExternalDeal | null): ApiExternalDealDto {
  return {
    DealAgreementDate: source?.dealAgreementDate,
    DealNumber: source?.dealNumber,
    Documents: (source?.documents ?? []).map((item) => adaptApiExternalDealDocumentDto(item)),
    EndExecutionDate: source?.endExecutionDate,
    Id: source?.id,
    IsExecutionBeforeAgreementDate: source?.isExecutionBeforeAgreementDate,
    Items: (source?.items ?? []).map((item) => adaptApiExternalDealItemDto(item)),
    Price: source?.price,
    PriceWarningMessage: source?.priceWarningMessage,
    SignedOutOfEpReason: source?.signedOutOfEpReason,
    SignedOutOfEpReasonType: adaptApiSignedOutOfEpReasonTypeEnum(source?.signedOutOfEpReasonType),
    StartExecutionDate: source?.startExecutionDate,
    State: adaptApiExternalDealInfoStateEnum(source?.state),
    SubjectContract: source?.subjectContract,
    Supplier: adaptApiExternalDealSupplierDto(source?.supplier),
    TradeNumber: source?.tradeNumber,
    TradePrice: source?.tradePrice,
  };
}

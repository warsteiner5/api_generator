import { FullDeal } from '../../models/full-deal.interface';
import { ApiFullDealDto } from '../../../swagger/models/api-full-deal-dto';
import { adaptApiAdditionalAgreementDto } from './api-additional-agreement-dto.adapter';
import { adaptApiApplicationStateEnum } from './api-application-state-enum.adapter';
import { adaptApiContactInfoDto } from './api-contact-info-dto.adapter';
import { adaptApiDealDocumentDto } from './api-deal-document-dto.adapter';
import { adaptApiDealEisIntegrationDataAltDto } from './api-deal-eis-integration-data.adapter';
import { adaptApiDealFormEnum } from './api-deal-form-enum.adapter';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';
import { adaptApiDealPositionDto } from './api-deal-position-dto.adapter';
import { adaptApiDealStateEnum } from './api-deal-state-enum.adapter';
import { adaptApiOrganizationCountryAltEnum } from './api-organization-country.adapter';
import { adaptApiPartisipantInfoForDealOutSideEShopAltDto } from './api-partisipant-info-for-deal-out-side-e-shop.adapter';

export function adaptApiFullDealDto(source?: FullDeal | null): ApiFullDealDto {
  return {
    AdditionalAgreements: (source?.additionalAgreements ?? []).map((item) => adaptApiAdditionalAgreementDto(item)),
    AllowPaperDealForm: source?.allowPaperDealForm,
    ApplicationId: source?.applicationId,
    ApplicationState: adaptApiApplicationStateEnum(source?.applicationState),
    BudgetId: source?.budgetId,
    BuyerAgreementComment: source?.buyerAgreementComment,
    CancellationReason: source?.cancellationReason,
    ChangeRequestReason: source?.changeRequestReason,
    ChatId: source?.chatId,
    ConclusionDate: source?.conclusionDate,
    ContactInfo: adaptApiContactInfoDto(source?.contactInfo),
    ContractExecutionDate: source?.contractExecutionDate,
    CustomContractNumber: source?.customContractNumber,
    CustomerCancellationReason: source?.customerCancellationReason,
    DealComment: source?.dealComment,
    DealCustomNumber: source?.dealCustomNumber,
    DealEisCustomNumber: source?.dealEisCustomNumber,
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    DealObjectName: source?.dealObjectName,
    DealOutSideEshop: source?.dealOutSideEshop,
    DealPositions: (source?.dealPositions ?? []).map((item) => adaptApiDealPositionDto(item)),
    DifferenceProtocolReason: source?.differenceProtocolReason,
    Documents: (source?.documents ?? []).map((item) => adaptApiDealDocumentDto(item)),
    EisIntegrationData: adaptApiDealEisIntegrationDataAltDto(source?.eisIntegrationData),
    ExecutionFrom: source?.executionFrom,
    ExecutionTo: source?.executionTo,
    ExternalSystemId: source?.externalSystemId,
    Form: adaptApiDealFormEnum(source?.form),
    Id: source?.id,
    IsAttachPaperDealDocumentsAllowed: source?.isAttachPaperDealDocumentsAllowed,
    IsContractSignedOutOfEp: source?.isContractSignedOutOfEp,
    IsCreateAdditionalAgreementsAllowed: source?.isCreateAdditionalAgreementsAllowed,
    IsDealExecutionOrTerminationAllowed: source?.isDealExecutionOrTerminationAllowed,
    IsPriceChanged: source?.isPriceChanged,
    IsSendContractAllowed: source?.isSendContractAllowed,
    IsSendDealToEisAllowed: source?.isSendDealToEisAllowed,
    IsUnitBidding: source?.isUnitBidding,
    ParticipantExternalOrganizationId: source?.participantExternalOrganizationId,
    ParticipantGuid: source?.participantGuid,
    ParticipantId: source?.participantId,
    ParticipantInn: source?.participantInn,
    ParticipantKpp: source?.participantKpp,
    ParticipantName: source?.participantName,
    ParticipantOrganizationCountry: adaptApiOrganizationCountryAltEnum(source?.participantOrganizationCountry),
    ParticipantPhone: source?.participantPhone,
    ParticipantSource: source?.participantSource,
    ParticipantWarningMessage: source?.participantWarningMessage,
    PartisipantInfo: adaptApiPartisipantInfoForDealOutSideEShopAltDto(source?.partisipantInfo),
    Price: source?.price,
    PriceWarningMessage: source?.priceWarningMessage,
    ReadOnly: source?.readOnly,
    RefusedByCustomerDate: source?.refusedByCustomerDate,
    RequestReason: source?.requestReason,
    SendToProviderDate: source?.sendToProviderDate,
    ShowDownloadFileLinks: source?.showDownloadFileLinks,
    SignByProviderDate: source?.signByProviderDate,
    SignedByOrganizer: source?.signedByOrganizer,
    State: adaptApiDealStateEnum(source?.state),
    TradeId: source?.tradeId,
    TradeIdentificationCode: source?.tradeIdentificationCode,
    TradeLotId: source?.tradeLotId,
    WorkGroupIds: source?.workGroupIds ?? [],
  };
}

import { FullDeal } from '../../models/full-deal.interface';
import { ApiFullDealDto } from '../../../swagger/models/api-full-deal-dto';
import { apiAdditionalAgreementDtoAdapter } from './api-additional-agreement-dto.adapter';
import { apiApplicationStateEnumAdapter } from '../enums/api-application-state-enum.adapter';
import { apiContactInfoDtoAdapter } from './api-contact-info-dto.adapter';
import { apiDealDocumentDtoAdapter } from './api-deal-document-dto.adapter';
import { apiDealEisIntegrationDataAltDtoAdapter } from './api-deal-eis-integration-data.adapter';
import { apiDealFormEnumAdapter } from '../enums/api-deal-form-enum.adapter';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';
import { apiDealPositionDtoAdapter } from './api-deal-position-dto.adapter';
import { apiDealStateEnumAdapter } from '../enums/api-deal-state-enum.adapter';
import { apiOrganizationCountryAltEnumAdapter } from '../enums/api-organization-country.adapter';
import { apiPartisipantInfoForDealOutSideEShopAltDtoAdapter } from './api-partisipant-info-for-deal-out-side-e-shop.adapter';

export const apiFullDealDtoAdapter = (source?: FullDeal | null): ApiFullDealDto => {
  return {
    AdditionalAgreements: source?.additionalAgreements?.map((item) => apiAdditionalAgreementDtoAdapter(item)),
    AllowPaperDealForm: source?.allowPaperDealForm,
    ApplicationId: source?.applicationId,
    ApplicationState: source?.applicationState === null ? undefined : apiApplicationStateEnumAdapter(source?.applicationState),
    BudgetId: source?.budgetId,
    BuyerAgreementComment: source?.buyerAgreementComment,
    CancellationReason: source?.cancellationReason,
    ChangeRequestReason: source?.changeRequestReason,
    ChatId: source?.chatId,
    ConclusionDate: source?.conclusionDate,
    ContactInfo: source?.contactInfo === null ? undefined : apiContactInfoDtoAdapter(source?.contactInfo),
    ContractExecutionDate: source?.contractExecutionDate,
    CustomContractNumber: source?.customContractNumber,
    CustomerCancellationReason: source?.customerCancellationReason,
    DealComment: source?.dealComment,
    DealCustomNumber: source?.dealCustomNumber,
    DealEisCustomNumber: source?.dealEisCustomNumber,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    DealObjectName: source?.dealObjectName,
    DealOutSideEshop: source?.dealOutSideEshop,
    DealPositions: source?.dealPositions?.map((item) => apiDealPositionDtoAdapter(item)),
    DifferenceProtocolReason: source?.differenceProtocolReason,
    Documents: source?.documents?.map((item) => apiDealDocumentDtoAdapter(item)),
    EisIntegrationData: source?.eisIntegrationData === null ? undefined : apiDealEisIntegrationDataAltDtoAdapter(source?.eisIntegrationData),
    ExecutionFrom: source?.executionFrom,
    ExecutionTo: source?.executionTo,
    ExternalSystemId: source?.externalSystemId,
    Form: source?.form === null ? undefined : apiDealFormEnumAdapter(source?.form),
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
    ParticipantOrganizationCountry: source?.participantOrganizationCountry === null ? undefined : apiOrganizationCountryAltEnumAdapter(source?.participantOrganizationCountry),
    ParticipantPhone: source?.participantPhone,
    ParticipantSource: source?.participantSource,
    ParticipantWarningMessage: source?.participantWarningMessage,
    PartisipantInfo: source?.partisipantInfo === null ? undefined : apiPartisipantInfoForDealOutSideEShopAltDtoAdapter(source?.partisipantInfo),
    Price: source?.price,
    PriceWarningMessage: source?.priceWarningMessage,
    ReadOnly: source?.readOnly,
    RefusedByCustomerDate: source?.refusedByCustomerDate,
    RequestReason: source?.requestReason,
    SendToProviderDate: source?.sendToProviderDate,
    ShowDownloadFileLinks: source?.showDownloadFileLinks,
    SignByProviderDate: source?.signByProviderDate,
    SignedByOrganizer: source?.signedByOrganizer,
    State: source?.state === null ? undefined : apiDealStateEnumAdapter(source?.state),
    TradeId: source?.tradeId,
    TradeIdentificationCode: source?.tradeIdentificationCode,
    TradeLotId: source?.tradeLotId,
    WorkGroupIds: source?.workGroupIds,
  };
}

import { ApiFullDealDto } from '../../../swagger/models/api-full-deal-dto';
import { FullDeal } from '../../models/full-deal.interface';
import { adaptAdditionalAgreementToUI } from './additional-agreement.adapter';
import { adaptApplicationStateEnumToUI } from './application-state-enum.adapter';
import { adaptContactInfoToUI } from './contact-info.adapter';
import { adaptDealDocumentToUI } from './deal-document.adapter';
import { adaptDealEisIntegrationDataAltToUI } from './deal-eis-integration-data-alt.adapter';
import { adaptDealFormEnumToUI } from './deal-form-enum.adapter';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';
import { adaptDealPositionToUI } from './deal-position.adapter';
import { adaptDealStateEnumToUI } from './deal-state-enum.adapter';
import { adaptOrganizationCountryAltEnumToUI } from './organization-country-alt-enum.adapter';
import { adaptPartisipantInfoForDealOutSideEShopAltToUI } from './partisipant-info-for-deal-out-side-e-shop-alt.adapter';

export function adaptFullDealToUI(source?: ApiFullDealDto | null): FullDeal {
  return {
    additionalAgreements: (source?.AdditionalAgreements ?? []).map((item) => adaptAdditionalAgreementToUI(item)),
    allowPaperDealForm: source?.AllowPaperDealForm ?? false,
    applicationId: source?.ApplicationId ?? 0,
    applicationState: adaptApplicationStateEnumToUI(source?.ApplicationState),
    budgetId: source?.BudgetId ?? 0,
    buyerAgreementComment: source?.BuyerAgreementComment ?? '',
    cancellationReason: source?.CancellationReason ?? '',
    changeRequestReason: source?.ChangeRequestReason ?? '',
    chatId: source?.ChatId ?? 0,
    conclusionDate: source?.ConclusionDate ?? '',
    contactInfo: adaptContactInfoToUI(source?.ContactInfo),
    contractExecutionDate: source?.ContractExecutionDate ?? '',
    customContractNumber: source?.CustomContractNumber ?? '',
    customerCancellationReason: source?.CustomerCancellationReason ?? '',
    dealComment: source?.DealComment ?? '',
    dealCustomNumber: source?.DealCustomNumber ?? '',
    dealEisCustomNumber: source?.DealEisCustomNumber ?? '',
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    dealObjectName: source?.DealObjectName ?? '',
    dealOutSideEshop: source?.DealOutSideEshop ?? false,
    dealPositions: (source?.DealPositions ?? []).map((item) => adaptDealPositionToUI(item)),
    differenceProtocolReason: source?.DifferenceProtocolReason ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptDealDocumentToUI(item)),
    eisIntegrationData: adaptDealEisIntegrationDataAltToUI(source?.EisIntegrationData),
    executionFrom: source?.ExecutionFrom ?? '',
    executionTo: source?.ExecutionTo ?? '',
    externalSystemId: source?.ExternalSystemId ?? 0,
    form: adaptDealFormEnumToUI(source?.Form),
    id: source?.Id ?? 0,
    isAttachPaperDealDocumentsAllowed: source?.IsAttachPaperDealDocumentsAllowed ?? false,
    isContractSignedOutOfEp: source?.IsContractSignedOutOfEp ?? false,
    isCreateAdditionalAgreementsAllowed: source?.IsCreateAdditionalAgreementsAllowed ?? false,
    isDealExecutionOrTerminationAllowed: source?.IsDealExecutionOrTerminationAllowed ?? false,
    isPriceChanged: source?.IsPriceChanged ?? false,
    isSendContractAllowed: source?.IsSendContractAllowed ?? false,
    isSendDealToEisAllowed: source?.IsSendDealToEisAllowed ?? false,
    isUnitBidding: source?.IsUnitBidding ?? false,
    participantExternalOrganizationId: source?.ParticipantExternalOrganizationId ?? '',
    participantGuid: source?.ParticipantGuid ?? '',
    participantId: source?.ParticipantId ?? '',
    participantInn: source?.ParticipantInn ?? '',
    participantKpp: source?.ParticipantKpp ?? '',
    participantName: source?.ParticipantName ?? '',
    participantOrganizationCountry: adaptOrganizationCountryAltEnumToUI(source?.ParticipantOrganizationCountry),
    participantPhone: source?.ParticipantPhone ?? '',
    participantSource: source?.ParticipantSource ?? 0,
    participantWarningMessage: source?.ParticipantWarningMessage ?? '',
    partisipantInfo: adaptPartisipantInfoForDealOutSideEShopAltToUI(source?.PartisipantInfo),
    price: source?.Price ?? 0,
    priceWarningMessage: source?.PriceWarningMessage ?? '',
    readOnly: source?.ReadOnly ?? false,
    refusedByCustomerDate: source?.RefusedByCustomerDate ?? '',
    requestReason: source?.RequestReason ?? false,
    sendToProviderDate: source?.SendToProviderDate ?? '',
    showDownloadFileLinks: source?.ShowDownloadFileLinks ?? false,
    signByProviderDate: source?.SignByProviderDate ?? '',
    signedByOrganizer: source?.SignedByOrganizer ?? false,
    state: adaptDealStateEnumToUI(source?.State),
    tradeId: source?.TradeId ?? 0,
    tradeIdentificationCode: source?.TradeIdentificationCode ?? '',
    tradeLotId: source?.TradeLotId ?? 0,
    workGroupIds: source?.WorkGroupIds ?? [],
  };
}

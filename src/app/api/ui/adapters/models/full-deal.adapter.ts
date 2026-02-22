import { ApiFullDealDto } from '../../../swagger/models/api-full-deal-dto';
import { FullDeal } from '../../models/full-deal.interface';
import { additionalAgreementAdapter } from './additional-agreement.adapter';
import { applicationStateEnumAdapter } from '../enums/application-state-enum.adapter';
import { contactInfoAdapter } from './contact-info.adapter';
import { dealDocumentAdapter } from './deal-document.adapter';
import { dealEisIntegrationDataAltAdapter } from './deal-eis-integration-data-alt.adapter';
import { dealFormEnumAdapter } from '../enums/deal-form-enum.adapter';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';
import { dealPositionAdapter } from './deal-position.adapter';
import { dealStateEnumAdapter } from '../enums/deal-state-enum.adapter';
import { organizationCountryAltEnumAdapter } from '../enums/organization-country-alt-enum.adapter';
import { partisipantInfoForDealOutSideEShopAltAdapter } from './partisipant-info-for-deal-out-side-e-shop-alt.adapter';

export const fullDealAdapter = (source?: ApiFullDealDto | null): FullDeal => {
  return {
    additionalAgreements: source?.AdditionalAgreements?.map((item) => additionalAgreementAdapter(item)),
    allowPaperDealForm: source?.AllowPaperDealForm,
    applicationId: source?.ApplicationId,
    applicationState: source?.ApplicationState === null ? undefined : applicationStateEnumAdapter(source?.ApplicationState),
    budgetId: source?.BudgetId,
    buyerAgreementComment: source?.BuyerAgreementComment,
    cancellationReason: source?.CancellationReason,
    changeRequestReason: source?.ChangeRequestReason,
    chatId: source?.ChatId,
    conclusionDate: source?.ConclusionDate,
    contactInfo: source?.ContactInfo === null ? undefined : contactInfoAdapter(source?.ContactInfo),
    contractExecutionDate: source?.ContractExecutionDate,
    customContractNumber: source?.CustomContractNumber,
    customerCancellationReason: source?.CustomerCancellationReason,
    dealComment: source?.DealComment,
    dealCustomNumber: source?.DealCustomNumber,
    dealEisCustomNumber: source?.DealEisCustomNumber,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    dealObjectName: source?.DealObjectName,
    dealOutSideEshop: source?.DealOutSideEshop,
    dealPositions: source?.DealPositions?.map((item) => dealPositionAdapter(item)),
    differenceProtocolReason: source?.DifferenceProtocolReason,
    documents: source?.Documents?.map((item) => dealDocumentAdapter(item)),
    eisIntegrationData: source?.EisIntegrationData === null ? undefined : dealEisIntegrationDataAltAdapter(source?.EisIntegrationData),
    executionFrom: source?.ExecutionFrom,
    executionTo: source?.ExecutionTo,
    externalSystemId: source?.ExternalSystemId,
    form: source?.Form === null ? undefined : dealFormEnumAdapter(source?.Form),
    id: source?.Id,
    isAttachPaperDealDocumentsAllowed: source?.IsAttachPaperDealDocumentsAllowed,
    isContractSignedOutOfEp: source?.IsContractSignedOutOfEp,
    isCreateAdditionalAgreementsAllowed: source?.IsCreateAdditionalAgreementsAllowed,
    isDealExecutionOrTerminationAllowed: source?.IsDealExecutionOrTerminationAllowed,
    isPriceChanged: source?.IsPriceChanged,
    isSendContractAllowed: source?.IsSendContractAllowed,
    isSendDealToEisAllowed: source?.IsSendDealToEisAllowed,
    isUnitBidding: source?.IsUnitBidding,
    participantExternalOrganizationId: source?.ParticipantExternalOrganizationId,
    participantGuid: source?.ParticipantGuid,
    participantId: source?.ParticipantId,
    participantInn: source?.ParticipantInn,
    participantKpp: source?.ParticipantKpp,
    participantName: source?.ParticipantName,
    participantOrganizationCountry: source?.ParticipantOrganizationCountry === null ? undefined : organizationCountryAltEnumAdapter(source?.ParticipantOrganizationCountry),
    participantPhone: source?.ParticipantPhone,
    participantSource: source?.ParticipantSource,
    participantWarningMessage: source?.ParticipantWarningMessage,
    partisipantInfo: source?.PartisipantInfo === null ? undefined : partisipantInfoForDealOutSideEShopAltAdapter(source?.PartisipantInfo),
    price: source?.Price,
    priceWarningMessage: source?.PriceWarningMessage,
    readOnly: source?.ReadOnly,
    refusedByCustomerDate: source?.RefusedByCustomerDate,
    requestReason: source?.RequestReason,
    sendToProviderDate: source?.SendToProviderDate,
    showDownloadFileLinks: source?.ShowDownloadFileLinks,
    signByProviderDate: source?.SignByProviderDate,
    signedByOrganizer: source?.SignedByOrganizer,
    state: source?.State === null ? undefined : dealStateEnumAdapter(source?.State),
    tradeId: source?.TradeId,
    tradeIdentificationCode: source?.TradeIdentificationCode,
    tradeLotId: source?.TradeLotId,
    workGroupIds: source?.WorkGroupIds,
  };
}

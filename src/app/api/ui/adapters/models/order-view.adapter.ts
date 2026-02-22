import { ApiOrderViewDto } from '../../../swagger/models/api-order-view-dto';
import { OrderView } from '../../models/order-view.interface';
import { customerContactInfoAltAdapter } from './customer-contact-info-alt.adapter';
import { dealDirectionFlowEnumAdapter } from '../enums/deal-direction-flow-enum.adapter';
import { dealStateEnumAdapter } from '../enums/deal-state-enum.adapter';
import { federalLawLimitAltEnumAdapter } from '../enums/federal-law-limit-alt-enum.adapter';
import { m4DDealSignRequiredEnumAdapter } from '../enums/m-4-d-deal-sign-required-enum.adapter';
import { orderDetailAdapter } from './order-detail.adapter';
import { orderDocumentAdapter } from './order-document.adapter';
import { orderStateEnumAdapter } from '../enums/order-state-enum.adapter';
import { organizationCountryAltEnumAdapter } from '../enums/organization-country-alt-enum.adapter';
import { tradeBusinessFlowEnumAdapter } from '../enums/trade-business-flow-enum.adapter';
import { viewApplicationsForTradeAdapter } from './view-applications-for-trade.adapter';
import { zmoFinanceSourceEnumAdapter } from '../enums/zmo-finance-source-enum.adapter';

export const orderViewAdapter = (source?: ApiOrderViewDto | null): OrderView => {
  return {
    applicationId: source?.ApplicationId,
    applicationSet: source?.ApplicationSet === null ? undefined : viewApplicationsForTradeAdapter(source?.ApplicationSet),
    businessFlowType: source?.BusinessFlowType === null ? undefined : tradeBusinessFlowEnumAdapter(source?.BusinessFlowType),
    canSignDeal: source?.CanSignDeal,
    cancellationReason: source?.CancellationReason,
    contactInfo: source?.ContactInfo === null ? undefined : customerContactInfoAltAdapter(source?.ContactInfo),
    creatorUserId: source?.CreatorUserId,
    currentCustomerHasDealForThisOrder: source?.CurrentCustomerHasDealForThisOrder,
    currentParticipantHasDealForThisOrder: source?.CurrentParticipantHasDealForThisOrder,
    currentStageId: source?.CurrentStageId,
    customerFullName: source?.CustomerFullName,
    customerId: source?.CustomerId,
    customerInn: source?.CustomerInn,
    customerPhysAddress: source?.CustomerPhysAddress,
    dealConclusionTermInfo: source?.DealConclusionTermInfo,
    dealDirectionFlow: source?.DealDirectionFlow === null ? undefined : dealDirectionFlowEnumAdapter(source?.DealDirectionFlow),
    dealState: source?.DealState === null ? undefined : dealStateEnumAdapter(source?.DealState),
    deliveryPlace: source?.DeliveryPlace,
    deliveryTerms: source?.DeliveryTerms,
    description: source?.Description,
    enableMonetizationMarket: source?.EnableMonetizationMarket,
    enableMonetizationZmo: source?.EnableMonetizationZmo,
    externalContractTemplateId: source?.ExternalContractTemplateId,
    federalLawLimit: source?.FederalLawLimit === null ? undefined : federalLawLimitAltEnumAdapter(source?.FederalLawLimit),
    freeWinnerSelectionEnabled: source?.FreeWinnerSelectionEnabled,
    id: source?.Id,
    initialPrice: source?.InitialPrice,
    isBasedOnPublicOffer: source?.IsBasedOnPublicOffer,
    isContractInElectronicForm: source?.IsContractInElectronicForm,
    isEisConcludeDealRequired: source?.IsEisConcludeDealRequired,
    isFederalLawsEnable: source?.IsFederalLawsEnable,
    isParentContractNumberNotSpecified: source?.IsParentContractNumberNotSpecified,
    isParticipantCanCreateDeal: source?.IsParticipantCanCreateDeal,
    isSendContractAllowed: source?.IsSendContractAllowed,
    lastModificationDate: source?.LastModificationDate,
    lotAuctionId: source?.LotAuctionId,
    lotId: source?.LotId,
    m4DDealSignRequired: source?.M4DDealSignRequired === null ? undefined : m4DDealSignRequiredEnumAdapter(source?.M4DDealSignRequired),
    orderDetails: source?.OrderDetails?.map((item) => orderDetailAdapter(item)),
    orderDocuments: source?.OrderDocuments?.map((item) => orderDocumentAdapter(item)),
    orderName: source?.OrderName,
    orderState: source?.OrderState === null ? undefined : orderStateEnumAdapter(source?.OrderState),
    originTradeId: source?.OriginTradeId,
    parentContractNumber: source?.ParentContractNumber,
    parentNotTookPlaceTradeId: source?.ParentNotTookPlaceTradeId,
    participantComment: source?.ParticipantComment,
    participantFullName: source?.ParticipantFullName,
    participantGuid: source?.ParticipantGuid,
    participantId: source?.ParticipantId,
    participantInn: source?.ParticipantInn,
    participantOrganizationCountry: source?.ParticipantOrganizationCountry === null ? undefined : organizationCountryAltEnumAdapter(source?.ParticipantOrganizationCountry),
    planedDealSignDate: source?.PlanedDealSignDate,
    publicationDate: source?.PublicationDate,
    readOnly: source?.ReadOnly,
    regionCode: source?.RegionCode,
    tradeIdentificationCode: source?.TradeIdentificationCode,
    zmoFinanceSource: source?.ZmoFinanceSource === null ? undefined : zmoFinanceSourceEnumAdapter(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType,
  };
}

import { ApiOrderViewDto } from '../../../swagger/models/api-order-view-dto';
import { OrderView } from '../../models/order-view.interface';
import { adaptCustomerContactInfoAltToUI } from './customer-contact-info-alt.adapter';
import { adaptDealDirectionFlowEnumToUI } from './deal-direction-flow-enum.adapter';
import { adaptDealStateEnumToUI } from './deal-state-enum.adapter';
import { adaptFederalLawLimitAltEnumToUI } from './federal-law-limit-alt-enum.adapter';
import { adaptM4DDealSignRequiredEnumToUI } from './m-4-d-deal-sign-required-enum.adapter';
import { adaptOrderDetailToUI } from './order-detail.adapter';
import { adaptOrderDocumentToUI } from './order-document.adapter';
import { adaptOrderStateEnumToUI } from './order-state-enum.adapter';
import { adaptOrganizationCountryAltEnumToUI } from './organization-country-alt-enum.adapter';
import { adaptTradeBusinessFlowEnumToUI } from './trade-business-flow-enum.adapter';
import { adaptViewApplicationsForTradeToUI } from './view-applications-for-trade.adapter';
import { adaptZmoFinanceSourceEnumToUI } from './zmo-finance-source-enum.adapter';

export function adaptOrderViewToUI(source?: ApiOrderViewDto | null): OrderView {
  return {
    applicationId: source?.ApplicationId ?? 0,
    applicationSet: adaptViewApplicationsForTradeToUI(source?.ApplicationSet),
    businessFlowType: adaptTradeBusinessFlowEnumToUI(source?.BusinessFlowType),
    canSignDeal: source?.CanSignDeal ?? false,
    cancellationReason: source?.CancellationReason ?? '',
    contactInfo: adaptCustomerContactInfoAltToUI(source?.ContactInfo),
    creatorUserId: source?.CreatorUserId ?? 0,
    currentCustomerHasDealForThisOrder: source?.CurrentCustomerHasDealForThisOrder ?? false,
    currentParticipantHasDealForThisOrder: source?.CurrentParticipantHasDealForThisOrder ?? false,
    currentStageId: source?.CurrentStageId ?? 0,
    customerFullName: source?.CustomerFullName ?? '',
    customerId: source?.CustomerId ?? '',
    customerInn: source?.CustomerInn ?? '',
    customerPhysAddress: source?.CustomerPhysAddress ?? '',
    dealConclusionTermInfo: source?.DealConclusionTermInfo ?? '',
    dealDirectionFlow: adaptDealDirectionFlowEnumToUI(source?.DealDirectionFlow),
    dealState: adaptDealStateEnumToUI(source?.DealState),
    deliveryPlace: source?.DeliveryPlace ?? '',
    deliveryTerms: source?.DeliveryTerms ?? '',
    description: source?.Description ?? '',
    enableMonetizationMarket: source?.EnableMonetizationMarket ?? false,
    enableMonetizationZmo: source?.EnableMonetizationZmo ?? false,
    externalContractTemplateId: source?.ExternalContractTemplateId ?? 0,
    federalLawLimit: adaptFederalLawLimitAltEnumToUI(source?.FederalLawLimit),
    freeWinnerSelectionEnabled: source?.FreeWinnerSelectionEnabled ?? false,
    id: source?.Id ?? 0,
    initialPrice: source?.InitialPrice ?? 0,
    isBasedOnPublicOffer: source?.IsBasedOnPublicOffer ?? false,
    isContractInElectronicForm: source?.IsContractInElectronicForm ?? false,
    isEisConcludeDealRequired: source?.IsEisConcludeDealRequired ?? false,
    isFederalLawsEnable: source?.IsFederalLawsEnable ?? false,
    isParentContractNumberNotSpecified: source?.IsParentContractNumberNotSpecified ?? false,
    isParticipantCanCreateDeal: source?.IsParticipantCanCreateDeal ?? false,
    isSendContractAllowed: source?.IsSendContractAllowed ?? false,
    lastModificationDate: source?.LastModificationDate ?? '',
    lotAuctionId: source?.LotAuctionId ?? 0,
    lotId: source?.LotId ?? 0,
    m4DDealSignRequired: adaptM4DDealSignRequiredEnumToUI(source?.M4DDealSignRequired),
    orderDetails: (source?.OrderDetails ?? []).map((item) => adaptOrderDetailToUI(item)),
    orderDocuments: (source?.OrderDocuments ?? []).map((item) => adaptOrderDocumentToUI(item)),
    orderName: source?.OrderName ?? '',
    orderState: adaptOrderStateEnumToUI(source?.OrderState),
    originTradeId: source?.OriginTradeId ?? 0,
    parentContractNumber: source?.ParentContractNumber ?? '',
    parentNotTookPlaceTradeId: source?.ParentNotTookPlaceTradeId ?? 0,
    participantComment: source?.ParticipantComment ?? '',
    participantFullName: source?.ParticipantFullName ?? '',
    participantGuid: source?.ParticipantGuid ?? '',
    participantId: source?.ParticipantId ?? '',
    participantInn: source?.ParticipantInn ?? '',
    participantOrganizationCountry: adaptOrganizationCountryAltEnumToUI(source?.ParticipantOrganizationCountry),
    planedDealSignDate: source?.PlanedDealSignDate ?? '',
    publicationDate: source?.PublicationDate ?? '',
    readOnly: source?.ReadOnly ?? false,
    regionCode: source?.RegionCode ?? '',
    tradeIdentificationCode: source?.TradeIdentificationCode ?? '',
    zmoFinanceSource: adaptZmoFinanceSourceEnumToUI(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType ?? 0,
  };
}

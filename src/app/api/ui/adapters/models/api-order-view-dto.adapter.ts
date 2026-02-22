import { OrderView } from '../../models/order-view.interface';
import { ApiOrderViewDto } from '../../../swagger/models/api-order-view-dto';
import { apiCustomerContactInfoAltDtoAdapter } from './api-customer-contact-info.adapter';
import { apiDealDirectionFlowEnumAdapter } from '../enums/api-deal-direction-flow-enum.adapter';
import { apiDealStateEnumAdapter } from '../enums/api-deal-state-enum.adapter';
import { apiFederalLawLimitAltEnumAdapter } from '../enums/api-federal-law-limit.adapter';
import { apiM4DDealSignRequiredEnumAdapter } from '../enums/api-m-4-d-deal-sign-required-enum.adapter';
import { apiOrderDetailDtoAdapter } from './api-order-detail-dto.adapter';
import { apiOrderDocumentDtoAdapter } from './api-order-document-dto.adapter';
import { apiOrderStateEnumAdapter } from '../enums/api-order-state-enum.adapter';
import { apiOrganizationCountryAltEnumAdapter } from '../enums/api-organization-country.adapter';
import { apiTradeBusinessFlowEnumAdapter } from '../enums/api-trade-business-flow-enum.adapter';
import { apiViewApplicationsForTradeDtoAdapter } from './api-view-applications-for-trade-dto.adapter';
import { apiZmoFinanceSourceEnumAdapter } from '../enums/api-zmo-finance-source-enum.adapter';

export const apiOrderViewDtoAdapter = (source?: OrderView | null): ApiOrderViewDto => {
  return {
    ApplicationId: source?.applicationId,
    ApplicationSet: source?.applicationSet === null ? undefined : apiViewApplicationsForTradeDtoAdapter(source?.applicationSet),
    BusinessFlowType: source?.businessFlowType === null ? undefined : apiTradeBusinessFlowEnumAdapter(source?.businessFlowType),
    CanSignDeal: source?.canSignDeal,
    CancellationReason: source?.cancellationReason,
    ContactInfo: source?.contactInfo === null ? undefined : apiCustomerContactInfoAltDtoAdapter(source?.contactInfo),
    CreatorUserId: source?.creatorUserId,
    CurrentCustomerHasDealForThisOrder: source?.currentCustomerHasDealForThisOrder,
    CurrentParticipantHasDealForThisOrder: source?.currentParticipantHasDealForThisOrder,
    CurrentStageId: source?.currentStageId,
    CustomerFullName: source?.customerFullName,
    CustomerId: source?.customerId,
    CustomerInn: source?.customerInn,
    CustomerPhysAddress: source?.customerPhysAddress,
    DealConclusionTermInfo: source?.dealConclusionTermInfo,
    DealDirectionFlow: source?.dealDirectionFlow === null ? undefined : apiDealDirectionFlowEnumAdapter(source?.dealDirectionFlow),
    DealState: source?.dealState === null ? undefined : apiDealStateEnumAdapter(source?.dealState),
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    EnableMonetizationMarket: source?.enableMonetizationMarket,
    EnableMonetizationZmo: source?.enableMonetizationZmo,
    ExternalContractTemplateId: source?.externalContractTemplateId,
    FederalLawLimit: source?.federalLawLimit === null ? undefined : apiFederalLawLimitAltEnumAdapter(source?.federalLawLimit),
    FreeWinnerSelectionEnabled: source?.freeWinnerSelectionEnabled,
    Id: source?.id,
    InitialPrice: source?.initialPrice,
    IsBasedOnPublicOffer: source?.isBasedOnPublicOffer,
    IsContractInElectronicForm: source?.isContractInElectronicForm,
    IsEisConcludeDealRequired: source?.isEisConcludeDealRequired,
    IsFederalLawsEnable: source?.isFederalLawsEnable,
    IsParentContractNumberNotSpecified: source?.isParentContractNumberNotSpecified,
    IsParticipantCanCreateDeal: source?.isParticipantCanCreateDeal,
    IsSendContractAllowed: source?.isSendContractAllowed,
    LastModificationDate: source?.lastModificationDate,
    LotAuctionId: source?.lotAuctionId,
    LotId: source?.lotId,
    M4DDealSignRequired: source?.m4DDealSignRequired === null ? undefined : apiM4DDealSignRequiredEnumAdapter(source?.m4DDealSignRequired),
    OrderDetails: source?.orderDetails?.map((item) => apiOrderDetailDtoAdapter(item)),
    OrderDocuments: source?.orderDocuments?.map((item) => apiOrderDocumentDtoAdapter(item)),
    OrderName: source?.orderName,
    OrderState: source?.orderState === null ? undefined : apiOrderStateEnumAdapter(source?.orderState),
    OriginTradeId: source?.originTradeId,
    ParentContractNumber: source?.parentContractNumber,
    ParentNotTookPlaceTradeId: source?.parentNotTookPlaceTradeId,
    ParticipantComment: source?.participantComment,
    ParticipantFullName: source?.participantFullName,
    ParticipantGuid: source?.participantGuid,
    ParticipantId: source?.participantId,
    ParticipantInn: source?.participantInn,
    ParticipantOrganizationCountry: source?.participantOrganizationCountry === null ? undefined : apiOrganizationCountryAltEnumAdapter(source?.participantOrganizationCountry),
    PlanedDealSignDate: source?.planedDealSignDate,
    PublicationDate: source?.publicationDate,
    ReadOnly: source?.readOnly,
    RegionCode: source?.regionCode,
    TradeIdentificationCode: source?.tradeIdentificationCode,
    ZmoFinanceSource: source?.zmoFinanceSource === null ? undefined : apiZmoFinanceSourceEnumAdapter(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}

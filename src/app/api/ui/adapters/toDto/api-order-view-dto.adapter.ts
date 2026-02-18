import { OrderView } from '../../models/order-view.interface';
import { ApiOrderViewDto } from '../../../swagger/models/api-order-view-dto';
import { adaptApiCustomerContactInfoAltDto } from './api-customer-contact-info.adapter';
import { adaptApiDealDirectionFlowEnum } from './api-deal-direction-flow-enum.adapter';
import { adaptApiDealStateEnum } from './api-deal-state-enum.adapter';
import { adaptApiFederalLawLimitAltEnum } from './api-federal-law-limit.adapter';
import { adaptApiM4DDealSignRequiredEnum } from './api-m-4-d-deal-sign-required-enum.adapter';
import { adaptApiOrderDetailDto } from './api-order-detail-dto.adapter';
import { adaptApiOrderDocumentDto } from './api-order-document-dto.adapter';
import { adaptApiOrderStateEnum } from './api-order-state-enum.adapter';
import { adaptApiOrganizationCountryAltEnum } from './api-organization-country.adapter';
import { adaptApiTradeBusinessFlowEnum } from './api-trade-business-flow-enum.adapter';
import { adaptApiViewApplicationsForTradeDto } from './api-view-applications-for-trade-dto.adapter';
import { adaptApiZmoFinanceSourceEnum } from './api-zmo-finance-source-enum.adapter';

export function adaptApiOrderViewDto(source?: OrderView | null): ApiOrderViewDto {
  return {
    ApplicationId: source?.applicationId,
    ApplicationSet: adaptApiViewApplicationsForTradeDto(source?.applicationSet),
    BusinessFlowType: adaptApiTradeBusinessFlowEnum(source?.businessFlowType),
    CanSignDeal: source?.canSignDeal,
    CancellationReason: source?.cancellationReason,
    ContactInfo: adaptApiCustomerContactInfoAltDto(source?.contactInfo),
    CreatorUserId: source?.creatorUserId,
    CurrentCustomerHasDealForThisOrder: source?.currentCustomerHasDealForThisOrder,
    CurrentParticipantHasDealForThisOrder: source?.currentParticipantHasDealForThisOrder,
    CurrentStageId: source?.currentStageId,
    CustomerFullName: source?.customerFullName,
    CustomerId: source?.customerId,
    CustomerInn: source?.customerInn,
    CustomerPhysAddress: source?.customerPhysAddress,
    DealConclusionTermInfo: source?.dealConclusionTermInfo,
    DealDirectionFlow: adaptApiDealDirectionFlowEnum(source?.dealDirectionFlow),
    DealState: adaptApiDealStateEnum(source?.dealState),
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    EnableMonetizationMarket: source?.enableMonetizationMarket,
    EnableMonetizationZmo: source?.enableMonetizationZmo,
    ExternalContractTemplateId: source?.externalContractTemplateId,
    FederalLawLimit: adaptApiFederalLawLimitAltEnum(source?.federalLawLimit),
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
    M4DDealSignRequired: adaptApiM4DDealSignRequiredEnum(source?.m4DDealSignRequired),
    OrderDetails: (source?.orderDetails ?? []).map((item) => adaptApiOrderDetailDto(item)),
    OrderDocuments: (source?.orderDocuments ?? []).map((item) => adaptApiOrderDocumentDto(item)),
    OrderName: source?.orderName,
    OrderState: adaptApiOrderStateEnum(source?.orderState),
    OriginTradeId: source?.originTradeId,
    ParentContractNumber: source?.parentContractNumber,
    ParentNotTookPlaceTradeId: source?.parentNotTookPlaceTradeId,
    ParticipantComment: source?.participantComment,
    ParticipantFullName: source?.participantFullName,
    ParticipantGuid: source?.participantGuid,
    ParticipantId: source?.participantId,
    ParticipantInn: source?.participantInn,
    ParticipantOrganizationCountry: adaptApiOrganizationCountryAltEnum(source?.participantOrganizationCountry),
    PlanedDealSignDate: source?.planedDealSignDate,
    PublicationDate: source?.publicationDate,
    ReadOnly: source?.readOnly,
    RegionCode: source?.regionCode,
    TradeIdentificationCode: source?.tradeIdentificationCode,
    ZmoFinanceSource: adaptApiZmoFinanceSourceEnum(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}

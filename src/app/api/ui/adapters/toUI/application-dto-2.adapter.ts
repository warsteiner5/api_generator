import { ApiApplicationDto2 } from '../../../swagger/models/api-application-dto-2';
import { ApplicationDto2 } from '../../models/application-dto-2.interface';
import { adaptAdditionalServiceToUI } from './additional-service.adapter';
import { adaptApplicationDocumentToUI } from './application-document.adapter';
import { adaptApplicationItemToUI } from './application-item.adapter';
import { adaptApplicationProductToUI } from './application-product.adapter';
import { adaptApplicationSourceEnumToUI } from './application-source-enum.adapter';
import { adaptApplicationStateEnumToUI } from './application-state-enum.adapter';
import { adaptAuctionBidToUI } from './auction-bid.adapter';
import { adaptAvailableVatTypeEnumToUI } from './available-vat-type-enum.adapter';
import { adaptContactInfoToUI } from './contact-info.adapter';
import { adaptOrganizationRegistryDocumentToUI } from './organization-registry-document.adapter';
import { adaptPaymentMethodEnumToUI } from './payment-method-enum.adapter';
import { adaptTradeBusinessFlowEnumToUI } from './trade-business-flow-enum.adapter';
import { adaptTradeStateEnumToUI } from './trade-state-enum.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';

export function adaptApplicationDto2ToUI(source?: ApiApplicationDto2 | null): ApplicationDto2 {
  return {
    accountNumber: source?.AccountNumber ?? '',
    additionalServices: (source?.AdditionalServices ?? []).map((item) => adaptAdditionalServiceToUI(item)),
    agreeWithCustomerConditions: source?.AgreeWithCustomerConditions ?? false,
    applicationDocuments: (source?.ApplicationDocuments ?? []).map((item) => adaptApplicationDocumentToUI(item)),
    applicationItems: (source?.ApplicationItems ?? []).map((item) => adaptApplicationItemToUI(item)),
    applicationSource: adaptApplicationSourceEnumToUI(source?.ApplicationSource),
    applicationState: adaptApplicationStateEnumToUI(source?.ApplicationState),
    applicationStateDescription: source?.ApplicationStateDescription ?? '',
    applicationStateId: source?.ApplicationStateId ?? 0,
    auctionBids: (source?.AuctionBids ?? []).map((item) => adaptAuctionBidToUI(item)),
    bankingDetailId: source?.BankingDetailId ?? 0,
    canDelete: source?.CanDelete ?? false,
    canEdit: source?.CanEdit ?? false,
    canWithdraw: source?.CanWithdraw ?? false,
    conditionsOfPayment: source?.ConditionsOfPayment ?? '',
    contactInfo: adaptContactInfoToUI(source?.ContactInfo),
    createdByCustomer: source?.CreatedByCustomer ?? false,
    defineCustomPriceForEachProduct: source?.DefineCustomPriceForEachProduct ?? false,
    deliveryPlace: source?.DeliveryPlace ?? '',
    deliveryTerms: source?.DeliveryTerms ?? '',
    emailForReceipt: source?.EmailForReceipt ?? '',
    enableKtruSpecifications: source?.EnableKtruSpecifications ?? false,
    enablePositionCharacteristics: source?.EnablePositionCharacteristics ?? false,
    id: source?.Id ?? 0,
    incomplianceWithTheRequirementsReason: source?.IncomplianceWithTheRequirementsReason ?? '',
    isLotPriceWithVat: source?.IsLotPriceWithVat ?? false,
    isOrderApplication: source?.IsOrderApplication ?? false,
    isPriceEnteredWithVat: source?.IsPriceEnteredWithVat ?? false,
    isPublicOffer: source?.IsPublicOffer ?? false,
    isQuotationWithVat: source?.IsQuotationWithVat ?? false,
    isRequirementsConfirmationCheck: source?.IsRequirementsConfirmationCheck ?? false,
    isSelfDelivery: source?.IsSelfDelivery ?? false,
    isSellerDelivery: source?.IsSellerDelivery ?? false,
    isTransportCompanyDelivery: source?.IsTransportCompanyDelivery ?? false,
    neverExpired: source?.NeverExpired ?? false,
    offerExpiryDate: source?.OfferExpiryDate ?? '',
    organizationRegistryDocuments: (source?.OrganizationRegistryDocuments ?? []).map((item) => adaptOrganizationRegistryDocumentToUI(item)),
    payCommissionReportGuid: source?.PayCommissionReportGuid ?? '',
    paymentMethod: adaptPaymentMethodEnumToUI(source?.PaymentMethod),
    price: source?.Price ?? 0,
    priceWithVat: source?.PriceWithVat ?? 0,
    products: (source?.Products ?? []).map((item) => adaptApplicationProductToUI(item)),
    publicationDate: source?.PublicationDate ?? '',
    rateVat: adaptAvailableVatTypeEnumToUI(source?.RateVat),
    reductionCoefficient: source?.ReductionCoefficient ?? 0,
    resultPosition: source?.ResultPosition ?? 0,
    rowVersion: source?.RowVersion ?? 0,
    selfDeliveryPlace: source?.SelfDeliveryPlace ?? '',
    sellerDeliveryPrice: source?.SellerDeliveryPrice ?? 0,
    shipmentPoint: source?.ShipmentPoint ?? '',
    submitterId: source?.SubmitterId ?? '',
    submitterName: source?.SubmitterName ?? '',
    sumVat: source?.SumVat ?? 0,
    tenantSource: source?.TenantSource ?? 0,
    tradeBusinessFlow: adaptTradeBusinessFlowEnumToUI(source?.TradeBusinessFlow),
    tradeId: source?.TradeId ?? 0,
    tradeLotId: source?.TradeLotId ?? 0,
    tradeOrganizerId: source?.TradeOrganizerId ?? 0,
    tradeState: adaptTradeStateEnumToUI(source?.TradeState),
    transportCompanyDeliveryPrice: source?.TransportCompanyDeliveryPrice ?? 0,
    vatRate: source?.VatRate ?? 0,
    vatRateDescription: source?.VatRateDescription ?? '',
    vatRateState: adaptVatRateStateEnumToUI(source?.VatRateState),
    wasRejected: source?.WasRejected ?? false,
  };
}

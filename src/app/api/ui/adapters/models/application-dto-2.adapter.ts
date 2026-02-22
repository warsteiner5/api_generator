import { ApiApplicationDto2 } from '../../../swagger/models/api-application-dto-2';
import { ApplicationDto2 } from '../../models/application-dto-2.interface';
import { additionalServiceAdapter } from './additional-service.adapter';
import { applicationDocumentAdapter } from './application-document.adapter';
import { applicationItemAdapter } from './application-item.adapter';
import { applicationProductAdapter } from './application-product.adapter';
import { applicationSourceEnumAdapter } from '../enums/application-source-enum.adapter';
import { applicationStateEnumAdapter } from '../enums/application-state-enum.adapter';
import { auctionBidAdapter } from './auction-bid.adapter';
import { availableVatTypeEnumAdapter } from '../enums/available-vat-type-enum.adapter';
import { contactInfoAdapter } from './contact-info.adapter';
import { organizationRegistryDocumentAdapter } from './organization-registry-document.adapter';
import { paymentMethodEnumAdapter } from '../enums/payment-method-enum.adapter';
import { tradeBusinessFlowEnumAdapter } from '../enums/trade-business-flow-enum.adapter';
import { tradeStateEnumAdapter } from '../enums/trade-state-enum.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';

export const applicationDto2Adapter = (source?: ApiApplicationDto2 | null): ApplicationDto2 => {
  return {
    accountNumber: source?.AccountNumber,
    additionalServices: source?.AdditionalServices?.map((item) => additionalServiceAdapter(item)),
    agreeWithCustomerConditions: source?.AgreeWithCustomerConditions,
    applicationDocuments: source?.ApplicationDocuments?.map((item) => applicationDocumentAdapter(item)),
    applicationItems: source?.ApplicationItems?.map((item) => applicationItemAdapter(item)),
    applicationSource: source?.ApplicationSource === null ? undefined : applicationSourceEnumAdapter(source?.ApplicationSource),
    applicationState: source?.ApplicationState === null ? undefined : applicationStateEnumAdapter(source?.ApplicationState),
    applicationStateDescription: source?.ApplicationStateDescription,
    applicationStateId: source?.ApplicationStateId,
    auctionBids: source?.AuctionBids?.map((item) => auctionBidAdapter(item)),
    bankingDetailId: source?.BankingDetailId,
    canDelete: source?.CanDelete,
    canEdit: source?.CanEdit,
    canWithdraw: source?.CanWithdraw,
    conditionsOfPayment: source?.ConditionsOfPayment,
    contactInfo: source?.ContactInfo === null ? undefined : contactInfoAdapter(source?.ContactInfo),
    createdByCustomer: source?.CreatedByCustomer,
    defineCustomPriceForEachProduct: source?.DefineCustomPriceForEachProduct,
    deliveryPlace: source?.DeliveryPlace,
    deliveryTerms: source?.DeliveryTerms,
    emailForReceipt: source?.EmailForReceipt,
    enableKtruSpecifications: source?.EnableKtruSpecifications,
    enablePositionCharacteristics: source?.EnablePositionCharacteristics,
    id: source?.Id,
    incomplianceWithTheRequirementsReason: source?.IncomplianceWithTheRequirementsReason,
    isLotPriceWithVat: source?.IsLotPriceWithVat,
    isOrderApplication: source?.IsOrderApplication,
    isPriceEnteredWithVat: source?.IsPriceEnteredWithVat,
    isPublicOffer: source?.IsPublicOffer,
    isQuotationWithVat: source?.IsQuotationWithVat,
    isRequirementsConfirmationCheck: source?.IsRequirementsConfirmationCheck,
    isSelfDelivery: source?.IsSelfDelivery,
    isSellerDelivery: source?.IsSellerDelivery,
    isTransportCompanyDelivery: source?.IsTransportCompanyDelivery,
    neverExpired: source?.NeverExpired,
    offerExpiryDate: source?.OfferExpiryDate,
    organizationRegistryDocuments: source?.OrganizationRegistryDocuments?.map((item) => organizationRegistryDocumentAdapter(item)),
    payCommissionReportGuid: source?.PayCommissionReportGuid,
    paymentMethod: source?.PaymentMethod === null ? undefined : paymentMethodEnumAdapter(source?.PaymentMethod),
    price: source?.Price,
    priceWithVat: source?.PriceWithVat,
    products: source?.Products?.map((item) => applicationProductAdapter(item)),
    publicationDate: source?.PublicationDate,
    rateVat: source?.RateVat === null ? undefined : availableVatTypeEnumAdapter(source?.RateVat),
    reductionCoefficient: source?.ReductionCoefficient,
    resultPosition: source?.ResultPosition,
    rowVersion: source?.RowVersion,
    selfDeliveryPlace: source?.SelfDeliveryPlace,
    sellerDeliveryPrice: source?.SellerDeliveryPrice,
    shipmentPoint: source?.ShipmentPoint,
    submitterId: source?.SubmitterId,
    submitterName: source?.SubmitterName,
    sumVat: source?.SumVat,
    tenantSource: source?.TenantSource,
    tradeBusinessFlow: source?.TradeBusinessFlow === null ? undefined : tradeBusinessFlowEnumAdapter(source?.TradeBusinessFlow),
    tradeId: source?.TradeId,
    tradeLotId: source?.TradeLotId,
    tradeOrganizerId: source?.TradeOrganizerId,
    tradeState: source?.TradeState === null ? undefined : tradeStateEnumAdapter(source?.TradeState),
    transportCompanyDeliveryPrice: source?.TransportCompanyDeliveryPrice,
    vatRate: source?.VatRate,
    vatRateDescription: source?.VatRateDescription,
    vatRateState: source?.VatRateState === null ? undefined : vatRateStateEnumAdapter(source?.VatRateState),
    wasRejected: source?.WasRejected,
  };
}

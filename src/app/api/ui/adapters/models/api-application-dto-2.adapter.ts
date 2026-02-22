import { ApplicationDto2 } from '../../models/application-dto-2.interface';
import { ApiApplicationDto2 } from '../../../swagger/models/api-application-dto-2';
import { apiAdditionalServiceDtoAdapter } from './api-additional-service-dto.adapter';
import { apiApplicationDocumentDtoAdapter } from './api-application-document-dto.adapter';
import { apiApplicationItemDtoAdapter } from './api-application-item-dto.adapter';
import { apiApplicationProductDtoAdapter } from './api-application-product-dto.adapter';
import { apiApplicationSourceEnumAdapter } from '../enums/api-application-source-enum.adapter';
import { apiApplicationStateEnumAdapter } from '../enums/api-application-state-enum.adapter';
import { apiAuctionBidDtoAdapter } from './api-auction-bid-dto.adapter';
import { apiAvailableVatTypeEnumAdapter } from '../enums/api-available-vat-type-enum.adapter';
import { apiContactInfoDtoAdapter } from './api-contact-info-dto.adapter';
import { apiOrganizationRegistryDocumentDtoAdapter } from './api-organization-registry-document-dto.adapter';
import { apiPaymentMethodEnumAdapter } from '../enums/api-payment-method-enum.adapter';
import { apiTradeBusinessFlowEnumAdapter } from '../enums/api-trade-business-flow-enum.adapter';
import { apiTradeStateEnumAdapter } from '../enums/api-trade-state-enum.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';

export const apiApplicationDto2Adapter = (source?: ApplicationDto2 | null): ApiApplicationDto2 => {
  return {
    AccountNumber: source?.accountNumber,
    AdditionalServices: source?.additionalServices?.map((item) => apiAdditionalServiceDtoAdapter(item)),
    AgreeWithCustomerConditions: source?.agreeWithCustomerConditions,
    ApplicationDocuments: source?.applicationDocuments?.map((item) => apiApplicationDocumentDtoAdapter(item)),
    ApplicationItems: source?.applicationItems?.map((item) => apiApplicationItemDtoAdapter(item)),
    ApplicationSource: source?.applicationSource === null ? undefined : apiApplicationSourceEnumAdapter(source?.applicationSource),
    ApplicationState: source?.applicationState === null ? undefined : apiApplicationStateEnumAdapter(source?.applicationState),
    ApplicationStateDescription: source?.applicationStateDescription,
    ApplicationStateId: source?.applicationStateId,
    AuctionBids: source?.auctionBids?.map((item) => apiAuctionBidDtoAdapter(item)),
    BankingDetailId: source?.bankingDetailId,
    CanDelete: source?.canDelete,
    CanEdit: source?.canEdit,
    CanWithdraw: source?.canWithdraw,
    ConditionsOfPayment: source?.conditionsOfPayment,
    ContactInfo: source?.contactInfo === null ? undefined : apiContactInfoDtoAdapter(source?.contactInfo),
    CreatedByCustomer: source?.createdByCustomer,
    DefineCustomPriceForEachProduct: source?.defineCustomPriceForEachProduct,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    EmailForReceipt: source?.emailForReceipt,
    EnableKtruSpecifications: source?.enableKtruSpecifications,
    EnablePositionCharacteristics: source?.enablePositionCharacteristics,
    Id: source?.id,
    IncomplianceWithTheRequirementsReason: source?.incomplianceWithTheRequirementsReason,
    IsLotPriceWithVat: source?.isLotPriceWithVat,
    IsOrderApplication: source?.isOrderApplication,
    IsPriceEnteredWithVat: source?.isPriceEnteredWithVat,
    IsPublicOffer: source?.isPublicOffer,
    IsQuotationWithVat: source?.isQuotationWithVat,
    IsRequirementsConfirmationCheck: source?.isRequirementsConfirmationCheck,
    IsSelfDelivery: source?.isSelfDelivery,
    IsSellerDelivery: source?.isSellerDelivery,
    IsTransportCompanyDelivery: source?.isTransportCompanyDelivery,
    NeverExpired: source?.neverExpired,
    OfferExpiryDate: source?.offerExpiryDate,
    OrganizationRegistryDocuments: source?.organizationRegistryDocuments?.map((item) => apiOrganizationRegistryDocumentDtoAdapter(item)),
    PayCommissionReportGuid: source?.payCommissionReportGuid,
    PaymentMethod: source?.paymentMethod === null ? undefined : apiPaymentMethodEnumAdapter(source?.paymentMethod),
    Price: source?.price,
    PriceWithVat: source?.priceWithVat,
    Products: source?.products?.map((item) => apiApplicationProductDtoAdapter(item)),
    PublicationDate: source?.publicationDate,
    RateVat: source?.rateVat === null ? undefined : apiAvailableVatTypeEnumAdapter(source?.rateVat),
    ReductionCoefficient: source?.reductionCoefficient,
    ResultPosition: source?.resultPosition,
    RowVersion: source?.rowVersion,
    SelfDeliveryPlace: source?.selfDeliveryPlace,
    SellerDeliveryPrice: source?.sellerDeliveryPrice,
    ShipmentPoint: source?.shipmentPoint,
    SubmitterId: source?.submitterId,
    SubmitterName: source?.submitterName,
    SumVat: source?.sumVat,
    TenantSource: source?.tenantSource,
    TradeBusinessFlow: source?.tradeBusinessFlow === null ? undefined : apiTradeBusinessFlowEnumAdapter(source?.tradeBusinessFlow),
    TradeId: source?.tradeId,
    TradeLotId: source?.tradeLotId,
    TradeOrganizerId: source?.tradeOrganizerId,
    TradeState: source?.tradeState === null ? undefined : apiTradeStateEnumAdapter(source?.tradeState),
    TransportCompanyDeliveryPrice: source?.transportCompanyDeliveryPrice,
    VatRate: source?.vatRate,
    VatRateDescription: source?.vatRateDescription,
    VatRateState: source?.vatRateState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatRateState),
    WasRejected: source?.wasRejected,
  };
}

import { ApplicationDto2 } from '../../models/application-dto-2.interface';
import { ApiApplicationDto2 } from '../../../swagger/models/api-application-dto-2';
import { adaptApiAdditionalServiceDto } from './api-additional-service-dto.adapter';
import { adaptApiApplicationDocumentDto } from './api-application-document-dto.adapter';
import { adaptApiApplicationItemDto } from './api-application-item-dto.adapter';
import { adaptApiApplicationProductDto } from './api-application-product-dto.adapter';
import { adaptApiApplicationSourceEnum } from './api-application-source-enum.adapter';
import { adaptApiApplicationStateEnum } from './api-application-state-enum.adapter';
import { adaptApiAuctionBidDto } from './api-auction-bid-dto.adapter';
import { adaptApiAvailableVatTypeEnum } from './api-available-vat-type-enum.adapter';
import { adaptApiContactInfoDto } from './api-contact-info-dto.adapter';
import { adaptApiOrganizationRegistryDocumentDto } from './api-organization-registry-document-dto.adapter';
import { adaptApiPaymentMethodEnum } from './api-payment-method-enum.adapter';
import { adaptApiTradeBusinessFlowEnum } from './api-trade-business-flow-enum.adapter';
import { adaptApiTradeStateEnum } from './api-trade-state-enum.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';

export function adaptApiApplicationDto2(source?: ApplicationDto2 | null): ApiApplicationDto2 {
  return {
    AccountNumber: source?.accountNumber,
    AdditionalServices: (source?.additionalServices ?? []).map((item) => adaptApiAdditionalServiceDto(item)),
    AgreeWithCustomerConditions: source?.agreeWithCustomerConditions,
    ApplicationDocuments: (source?.applicationDocuments ?? []).map((item) => adaptApiApplicationDocumentDto(item)),
    ApplicationItems: (source?.applicationItems ?? []).map((item) => adaptApiApplicationItemDto(item)),
    ApplicationSource: adaptApiApplicationSourceEnum(source?.applicationSource),
    ApplicationState: adaptApiApplicationStateEnum(source?.applicationState),
    ApplicationStateDescription: source?.applicationStateDescription,
    ApplicationStateId: source?.applicationStateId,
    AuctionBids: (source?.auctionBids ?? []).map((item) => adaptApiAuctionBidDto(item)),
    BankingDetailId: source?.bankingDetailId,
    CanDelete: source?.canDelete,
    CanEdit: source?.canEdit,
    CanWithdraw: source?.canWithdraw,
    ConditionsOfPayment: source?.conditionsOfPayment,
    ContactInfo: adaptApiContactInfoDto(source?.contactInfo),
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
    OrganizationRegistryDocuments: (source?.organizationRegistryDocuments ?? []).map((item) => adaptApiOrganizationRegistryDocumentDto(item)),
    PayCommissionReportGuid: source?.payCommissionReportGuid,
    PaymentMethod: adaptApiPaymentMethodEnum(source?.paymentMethod),
    Price: source?.price,
    PriceWithVat: source?.priceWithVat,
    Products: (source?.products ?? []).map((item) => adaptApiApplicationProductDto(item)),
    PublicationDate: source?.publicationDate,
    RateVat: adaptApiAvailableVatTypeEnum(source?.rateVat),
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
    TradeBusinessFlow: adaptApiTradeBusinessFlowEnum(source?.tradeBusinessFlow),
    TradeId: source?.tradeId,
    TradeLotId: source?.tradeLotId,
    TradeOrganizerId: source?.tradeOrganizerId,
    TradeState: adaptApiTradeStateEnum(source?.tradeState),
    TransportCompanyDeliveryPrice: source?.transportCompanyDeliveryPrice,
    VatRate: source?.vatRate,
    VatRateDescription: source?.vatRateDescription,
    VatRateState: adaptApiVatRateStateEnum(source?.vatRateState),
    WasRejected: source?.wasRejected,
  };
}

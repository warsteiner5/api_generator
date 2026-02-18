import { Application } from '../../models/application.interface';
import { ApiApplicationDto } from '../../../swagger/models/api-application-dto';
import { adaptApiApplicationDocumentDto } from './api-application-document-dto.adapter';
import { adaptApiApplicationSourceEnum } from './api-application-source-enum.adapter';
import { adaptApiApplicationStateEnum } from './api-application-state-enum.adapter';
import { adaptApiBankingDetailsDto } from './api-banking-details-dto.adapter';
import { adaptApiContactInfoDto } from './api-contact-info-dto.adapter';
import { adaptApiOrganizationCountryAltEnum } from './api-organization-country.adapter';
import { adaptApiProductDto } from './api-product-dto.adapter';
import { adaptApiTradeBusinessFlowEnum } from './api-trade-business-flow-enum.adapter';
import { adaptApiTradeStateEnum } from './api-trade-state-enum.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';

export function adaptApiApplicationDto(source?: Application | null): ApiApplicationDto {
  return {
    AccountNumber: source?.accountNumber,
    AgreeWithCustomerConditions: source?.agreeWithCustomerConditions,
    ApplicationDocuments: (source?.applicationDocuments ?? []).map((item) => adaptApiApplicationDocumentDto(item)),
    ApplicationSource: adaptApiApplicationSourceEnum(source?.applicationSource),
    ApplicationState: adaptApiApplicationStateEnum(source?.applicationState),
    ApplicationStateDescription: source?.applicationStateDescription,
    ApplicationStateId: source?.applicationStateId,
    BankingDetails: adaptApiBankingDetailsDto(source?.bankingDetails),
    CanDelete: source?.canDelete,
    CanEdit: source?.canEdit,
    CanView: source?.canView,
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
    Host: source?.host,
    Id: source?.id,
    IncomplianceWithTheRequirementsReason: source?.incomplianceWithTheRequirementsReason,
    IsApplicationFromAnotherTenant: source?.isApplicationFromAnotherTenant,
    IsHidePrice: source?.isHidePrice,
    IsLotPriceWithVat: source?.isLotPriceWithVat,
    IsOrderApplication: source?.isOrderApplication,
    IsPriceCorridorExclusion: source?.isPriceCorridorExclusion,
    IsPriceCorridorMatching: source?.isPriceCorridorMatching,
    IsPublicOffer: source?.isPublicOffer,
    IsRequirementsConfirmationCheck: source?.isRequirementsConfirmationCheck,
    IsUnitBidding: source?.isUnitBidding,
    MatchCustomerRequirements44Documents: (source?.matchCustomerRequirements44Documents ?? []).map((item) => adaptApiApplicationDocumentDto(item)),
    NeedEditOnMarket: source?.needEditOnMarket,
    NeverExpired: source?.neverExpired,
    OfferExpiryDate: source?.offerExpiryDate,
    PayCommissionReportGuid: source?.payCommissionReportGuid,
    Price: source?.price,
    Products: (source?.products ?? []).map((item) => adaptApiProductDto(item)),
    PublicationDate: source?.publicationDate,
    RowVersion: source?.rowVersion,
    ShipmentPoint: source?.shipmentPoint,
    SmallBusinessRequirementDocuments: (source?.smallBusinessRequirementDocuments ?? []).map((item) => adaptApiApplicationDocumentDto(item)),
    SubmitterId: source?.submitterId,
    SubmitterName: source?.submitterName,
    SubmitterOrganizationCountry: adaptApiOrganizationCountryAltEnum(source?.submitterOrganizationCountry),
    TenantSource: source?.tenantSource,
    TradeBusinessFlow: adaptApiTradeBusinessFlowEnum(source?.tradeBusinessFlow),
    TradeId: source?.tradeId,
    TradeLotId: source?.tradeLotId,
    TradeOrganizerId: source?.tradeOrganizerId,
    TradeState: adaptApiTradeStateEnum(source?.tradeState),
    UniversalRequirementDocuments: (source?.universalRequirementDocuments ?? []).map((item) => adaptApiApplicationDocumentDto(item)),
    VatRate: source?.vatRate,
    VatRateDescription: source?.vatRateDescription,
    VatRateState: adaptApiVatRateStateEnum(source?.vatRateState),
    WasRejected: source?.wasRejected,
  };
}

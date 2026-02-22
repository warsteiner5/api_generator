import { Application } from '../../models/application.interface';
import { ApiApplicationDto } from '../../../swagger/models/api-application-dto';
import { apiApplicationDocumentDtoAdapter } from './api-application-document-dto.adapter';
import { apiApplicationSourceEnumAdapter } from '../enums/api-application-source-enum.adapter';
import { apiApplicationStateEnumAdapter } from '../enums/api-application-state-enum.adapter';
import { apiBankingDetailsDtoAdapter } from './api-banking-details-dto.adapter';
import { apiContactInfoDtoAdapter } from './api-contact-info-dto.adapter';
import { apiOrganizationCountryAltEnumAdapter } from '../enums/api-organization-country.adapter';
import { apiProductDtoAdapter } from './api-product-dto.adapter';
import { apiTradeBusinessFlowEnumAdapter } from '../enums/api-trade-business-flow-enum.adapter';
import { apiTradeStateEnumAdapter } from '../enums/api-trade-state-enum.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';

export const apiApplicationDtoAdapter = (source?: Application | null): ApiApplicationDto => {
  return {
    AccountNumber: source?.accountNumber,
    AgreeWithCustomerConditions: source?.agreeWithCustomerConditions,
    ApplicationDocuments: source?.applicationDocuments?.map((item) => apiApplicationDocumentDtoAdapter(item)),
    ApplicationSource: source?.applicationSource === null ? undefined : apiApplicationSourceEnumAdapter(source?.applicationSource),
    ApplicationState: source?.applicationState === null ? undefined : apiApplicationStateEnumAdapter(source?.applicationState),
    ApplicationStateDescription: source?.applicationStateDescription,
    ApplicationStateId: source?.applicationStateId,
    BankingDetails: source?.bankingDetails === null ? undefined : apiBankingDetailsDtoAdapter(source?.bankingDetails),
    CanDelete: source?.canDelete,
    CanEdit: source?.canEdit,
    CanView: source?.canView,
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
    MatchCustomerRequirements44Documents: source?.matchCustomerRequirements44Documents?.map((item) => apiApplicationDocumentDtoAdapter(item)),
    NeedEditOnMarket: source?.needEditOnMarket,
    NeverExpired: source?.neverExpired,
    OfferExpiryDate: source?.offerExpiryDate,
    PayCommissionReportGuid: source?.payCommissionReportGuid,
    Price: source?.price,
    Products: source?.products?.map((item) => apiProductDtoAdapter(item)),
    PublicationDate: source?.publicationDate,
    RowVersion: source?.rowVersion,
    ShipmentPoint: source?.shipmentPoint,
    SmallBusinessRequirementDocuments: source?.smallBusinessRequirementDocuments?.map((item) => apiApplicationDocumentDtoAdapter(item)),
    SubmitterId: source?.submitterId,
    SubmitterName: source?.submitterName,
    SubmitterOrganizationCountry: source?.submitterOrganizationCountry === null ? undefined : apiOrganizationCountryAltEnumAdapter(source?.submitterOrganizationCountry),
    TenantSource: source?.tenantSource,
    TradeBusinessFlow: source?.tradeBusinessFlow === null ? undefined : apiTradeBusinessFlowEnumAdapter(source?.tradeBusinessFlow),
    TradeId: source?.tradeId,
    TradeLotId: source?.tradeLotId,
    TradeOrganizerId: source?.tradeOrganizerId,
    TradeState: source?.tradeState === null ? undefined : apiTradeStateEnumAdapter(source?.tradeState),
    UniversalRequirementDocuments: source?.universalRequirementDocuments?.map((item) => apiApplicationDocumentDtoAdapter(item)),
    VatRate: source?.vatRate,
    VatRateDescription: source?.vatRateDescription,
    VatRateState: source?.vatRateState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatRateState),
    WasRejected: source?.wasRejected,
  };
}

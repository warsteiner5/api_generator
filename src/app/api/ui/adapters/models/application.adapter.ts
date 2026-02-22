import { ApiApplicationDto } from '../../../swagger/models/api-application-dto';
import { Application } from '../../models/application.interface';
import { applicationDocumentAdapter } from './application-document.adapter';
import { applicationSourceEnumAdapter } from '../enums/application-source-enum.adapter';
import { applicationStateEnumAdapter } from '../enums/application-state-enum.adapter';
import { bankingDetailsAdapter } from './banking-details.adapter';
import { contactInfoAdapter } from './contact-info.adapter';
import { organizationCountryAltEnumAdapter } from '../enums/organization-country-alt-enum.adapter';
import { productAdapter } from './product.adapter';
import { tradeBusinessFlowEnumAdapter } from '../enums/trade-business-flow-enum.adapter';
import { tradeStateEnumAdapter } from '../enums/trade-state-enum.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';

export const applicationAdapter = (source?: ApiApplicationDto | null): Application => {
  return {
    accountNumber: source?.AccountNumber,
    agreeWithCustomerConditions: source?.AgreeWithCustomerConditions,
    applicationDocuments: source?.ApplicationDocuments?.map((item) => applicationDocumentAdapter(item)),
    applicationSource: source?.ApplicationSource === null ? undefined : applicationSourceEnumAdapter(source?.ApplicationSource),
    applicationState: source?.ApplicationState === null ? undefined : applicationStateEnumAdapter(source?.ApplicationState),
    applicationStateDescription: source?.ApplicationStateDescription,
    applicationStateId: source?.ApplicationStateId,
    bankingDetails: source?.BankingDetails === null ? undefined : bankingDetailsAdapter(source?.BankingDetails),
    canDelete: source?.CanDelete,
    canEdit: source?.CanEdit,
    canView: source?.CanView,
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
    host: source?.Host,
    id: source?.Id,
    incomplianceWithTheRequirementsReason: source?.IncomplianceWithTheRequirementsReason,
    isApplicationFromAnotherTenant: source?.IsApplicationFromAnotherTenant,
    isHidePrice: source?.IsHidePrice,
    isLotPriceWithVat: source?.IsLotPriceWithVat,
    isOrderApplication: source?.IsOrderApplication,
    isPriceCorridorExclusion: source?.IsPriceCorridorExclusion,
    isPriceCorridorMatching: source?.IsPriceCorridorMatching,
    isPublicOffer: source?.IsPublicOffer,
    isRequirementsConfirmationCheck: source?.IsRequirementsConfirmationCheck,
    isUnitBidding: source?.IsUnitBidding,
    matchCustomerRequirements44Documents: source?.MatchCustomerRequirements44Documents?.map((item) => applicationDocumentAdapter(item)),
    needEditOnMarket: source?.NeedEditOnMarket,
    neverExpired: source?.NeverExpired,
    offerExpiryDate: source?.OfferExpiryDate,
    payCommissionReportGuid: source?.PayCommissionReportGuid,
    price: source?.Price,
    products: source?.Products?.map((item) => productAdapter(item)),
    publicationDate: source?.PublicationDate,
    rowVersion: source?.RowVersion,
    shipmentPoint: source?.ShipmentPoint,
    smallBusinessRequirementDocuments: source?.SmallBusinessRequirementDocuments?.map((item) => applicationDocumentAdapter(item)),
    submitterId: source?.SubmitterId,
    submitterName: source?.SubmitterName,
    submitterOrganizationCountry: source?.SubmitterOrganizationCountry === null ? undefined : organizationCountryAltEnumAdapter(source?.SubmitterOrganizationCountry),
    tenantSource: source?.TenantSource,
    tradeBusinessFlow: source?.TradeBusinessFlow === null ? undefined : tradeBusinessFlowEnumAdapter(source?.TradeBusinessFlow),
    tradeId: source?.TradeId,
    tradeLotId: source?.TradeLotId,
    tradeOrganizerId: source?.TradeOrganizerId,
    tradeState: source?.TradeState === null ? undefined : tradeStateEnumAdapter(source?.TradeState),
    universalRequirementDocuments: source?.UniversalRequirementDocuments?.map((item) => applicationDocumentAdapter(item)),
    vatRate: source?.VatRate,
    vatRateDescription: source?.VatRateDescription,
    vatRateState: source?.VatRateState === null ? undefined : vatRateStateEnumAdapter(source?.VatRateState),
    wasRejected: source?.WasRejected,
  };
}

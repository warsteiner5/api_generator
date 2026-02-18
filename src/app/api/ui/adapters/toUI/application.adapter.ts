import { ApiApplicationDto } from '../../../swagger/models/api-application-dto';
import { Application } from '../../models/application.interface';
import { adaptApplicationDocumentToUI } from './application-document.adapter';
import { adaptApplicationSourceEnumToUI } from './application-source-enum.adapter';
import { adaptApplicationStateEnumToUI } from './application-state-enum.adapter';
import { adaptBankingDetailsToUI } from './banking-details.adapter';
import { adaptContactInfoToUI } from './contact-info.adapter';
import { adaptOrganizationCountryAltEnumToUI } from './organization-country-alt-enum.adapter';
import { adaptProductToUI } from './product.adapter';
import { adaptTradeBusinessFlowEnumToUI } from './trade-business-flow-enum.adapter';
import { adaptTradeStateEnumToUI } from './trade-state-enum.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';

export function adaptApplicationToUI(source?: ApiApplicationDto | null): Application {
  return {
    accountNumber: source?.AccountNumber ?? '',
    agreeWithCustomerConditions: source?.AgreeWithCustomerConditions ?? false,
    applicationDocuments: (source?.ApplicationDocuments ?? []).map((item) => adaptApplicationDocumentToUI(item)),
    applicationSource: adaptApplicationSourceEnumToUI(source?.ApplicationSource),
    applicationState: adaptApplicationStateEnumToUI(source?.ApplicationState),
    applicationStateDescription: source?.ApplicationStateDescription ?? '',
    applicationStateId: source?.ApplicationStateId ?? 0,
    bankingDetails: adaptBankingDetailsToUI(source?.BankingDetails),
    canDelete: source?.CanDelete ?? false,
    canEdit: source?.CanEdit ?? false,
    canView: source?.CanView ?? false,
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
    host: source?.Host ?? '',
    id: source?.Id ?? 0,
    incomplianceWithTheRequirementsReason: source?.IncomplianceWithTheRequirementsReason ?? '',
    isApplicationFromAnotherTenant: source?.IsApplicationFromAnotherTenant ?? false,
    isHidePrice: source?.IsHidePrice ?? false,
    isLotPriceWithVat: source?.IsLotPriceWithVat ?? false,
    isOrderApplication: source?.IsOrderApplication ?? false,
    isPriceCorridorExclusion: source?.IsPriceCorridorExclusion ?? false,
    isPriceCorridorMatching: source?.IsPriceCorridorMatching ?? false,
    isPublicOffer: source?.IsPublicOffer ?? false,
    isRequirementsConfirmationCheck: source?.IsRequirementsConfirmationCheck ?? false,
    isUnitBidding: source?.IsUnitBidding ?? false,
    matchCustomerRequirements44Documents: (source?.MatchCustomerRequirements44Documents ?? []).map((item) => adaptApplicationDocumentToUI(item)),
    needEditOnMarket: source?.NeedEditOnMarket ?? false,
    neverExpired: source?.NeverExpired ?? false,
    offerExpiryDate: source?.OfferExpiryDate ?? '',
    payCommissionReportGuid: source?.PayCommissionReportGuid ?? '',
    price: source?.Price ?? 0,
    products: (source?.Products ?? []).map((item) => adaptProductToUI(item)),
    publicationDate: source?.PublicationDate ?? '',
    rowVersion: source?.RowVersion ?? 0,
    shipmentPoint: source?.ShipmentPoint ?? '',
    smallBusinessRequirementDocuments: (source?.SmallBusinessRequirementDocuments ?? []).map((item) => adaptApplicationDocumentToUI(item)),
    submitterId: source?.SubmitterId ?? '',
    submitterName: source?.SubmitterName ?? '',
    submitterOrganizationCountry: adaptOrganizationCountryAltEnumToUI(source?.SubmitterOrganizationCountry),
    tenantSource: source?.TenantSource ?? 0,
    tradeBusinessFlow: adaptTradeBusinessFlowEnumToUI(source?.TradeBusinessFlow),
    tradeId: source?.TradeId ?? 0,
    tradeLotId: source?.TradeLotId ?? 0,
    tradeOrganizerId: source?.TradeOrganizerId ?? 0,
    tradeState: adaptTradeStateEnumToUI(source?.TradeState),
    universalRequirementDocuments: (source?.UniversalRequirementDocuments ?? []).map((item) => adaptApplicationDocumentToUI(item)),
    vatRate: source?.VatRate ?? 0,
    vatRateDescription: source?.VatRateDescription ?? '',
    vatRateState: adaptVatRateStateEnumToUI(source?.VatRateState),
    wasRejected: source?.WasRejected ?? false,
  };
}

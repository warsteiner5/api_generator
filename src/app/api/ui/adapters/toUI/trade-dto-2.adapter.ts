import { ApiTradeDto2 } from '../../../swagger/models/api-trade-dto-2';
import { TradeDto2 } from '../../models/trade-dto-2.interface';
import { adaptAdditionalRequirementDto2ToUI } from './additional-requirement-dto-2.adapter';
import { adaptAvailableVatTypeEnumToUI } from './available-vat-type-enum.adapter';
import { adaptCharacteristicToUI } from './characteristic.adapter';
import { adaptCustomerContactInfoAltToUI } from './customer-contact-info-alt.adapter';
import { adaptDictionaryItemAltToUI } from './dictionary-item-alt.adapter';
import { adaptEisIntegrationDataAltToUI } from './eis-integration-data-alt.adapter';
import { adaptEisTradeInfoAltToUI } from './eis-trade-info-alt.adapter';
import { adaptExternalFieldValueAltToUI } from './external-field-value-alt.adapter';
import { adaptFederalLawLimitAltEnumToUI } from './federal-law-limit-alt-enum.adapter';
import { adaptFillingApplicationMinimumDateCountdownEnumToUI } from './filling-application-minimum-date-countdown-enum.adapter';
import { adaptInvitationMethodEnumToUI } from './invitation-method-enum.adapter';
import { adaptInvitationToUI } from './invitation.adapter';
import { adaptProductDto2ToUI } from './product-dto-2.adapter';
import { adaptSourcePlatformEnumToUI } from './source-platform-enum.adapter';
import { adaptTradeBusinessFlowEnumToUI } from './trade-business-flow-enum.adapter';
import { adaptTradeDocumentToUI } from './trade-document.adapter';
import { adaptTradeLotSpecificationToUI } from './trade-lot-specification.adapter';
import { adaptTradeStateEnumToUI } from './trade-state-enum.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';
import { adaptZmoFinanceSourceEnumToUI } from './zmo-finance-source-enum.adapter';

export function adaptTradeDto2ToUI(source?: ApiTradeDto2 | null): TradeDto2 {
  return {
    additionalInfo: source?.AdditionalInfo ?? '',
    additionalRequirements: (source?.AdditionalRequirements ?? []).map((item) => adaptAdditionalRequirementDto2ToUI(item)),
    businessFlowType: adaptTradeBusinessFlowEnumToUI(source?.BusinessFlowType),
    characteristicFileGuid: source?.CharacteristicFileGuid ?? '',
    characteristicFromUi: source?.CharacteristicFromUi ?? false,
    characteristics: (source?.Characteristics ?? []).map((item) => adaptCharacteristicToUI(item)),
    clientTimeZoneMinutesOffset: source?.ClientTimeZoneMinutesOffset ?? 0,
    conditionsOfPayment: source?.ConditionsOfPayment ?? '',
    contactInfo: adaptCustomerContactInfoAltToUI(source?.ContactInfo),
    contractAmountInfo: source?.ContractAmountInfo ?? '',
    creatorUserId: source?.CreatorUserId ?? 0,
    currencyCode: source?.CurrencyCode ?? '',
    customerId: source?.CustomerId ?? 0,
    customerOrgFullName: source?.CustomerOrgFullName ?? '',
    customerOrganizationId: source?.CustomerOrganizationId ?? 0,
    customerOrganizationInn: source?.CustomerOrganizationInn ?? '',
    customerOrganizationKpp: source?.CustomerOrganizationKpp ?? '',
    customerWorkGroupNames: source?.CustomerWorkGroupNames ?? [],
    dealConclusionTermInfo: source?.DealConclusionTermInfo ?? '',
    dealExecutionDate: source?.DealExecutionDate ?? '',
    deliveryPlace: source?.DeliveryPlace ?? '',
    deliveryTerms: source?.DeliveryTerms ?? '',
    description: source?.Description ?? '',
    eisIntegrationData: adaptEisIntegrationDataAltToUI(source?.EisIntegrationData),
    eisTradeInfo: adaptEisTradeInfoAltToUI(source?.EisTradeInfo),
    externalFieldValues: (source?.ExternalFieldValues ?? []).map((item) => adaptExternalFieldValueAltToUI(item)),
    externalId: source?.ExternalId ?? '',
    externalSourcePlatformNumber: source?.ExternalSourcePlatformNumber ?? '',
    externalSystemId: source?.ExternalSystemId ?? 0,
    federalLawLimit: adaptFederalLawLimitAltEnumToUI(source?.FederalLawLimit),
    fillingApplicationEndDate: source?.FillingApplicationEndDate ?? '',
    fillingApplicationMinimumDateCountdown: adaptFillingApplicationMinimumDateCountdownEnumToUI(source?.FillingApplicationMinimumDateCountdown),
    fillingApplicationsMinDays: source?.FillingApplicationsMinDays ?? 0,
    hasUncompletedEisOutgoingSaga: source?.HasUncompletedEisOutgoingSaga ?? false,
    id: source?.Id ?? 0,
    initialPrice: source?.InitialPrice ?? 0,
    initialPriceWithVat: source?.InitialPriceWithVat ?? 0,
    initialPriceWithoutVat: source?.InitialPriceWithoutVat ?? 0,
    invitationIsAllRegions: source?.InvitationIsAllRegions ?? false,
    invitationMethod: adaptInvitationMethodEnumToUI(source?.InvitationMethod),
    invitationRegions: source?.InvitationRegions ?? [],
    invitationTags: source?.InvitationTags ?? [],
    invitations: (source?.Invitations ?? []).map((item) => adaptInvitationToUI(item)),
    invitedOrganizationIds: source?.InvitedOrganizationIds ?? [],
    isAutoCompleteDeal: source?.IsAutoCompleteDeal ?? false,
    isBasedOnPublicOffer: source?.IsBasedOnPublicOffer ?? false,
    isContractInElectronicForm: source?.IsContractInElectronicForm ?? false,
    isCustomerAcceptByOkeiOffers: source?.IsCustomerAcceptByOkeiOffers ?? false,
    isCustomerAcceptOnlyTop5Offers: source?.IsCustomerAcceptOnlyTop5Offers ?? false,
    isDifferenceProtocolSendOnce: source?.IsDifferenceProtocolSendOnce ?? false,
    isFederalLawsEnable: source?.IsFederalLawsEnable ?? false,
    isImmediate: source?.IsImmediate ?? false,
    isImportPhaseout: source?.IsImportPhaseout ?? false,
    isInitialPriceDefined: source?.IsInitialPriceDefined ?? false,
    isInitialPriceReduction: source?.IsInitialPriceReduction ?? false,
    isLotPriceEnteredWithVAT: source?.IsLotPriceEnteredWithVAT ?? false,
    isLotPriceWithVat: source?.IsLotPriceWithVat ?? false,
    isManualEnterPriceForEachProduct: source?.IsManualEnterPriceForEachProduct ?? false,
    isModificationSentToOos: source?.IsModificationSentToOos ?? false,
    isOnlySmp: source?.IsOnlySmp ?? false,
    isParentContractNumberNotSpecified: source?.IsParentContractNumberNotSpecified ?? false,
    isPositionalVatEnable: source?.IsPositionalVatEnable ?? false,
    isPriceCorridorUsed: source?.IsPriceCorridorUsed ?? false,
    isRetradingEnabled: source?.IsRetradingEnabled ?? false,
    isRussianPurchaseObjectHasAdvantage: source?.IsRussianPurchaseObjectHasAdvantage ?? false,
    isSanctionedPurchase: source?.IsSanctionedPurchase ?? false,
    isSendToEis: source?.IsSendToEis ?? false,
    isSingleWinner: source?.IsSingleWinner ?? false,
    isUnitBidding: source?.IsUnitBidding ?? false,
    keepGuaranteeForAllParticipants: source?.KeepGuaranteeForAllParticipants ?? false,
    keepGuaranteeForParticipantsCount: source?.KeepGuaranteeForParticipantsCount ?? 0,
    kladrRegionCode: source?.KladrRegionCode ?? '',
    kladrRegionCodes: (source?.KladrRegionCodes ?? []).map((item) => adaptDictionaryItemAltToUI(item)),
    lastModificationDate: source?.LastModificationDate ?? '',
    lotItemsSumPrice: source?.LotItemsSumPrice ?? 0,
    maxDealPrice: source?.MaxDealPrice ?? 0,
    maxDealPriceSumVat: source?.MaxDealPriceSumVat ?? 0,
    maxDealPriceWithVat: source?.MaxDealPriceWithVat ?? 0,
    maxDealPriceWithoutVat: source?.MaxDealPriceWithoutVat ?? 0,
    modificationInfo: source?.ModificationInfo ?? '',
    offerId: source?.OfferId ?? 0,
    organizerId: source?.OrganizerId ?? 0,
    parentContractNumber: source?.ParentContractNumber ?? '',
    parentNotTookPlaceTradeId: source?.ParentNotTookPlaceTradeId ?? 0,
    planId: source?.PlanId ?? 0,
    planNumber: source?.PlanNumber ?? '',
    planPositionNumber: source?.PlanPositionNumber ?? '',
    planStartingPrice: source?.PlanStartingPrice ?? 0,
    planStartingPriceWithoutVat: source?.PlanStartingPriceWithoutVat ?? 0,
    planedDealSignDate: source?.PlanedDealSignDate ?? '',
    products: (source?.Products ?? []).map((item) => adaptProductDto2ToUI(item)),
    rateVat: adaptAvailableVatTypeEnumToUI(source?.RateVat),
    rowVersion: source?.RowVersion ?? 0,
    selectOffersOnlyFromProposedBySuppliers: source?.SelectOffersOnlyFromProposedBySuppliers ?? false,
    sourcePlatform: adaptSourcePlatformEnumToUI(source?.SourcePlatform),
    specifications: (source?.Specifications ?? []).map((item) => adaptTradeLotSpecificationToUI(item)),
    supplierWithSmallBusinessRequirements: source?.SupplierWithSmallBusinessRequirements ?? false,
    tenantKey: source?.TenantKey ?? 0,
    tradeDocuments: (source?.TradeDocuments ?? []).map((item) => adaptTradeDocumentToUI(item)),
    tradeIdentificationCode: source?.TradeIdentificationCode ?? '',
    tradeLotIds: source?.TradeLotIds ?? [],
    tradeName: source?.TradeName ?? '',
    tradeState: adaptTradeStateEnumToUI(source?.TradeState),
    vatRateState: adaptVatRateStateEnumToUI(source?.VatRateState),
    workGroupIds: source?.WorkGroupIds ?? [],
    zmoFinanceSource: adaptZmoFinanceSourceEnumToUI(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType ?? 0,
  };
}

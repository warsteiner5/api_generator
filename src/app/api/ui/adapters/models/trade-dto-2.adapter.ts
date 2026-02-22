import { ApiTradeDto2 } from '../../../swagger/models/api-trade-dto-2';
import { TradeDto2 } from '../../models/trade-dto-2.interface';
import { additionalRequirementDto2Adapter } from './additional-requirement-dto-2.adapter';
import { availableVatTypeEnumAdapter } from '../enums/available-vat-type-enum.adapter';
import { characteristicAdapter } from './characteristic.adapter';
import { customerContactInfoAltAdapter } from './customer-contact-info-alt.adapter';
import { dictionaryItemAltAdapter } from './dictionary-item-alt.adapter';
import { eisIntegrationDataAltAdapter } from './eis-integration-data-alt.adapter';
import { eisTradeInfoAltAdapter } from './eis-trade-info-alt.adapter';
import { externalFieldValueAltAdapter } from './external-field-value-alt.adapter';
import { federalLawLimitAltEnumAdapter } from '../enums/federal-law-limit-alt-enum.adapter';
import { fillingApplicationMinimumDateCountdownEnumAdapter } from '../enums/filling-application-minimum-date-countdown-enum.adapter';
import { invitationAdapter } from './invitation.adapter';
import { invitationMethodEnumAdapter } from '../enums/invitation-method-enum.adapter';
import { productDto2Adapter } from './product-dto-2.adapter';
import { sourcePlatformEnumAdapter } from '../enums/source-platform-enum.adapter';
import { tradeBusinessFlowEnumAdapter } from '../enums/trade-business-flow-enum.adapter';
import { tradeDocumentAdapter } from './trade-document.adapter';
import { tradeLotSpecificationAdapter } from './trade-lot-specification.adapter';
import { tradeStateEnumAdapter } from '../enums/trade-state-enum.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';
import { zmoFinanceSourceEnumAdapter } from '../enums/zmo-finance-source-enum.adapter';

export const tradeDto2Adapter = (source?: ApiTradeDto2 | null): TradeDto2 => {
  return {
    additionalInfo: source?.AdditionalInfo,
    additionalRequirements: source?.AdditionalRequirements?.map((item) => additionalRequirementDto2Adapter(item)),
    businessFlowType: source?.BusinessFlowType === null ? undefined : tradeBusinessFlowEnumAdapter(source?.BusinessFlowType),
    characteristicFileGuid: source?.CharacteristicFileGuid,
    characteristicFromUi: source?.CharacteristicFromUi,
    characteristics: source?.Characteristics?.map((item) => characteristicAdapter(item)),
    clientTimeZoneMinutesOffset: source?.ClientTimeZoneMinutesOffset,
    conditionsOfPayment: source?.ConditionsOfPayment,
    contactInfo: source?.ContactInfo === null ? undefined : customerContactInfoAltAdapter(source?.ContactInfo),
    contractAmountInfo: source?.ContractAmountInfo,
    creatorUserId: source?.CreatorUserId,
    currencyCode: source?.CurrencyCode,
    customerId: source?.CustomerId,
    customerOrgFullName: source?.CustomerOrgFullName,
    customerOrganizationId: source?.CustomerOrganizationId,
    customerOrganizationInn: source?.CustomerOrganizationInn,
    customerOrganizationKpp: source?.CustomerOrganizationKpp,
    customerWorkGroupNames: source?.CustomerWorkGroupNames,
    dealConclusionTermInfo: source?.DealConclusionTermInfo,
    dealExecutionDate: source?.DealExecutionDate,
    deliveryPlace: source?.DeliveryPlace,
    deliveryTerms: source?.DeliveryTerms,
    description: source?.Description,
    eisIntegrationData: source?.EisIntegrationData === null ? undefined : eisIntegrationDataAltAdapter(source?.EisIntegrationData),
    eisTradeInfo: source?.EisTradeInfo === null ? undefined : eisTradeInfoAltAdapter(source?.EisTradeInfo),
    externalFieldValues: source?.ExternalFieldValues?.map((item) => externalFieldValueAltAdapter(item)),
    externalId: source?.ExternalId,
    externalSourcePlatformNumber: source?.ExternalSourcePlatformNumber,
    externalSystemId: source?.ExternalSystemId,
    federalLawLimit: source?.FederalLawLimit === null ? undefined : federalLawLimitAltEnumAdapter(source?.FederalLawLimit),
    fillingApplicationEndDate: source?.FillingApplicationEndDate,
    fillingApplicationMinimumDateCountdown: source?.FillingApplicationMinimumDateCountdown === null ? undefined : fillingApplicationMinimumDateCountdownEnumAdapter(source?.FillingApplicationMinimumDateCountdown),
    fillingApplicationsMinDays: source?.FillingApplicationsMinDays,
    hasUncompletedEisOutgoingSaga: source?.HasUncompletedEisOutgoingSaga,
    id: source?.Id,
    initialPrice: source?.InitialPrice,
    initialPriceWithVat: source?.InitialPriceWithVat,
    initialPriceWithoutVat: source?.InitialPriceWithoutVat,
    invitationIsAllRegions: source?.InvitationIsAllRegions,
    invitationMethod: source?.InvitationMethod === null ? undefined : invitationMethodEnumAdapter(source?.InvitationMethod),
    invitationRegions: source?.InvitationRegions,
    invitationTags: source?.InvitationTags,
    invitations: source?.Invitations?.map((item) => invitationAdapter(item)),
    invitedOrganizationIds: source?.InvitedOrganizationIds,
    isAutoCompleteDeal: source?.IsAutoCompleteDeal,
    isBasedOnPublicOffer: source?.IsBasedOnPublicOffer,
    isContractInElectronicForm: source?.IsContractInElectronicForm,
    isCustomerAcceptByOkeiOffers: source?.IsCustomerAcceptByOkeiOffers,
    isCustomerAcceptOnlyTop5Offers: source?.IsCustomerAcceptOnlyTop5Offers,
    isDifferenceProtocolSendOnce: source?.IsDifferenceProtocolSendOnce,
    isFederalLawsEnable: source?.IsFederalLawsEnable,
    isImmediate: source?.IsImmediate,
    isImportPhaseout: source?.IsImportPhaseout,
    isInitialPriceDefined: source?.IsInitialPriceDefined,
    isInitialPriceReduction: source?.IsInitialPriceReduction,
    isLotPriceEnteredWithVAT: source?.IsLotPriceEnteredWithVAT,
    isLotPriceWithVat: source?.IsLotPriceWithVat,
    isManualEnterPriceForEachProduct: source?.IsManualEnterPriceForEachProduct,
    isModificationSentToOos: source?.IsModificationSentToOos,
    isOnlySmp: source?.IsOnlySmp,
    isParentContractNumberNotSpecified: source?.IsParentContractNumberNotSpecified,
    isPositionalVatEnable: source?.IsPositionalVatEnable,
    isPriceCorridorUsed: source?.IsPriceCorridorUsed,
    isRetradingEnabled: source?.IsRetradingEnabled,
    isRussianPurchaseObjectHasAdvantage: source?.IsRussianPurchaseObjectHasAdvantage,
    isSanctionedPurchase: source?.IsSanctionedPurchase,
    isSendToEis: source?.IsSendToEis,
    isSingleWinner: source?.IsSingleWinner,
    isUnitBidding: source?.IsUnitBidding,
    keepGuaranteeForAllParticipants: source?.KeepGuaranteeForAllParticipants,
    keepGuaranteeForParticipantsCount: source?.KeepGuaranteeForParticipantsCount,
    kladrRegionCode: source?.KladrRegionCode,
    kladrRegionCodes: source?.KladrRegionCodes?.map((item) => dictionaryItemAltAdapter(item)),
    lastModificationDate: source?.LastModificationDate,
    lotItemsSumPrice: source?.LotItemsSumPrice,
    maxDealPrice: source?.MaxDealPrice,
    maxDealPriceSumVat: source?.MaxDealPriceSumVat,
    maxDealPriceWithVat: source?.MaxDealPriceWithVat,
    maxDealPriceWithoutVat: source?.MaxDealPriceWithoutVat,
    modificationInfo: source?.ModificationInfo,
    offerId: source?.OfferId,
    organizerId: source?.OrganizerId,
    parentContractNumber: source?.ParentContractNumber,
    parentNotTookPlaceTradeId: source?.ParentNotTookPlaceTradeId,
    planId: source?.PlanId,
    planNumber: source?.PlanNumber,
    planPositionNumber: source?.PlanPositionNumber,
    planStartingPrice: source?.PlanStartingPrice,
    planStartingPriceWithoutVat: source?.PlanStartingPriceWithoutVat,
    planedDealSignDate: source?.PlanedDealSignDate,
    products: source?.Products?.map((item) => productDto2Adapter(item)),
    rateVat: source?.RateVat === null ? undefined : availableVatTypeEnumAdapter(source?.RateVat),
    rowVersion: source?.RowVersion,
    selectOffersOnlyFromProposedBySuppliers: source?.SelectOffersOnlyFromProposedBySuppliers,
    sourcePlatform: source?.SourcePlatform === null ? undefined : sourcePlatformEnumAdapter(source?.SourcePlatform),
    specifications: source?.Specifications?.map((item) => tradeLotSpecificationAdapter(item)),
    supplierWithSmallBusinessRequirements: source?.SupplierWithSmallBusinessRequirements,
    tenantKey: source?.TenantKey,
    tradeDocuments: source?.TradeDocuments?.map((item) => tradeDocumentAdapter(item)),
    tradeIdentificationCode: source?.TradeIdentificationCode,
    tradeLotIds: source?.TradeLotIds,
    tradeName: source?.TradeName,
    tradeState: source?.TradeState === null ? undefined : tradeStateEnumAdapter(source?.TradeState),
    vatRateState: source?.VatRateState === null ? undefined : vatRateStateEnumAdapter(source?.VatRateState),
    workGroupIds: source?.WorkGroupIds,
    zmoFinanceSource: source?.ZmoFinanceSource === null ? undefined : zmoFinanceSourceEnumAdapter(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType,
  };
}

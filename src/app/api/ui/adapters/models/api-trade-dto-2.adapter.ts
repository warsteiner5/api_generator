import { TradeDto2 } from '../../models/trade-dto-2.interface';
import { ApiTradeDto2 } from '../../../swagger/models/api-trade-dto-2';
import { apiAdditionalRequirementDto2Adapter } from './api-additional-requirement-dto-2.adapter';
import { apiAvailableVatTypeEnumAdapter } from '../enums/api-available-vat-type-enum.adapter';
import { apiCharacteristicDtoAdapter } from './api-characteristic-dto.adapter';
import { apiCustomerContactInfoAltDtoAdapter } from './api-customer-contact-info.adapter';
import { apiDictionaryItemAltDtoAdapter } from './api-dictionary-item.adapter';
import { apiEisIntegrationDataAltDtoAdapter } from './api-eis-integration-data.adapter';
import { apiEisTradeInfoAltDtoAdapter } from './api-eis-trade-info.adapter';
import { apiExternalFieldValueAltDtoAdapter } from './api-external-field-value.adapter';
import { apiFederalLawLimitAltEnumAdapter } from '../enums/api-federal-law-limit.adapter';
import { apiFillingApplicationMinimumDateCountdownEnumAdapter } from '../enums/api-filling-application-minimum-date-countdown-enum.adapter';
import { apiInvitationDtoAdapter } from './api-invitation-dto.adapter';
import { apiInvitationMethodEnumAdapter } from '../enums/api-invitation-method-enum.adapter';
import { apiProductDto2Adapter } from './api-product-dto-2.adapter';
import { apiSourcePlatformEnumAdapter } from '../enums/api-source-platform-enum.adapter';
import { apiTradeBusinessFlowEnumAdapter } from '../enums/api-trade-business-flow-enum.adapter';
import { apiTradeDocumentDtoAdapter } from './api-trade-document-dto.adapter';
import { apiTradeLotSpecificationDtoAdapter } from './api-trade-lot-specification-dto.adapter';
import { apiTradeStateEnumAdapter } from '../enums/api-trade-state-enum.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';
import { apiZmoFinanceSourceEnumAdapter } from '../enums/api-zmo-finance-source-enum.adapter';

export const apiTradeDto2Adapter = (source?: TradeDto2 | null): ApiTradeDto2 => {
  return {
    AdditionalInfo: source?.additionalInfo,
    AdditionalRequirements: source?.additionalRequirements?.map((item) => apiAdditionalRequirementDto2Adapter(item)),
    BusinessFlowType: source?.businessFlowType === null ? undefined : apiTradeBusinessFlowEnumAdapter(source?.businessFlowType),
    CharacteristicFileGuid: source?.characteristicFileGuid,
    CharacteristicFromUi: source?.characteristicFromUi,
    Characteristics: source?.characteristics?.map((item) => apiCharacteristicDtoAdapter(item)),
    ClientTimeZoneMinutesOffset: source?.clientTimeZoneMinutesOffset,
    ConditionsOfPayment: source?.conditionsOfPayment,
    ContactInfo: source?.contactInfo === null ? undefined : apiCustomerContactInfoAltDtoAdapter(source?.contactInfo),
    ContractAmountInfo: source?.contractAmountInfo,
    CreatorUserId: source?.creatorUserId,
    CurrencyCode: source?.currencyCode,
    CustomerId: source?.customerId,
    CustomerOrgFullName: source?.customerOrgFullName,
    CustomerOrganizationId: source?.customerOrganizationId,
    CustomerOrganizationInn: source?.customerOrganizationInn,
    CustomerOrganizationKpp: source?.customerOrganizationKpp,
    CustomerWorkGroupNames: source?.customerWorkGroupNames,
    DealConclusionTermInfo: source?.dealConclusionTermInfo,
    DealExecutionDate: source?.dealExecutionDate,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    EisIntegrationData: source?.eisIntegrationData === null ? undefined : apiEisIntegrationDataAltDtoAdapter(source?.eisIntegrationData),
    EisTradeInfo: source?.eisTradeInfo === null ? undefined : apiEisTradeInfoAltDtoAdapter(source?.eisTradeInfo),
    ExternalFieldValues: source?.externalFieldValues?.map((item) => apiExternalFieldValueAltDtoAdapter(item)),
    ExternalId: source?.externalId,
    ExternalSourcePlatformNumber: source?.externalSourcePlatformNumber,
    ExternalSystemId: source?.externalSystemId,
    FederalLawLimit: source?.federalLawLimit === null ? undefined : apiFederalLawLimitAltEnumAdapter(source?.federalLawLimit),
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    FillingApplicationMinimumDateCountdown: source?.fillingApplicationMinimumDateCountdown === null ? undefined : apiFillingApplicationMinimumDateCountdownEnumAdapter(source?.fillingApplicationMinimumDateCountdown),
    FillingApplicationsMinDays: source?.fillingApplicationsMinDays,
    HasUncompletedEisOutgoingSaga: source?.hasUncompletedEisOutgoingSaga,
    Id: source?.id,
    InitialPrice: source?.initialPrice,
    InitialPriceWithVat: source?.initialPriceWithVat,
    InitialPriceWithoutVat: source?.initialPriceWithoutVat,
    InvitationIsAllRegions: source?.invitationIsAllRegions,
    InvitationMethod: source?.invitationMethod === null ? undefined : apiInvitationMethodEnumAdapter(source?.invitationMethod),
    InvitationRegions: source?.invitationRegions,
    InvitationTags: source?.invitationTags,
    Invitations: source?.invitations?.map((item) => apiInvitationDtoAdapter(item)),
    InvitedOrganizationIds: source?.invitedOrganizationIds,
    IsAutoCompleteDeal: source?.isAutoCompleteDeal,
    IsBasedOnPublicOffer: source?.isBasedOnPublicOffer,
    IsContractInElectronicForm: source?.isContractInElectronicForm,
    IsCustomerAcceptByOkeiOffers: source?.isCustomerAcceptByOkeiOffers,
    IsCustomerAcceptOnlyTop5Offers: source?.isCustomerAcceptOnlyTop5Offers,
    IsDifferenceProtocolSendOnce: source?.isDifferenceProtocolSendOnce,
    IsFederalLawsEnable: source?.isFederalLawsEnable,
    IsImmediate: source?.isImmediate,
    IsImportPhaseout: source?.isImportPhaseout,
    IsInitialPriceDefined: source?.isInitialPriceDefined,
    IsInitialPriceReduction: source?.isInitialPriceReduction,
    IsLotPriceEnteredWithVAT: source?.isLotPriceEnteredWithVAT,
    IsLotPriceWithVat: source?.isLotPriceWithVat,
    IsManualEnterPriceForEachProduct: source?.isManualEnterPriceForEachProduct,
    IsModificationSentToOos: source?.isModificationSentToOos,
    IsOnlySmp: source?.isOnlySmp,
    IsParentContractNumberNotSpecified: source?.isParentContractNumberNotSpecified,
    IsPositionalVatEnable: source?.isPositionalVatEnable,
    IsPriceCorridorUsed: source?.isPriceCorridorUsed,
    IsRetradingEnabled: source?.isRetradingEnabled,
    IsRussianPurchaseObjectHasAdvantage: source?.isRussianPurchaseObjectHasAdvantage,
    IsSanctionedPurchase: source?.isSanctionedPurchase,
    IsSendToEis: source?.isSendToEis,
    IsSingleWinner: source?.isSingleWinner,
    IsUnitBidding: source?.isUnitBidding,
    KeepGuaranteeForAllParticipants: source?.keepGuaranteeForAllParticipants,
    KeepGuaranteeForParticipantsCount: source?.keepGuaranteeForParticipantsCount,
    KladrRegionCode: source?.kladrRegionCode,
    KladrRegionCodes: source?.kladrRegionCodes?.map((item) => apiDictionaryItemAltDtoAdapter(item)),
    LastModificationDate: source?.lastModificationDate,
    LotItemsSumPrice: source?.lotItemsSumPrice,
    MaxDealPrice: source?.maxDealPrice,
    MaxDealPriceSumVat: source?.maxDealPriceSumVat,
    MaxDealPriceWithVat: source?.maxDealPriceWithVat,
    MaxDealPriceWithoutVat: source?.maxDealPriceWithoutVat,
    ModificationInfo: source?.modificationInfo,
    OfferId: source?.offerId,
    OrganizerId: source?.organizerId,
    ParentContractNumber: source?.parentContractNumber,
    ParentNotTookPlaceTradeId: source?.parentNotTookPlaceTradeId,
    PlanId: source?.planId,
    PlanNumber: source?.planNumber,
    PlanPositionNumber: source?.planPositionNumber,
    PlanStartingPrice: source?.planStartingPrice,
    PlanStartingPriceWithoutVat: source?.planStartingPriceWithoutVat,
    PlanedDealSignDate: source?.planedDealSignDate,
    Products: source?.products?.map((item) => apiProductDto2Adapter(item)),
    RateVat: source?.rateVat === null ? undefined : apiAvailableVatTypeEnumAdapter(source?.rateVat),
    RowVersion: source?.rowVersion,
    SelectOffersOnlyFromProposedBySuppliers: source?.selectOffersOnlyFromProposedBySuppliers,
    SourcePlatform: source?.sourcePlatform === null ? undefined : apiSourcePlatformEnumAdapter(source?.sourcePlatform),
    Specifications: source?.specifications?.map((item) => apiTradeLotSpecificationDtoAdapter(item)),
    SupplierWithSmallBusinessRequirements: source?.supplierWithSmallBusinessRequirements,
    TenantKey: source?.tenantKey,
    TradeDocuments: source?.tradeDocuments?.map((item) => apiTradeDocumentDtoAdapter(item)),
    TradeIdentificationCode: source?.tradeIdentificationCode,
    TradeLotIds: source?.tradeLotIds,
    TradeName: source?.tradeName,
    TradeState: source?.tradeState === null ? undefined : apiTradeStateEnumAdapter(source?.tradeState),
    VatRateState: source?.vatRateState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatRateState),
    WorkGroupIds: source?.workGroupIds,
    ZmoFinanceSource: source?.zmoFinanceSource === null ? undefined : apiZmoFinanceSourceEnumAdapter(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}

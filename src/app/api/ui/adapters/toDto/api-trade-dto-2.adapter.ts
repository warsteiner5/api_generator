import { TradeDto2 } from '../../models/trade-dto-2.interface';
import { ApiTradeDto2 } from '../../../swagger/models/api-trade-dto-2';
import { adaptApiAdditionalRequirementDto2 } from './api-additional-requirement-dto-2.adapter';
import { adaptApiAvailableVatTypeEnum } from './api-available-vat-type-enum.adapter';
import { adaptApiCharacteristicDto } from './api-characteristic-dto.adapter';
import { adaptApiCustomerContactInfoAltDto } from './api-customer-contact-info.adapter';
import { adaptApiDictionaryItemAltDto } from './api-dictionary-item.adapter';
import { adaptApiEisIntegrationDataAltDto } from './api-eis-integration-data.adapter';
import { adaptApiEisTradeInfoAltDto } from './api-eis-trade-info.adapter';
import { adaptApiExternalFieldValueAltDto } from './api-external-field-value.adapter';
import { adaptApiFederalLawLimitAltEnum } from './api-federal-law-limit.adapter';
import { adaptApiFillingApplicationMinimumDateCountdownEnum } from './api-filling-application-minimum-date-countdown-enum.adapter';
import { adaptApiInvitationDto } from './api-invitation-dto.adapter';
import { adaptApiInvitationMethodEnum } from './api-invitation-method-enum.adapter';
import { adaptApiProductDto2 } from './api-product-dto-2.adapter';
import { adaptApiSourcePlatformEnum } from './api-source-platform-enum.adapter';
import { adaptApiTradeBusinessFlowEnum } from './api-trade-business-flow-enum.adapter';
import { adaptApiTradeDocumentDto } from './api-trade-document-dto.adapter';
import { adaptApiTradeLotSpecificationDto } from './api-trade-lot-specification-dto.adapter';
import { adaptApiTradeStateEnum } from './api-trade-state-enum.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';
import { adaptApiZmoFinanceSourceEnum } from './api-zmo-finance-source-enum.adapter';

export function adaptApiTradeDto2(source?: TradeDto2 | null): ApiTradeDto2 {
  return {
    AdditionalInfo: source?.additionalInfo,
    AdditionalRequirements: (source?.additionalRequirements ?? []).map((item) => adaptApiAdditionalRequirementDto2(item)),
    BusinessFlowType: adaptApiTradeBusinessFlowEnum(source?.businessFlowType),
    CharacteristicFileGuid: source?.characteristicFileGuid,
    CharacteristicFromUi: source?.characteristicFromUi,
    Characteristics: (source?.characteristics ?? []).map((item) => adaptApiCharacteristicDto(item)),
    ClientTimeZoneMinutesOffset: source?.clientTimeZoneMinutesOffset,
    ConditionsOfPayment: source?.conditionsOfPayment,
    ContactInfo: adaptApiCustomerContactInfoAltDto(source?.contactInfo),
    ContractAmountInfo: source?.contractAmountInfo,
    CreatorUserId: source?.creatorUserId,
    CurrencyCode: source?.currencyCode,
    CustomerId: source?.customerId,
    CustomerOrgFullName: source?.customerOrgFullName,
    CustomerOrganizationId: source?.customerOrganizationId,
    CustomerOrganizationInn: source?.customerOrganizationInn,
    CustomerOrganizationKpp: source?.customerOrganizationKpp,
    CustomerWorkGroupNames: source?.customerWorkGroupNames ?? [],
    DealConclusionTermInfo: source?.dealConclusionTermInfo,
    DealExecutionDate: source?.dealExecutionDate,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    EisIntegrationData: adaptApiEisIntegrationDataAltDto(source?.eisIntegrationData),
    EisTradeInfo: adaptApiEisTradeInfoAltDto(source?.eisTradeInfo),
    ExternalFieldValues: (source?.externalFieldValues ?? []).map((item) => adaptApiExternalFieldValueAltDto(item)),
    ExternalId: source?.externalId,
    ExternalSourcePlatformNumber: source?.externalSourcePlatformNumber,
    ExternalSystemId: source?.externalSystemId,
    FederalLawLimit: adaptApiFederalLawLimitAltEnum(source?.federalLawLimit),
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    FillingApplicationMinimumDateCountdown: adaptApiFillingApplicationMinimumDateCountdownEnum(source?.fillingApplicationMinimumDateCountdown),
    FillingApplicationsMinDays: source?.fillingApplicationsMinDays,
    HasUncompletedEisOutgoingSaga: source?.hasUncompletedEisOutgoingSaga,
    Id: source?.id,
    InitialPrice: source?.initialPrice,
    InitialPriceWithVat: source?.initialPriceWithVat,
    InitialPriceWithoutVat: source?.initialPriceWithoutVat,
    InvitationIsAllRegions: source?.invitationIsAllRegions,
    InvitationMethod: adaptApiInvitationMethodEnum(source?.invitationMethod),
    InvitationRegions: source?.invitationRegions ?? [],
    InvitationTags: source?.invitationTags ?? [],
    Invitations: (source?.invitations ?? []).map((item) => adaptApiInvitationDto(item)),
    InvitedOrganizationIds: source?.invitedOrganizationIds ?? [],
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
    KladrRegionCodes: (source?.kladrRegionCodes ?? []).map((item) => adaptApiDictionaryItemAltDto(item)),
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
    Products: (source?.products ?? []).map((item) => adaptApiProductDto2(item)),
    RateVat: adaptApiAvailableVatTypeEnum(source?.rateVat),
    RowVersion: source?.rowVersion,
    SelectOffersOnlyFromProposedBySuppliers: source?.selectOffersOnlyFromProposedBySuppliers,
    SourcePlatform: adaptApiSourcePlatformEnum(source?.sourcePlatform),
    Specifications: (source?.specifications ?? []).map((item) => adaptApiTradeLotSpecificationDto(item)),
    SupplierWithSmallBusinessRequirements: source?.supplierWithSmallBusinessRequirements,
    TenantKey: source?.tenantKey,
    TradeDocuments: (source?.tradeDocuments ?? []).map((item) => adaptApiTradeDocumentDto(item)),
    TradeIdentificationCode: source?.tradeIdentificationCode,
    TradeLotIds: source?.tradeLotIds ?? [],
    TradeName: source?.tradeName,
    TradeState: adaptApiTradeStateEnum(source?.tradeState),
    VatRateState: adaptApiVatRateStateEnum(source?.vatRateState),
    WorkGroupIds: source?.workGroupIds ?? [],
    ZmoFinanceSource: adaptApiZmoFinanceSourceEnum(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}

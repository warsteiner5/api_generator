import { ApiTenantSettingDto } from '../../../swagger/models/api-tenant-setting-dto';
import { TenantSetting } from '../../models/tenant-setting.interface';
import { adaptBusinessOperatorIdEnumToUI } from './business-operator-id-enum.adapter';
import { adaptHideApplicationDataForCustomerModeEnumToUI } from './hide-application-data-for-customer-mode-enum.adapter';
import { adaptHideApplicationDataForParticipantModeEnumToUI } from './hide-application-data-for-participant-mode-enum.adapter';
import { adaptHideApplicationDataModeOpenPartEnumToUI } from './hide-application-data-mode-open-part-enum.adapter';
import { adaptMenuCustomItemTemplateToUI } from './menu-custom-item-template.adapter';
import { adaptMessageKindAltEnumToUI } from './message-kind-alt-enum.adapter';
import { adaptPositionsImportExcelTemplateTypeEnumToUI } from './positions-import-excel-template-type-enum.adapter';
import { adaptSectionEnumToUI } from './section-enum.adapter';
import { adaptSideFilterStructureToUI } from './side-filter-structure.adapter';
import { adaptTenantFlowTypeAltEnumToUI } from './tenant-flow-type-alt-enum.adapter';
import { adaptTenantRegionalProductSignSettingToUI } from './tenant-regional-product-sign-setting.adapter';
import { adaptTradeDocumentTypeEnumToUI } from './trade-document-type-enum.adapter';

export function adaptTenantSettingToUI(source?: ApiTenantSettingDto | null): TenantSetting {
  return {
    allowSendToMovingPro: source?.AllowSendToMovingPro ?? false,
    allowUserManagement: source?.AllowUserManagement ?? false,
    availableRegions: source?.AvailableRegions ?? [],
    bannerHtml: source?.BannerHtml ?? '',
    businessOperatorId: adaptBusinessOperatorIdEnumToUI(source?.BusinessOperatorId),
    canLinkNotTookPlaceTrade: source?.CanLinkNotTookPlaceTrade ?? false,
    canLinkNotTookPlaceTradeOnce: source?.CanLinkNotTookPlaceTradeOnce ?? false,
    commercialOfferFromOpenPartIsEnabled: source?.CommercialOfferFromOpenPartIsEnabled ?? false,
    commercialOfferOwnerGuid: source?.CommercialOfferOwnerGuid ?? '',
    customCss: source?.CustomCss ?? '',
    denyTradePriceRaise: source?.DenyTradePriceRaise ?? false,
    enableApplicationsDenyPriceRaise: source?.EnableApplicationsDenyPriceRaise ?? false,
    enableMonetizationMarket: source?.EnableMonetizationMarket ?? false,
    enableRaiseApplicationPriceMoreThanTradePrice: source?.EnableRaiseApplicationPriceMoreThanTradePrice ?? false,
    footerHtml: source?.FooterHtml ?? '',
    headerHtml: source?.HeaderHtml ?? '',
    headerTitle: source?.HeaderTitle ?? '',
    hideApplicationDataForCustomerMode: adaptHideApplicationDataForCustomerModeEnumToUI(source?.HideApplicationDataForCustomerMode),
    hideApplicationDataForParticipantMode: adaptHideApplicationDataForParticipantModeEnumToUI(source?.HideApplicationDataForParticipantMode),
    hideApplicationDataOpenPartMode: adaptHideApplicationDataModeOpenPartEnumToUI(source?.HideApplicationDataOpenPartMode),
    hidedSection: (source?.HidedSection ?? []).map((item) => adaptSectionEnumToUI(item)),
    id: source?.Id ?? 0,
    immediateTradesDisable: source?.ImmediateTradesDisable ?? false,
    importExcelTemplateType: adaptPositionsImportExcelTemplateTypeEnumToUI(source?.ImportExcelTemplateType),
    instructionFileGuid: source?.InstructionFileGuid ?? '',
    isCartEnable: source?.IsCartEnable ?? false,
    isChangeSingleSupplierTradeToPriceRequest: source?.IsChangeSingleSupplierTradeToPriceRequest ?? false,
    isClarificationRequestsEnabled: source?.IsClarificationRequestsEnabled ?? false,
    isDealAgreementEnabled: source?.IsDealAgreementEnabled ?? false,
    isDealsOutOfEtpEnabled: source?.IsDealsOutOfEtpEnabled ?? false,
    isGlobalMarket: source?.IsGlobalMarket ?? false,
    isImportOffersFromYMLEnabled: source?.IsImportOffersFromYMLEnabled ?? false,
    isImportPositionsFromExcelEnabled: source?.IsImportPositionsFromExcelEnabled ?? false,
    isLandingEnable: source?.IsLandingEnable ?? false,
    isLandingSwitchEnabled: source?.IsLandingSwitchEnabled ?? false,
    isManufacturerEnabled: source?.IsManufacturerEnabled ?? false,
    isMyPriceListsEnabled: source?.IsMyPriceListsEnabled ?? false,
    isNeedTradeApprove: source?.IsNeedTradeApprove ?? false,
    isOfferContentComplaintsEnabled: source?.IsOfferContentComplaintsEnabled ?? false,
    isOfferModerationEnable: source?.IsOfferModerationEnable ?? false,
    isPassportAuthEnable: source?.IsPassportAuthEnable ?? false,
    isPriceCorridorEnabled: source?.IsPriceCorridorEnabled ?? false,
    isProposalDocsRequired: source?.IsProposalDocsRequired ?? false,
    isSalesTechAuthEnable: source?.IsSalesTechAuthEnable ?? false,
    isStarOkServiceEnabled: source?.IsStarOkServiceEnabled ?? false,
    isStoriesEnabled: source?.IsStoriesEnabled ?? false,
    isTableEditingModeEnabled: source?.IsTableEditingModeEnabled ?? false,
    isTelegramEnabled: source?.IsTelegramEnabled ?? false,
    isZeroSingleSupplierTradeEnabled: source?.IsZeroSingleSupplierTradeEnabled ?? false,
    landingBannerForCustomerLargeText: source?.LandingBannerForCustomerLargeText ?? '',
    landingBannerForCustomerSmallText: source?.LandingBannerForCustomerSmallText ?? '',
    landingBannerForSupplierLargeText: source?.LandingBannerForSupplierLargeText ?? '',
    landingBannerForSupplierSmallText: source?.LandingBannerForSupplierSmallText ?? '',
    landingMetaDescriptionContent: source?.LandingMetaDescriptionContent ?? '',
    landingSchemeColorName: source?.LandingSchemeColorName ?? '',
    landingUrl: source?.LandingUrl ?? '',
    landingYandexMetrikaCode: source?.LandingYandexMetrikaCode ?? 0,
    logoSrc: source?.LogoSrc ?? '',
    mainMenuCustomItems: (source?.MainMenuCustomItems ?? []).map((item) => adaptMenuCustomItemTemplateToUI(item)),
    maxNmz: source?.MaxNmz ?? 0,
    messageKind: adaptMessageKindAltEnumToUI(source?.MessageKind),
    monetizationMarketWithoutNmz: source?.MonetizationMarketWithoutNmz ?? false,
    newDealSignFlowForBft: source?.NewDealSignFlowForBft ?? [],
    ordersSideFilterStructure: adaptSideFilterStructureToUI(source?.OrdersSideFilterStructure),
    priceListsSideFilterStructure: adaptSideFilterStructureToUI(source?.PriceListsSideFilterStructure),
    regionalProductSigns: (source?.RegionalProductSigns ?? []).map((item) => adaptTenantRegionalProductSignSettingToUI(item)),
    requiredTradeDocumentTypes: (source?.RequiredTradeDocumentTypes ?? []).map((item) => adaptTradeDocumentTypeEnumToUI(item)),
    showBankingDetailsOnCreateApplicationForm: source?.ShowBankingDetailsOnCreateApplicationForm ?? false,
    showTradeCustomerInfo: source?.ShowTradeCustomerInfo ?? false,
    statisticsAndAnalyticsReportUrl: source?.StatisticsAndAnalyticsReportUrl ?? '',
    tenantFlowType: adaptTenantFlowTypeAltEnumToUI(source?.TenantFlowType),
    tenantHosts: source?.TenantHosts ?? [],
    zmoPersonalAccountUrl: source?.ZmoPersonalAccountUrl ?? '',
  };
}

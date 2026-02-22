import { ApiTenantSettingDto } from '../../../swagger/models/api-tenant-setting-dto';
import { TenantSetting } from '../../models/tenant-setting.interface';
import { businessOperatorIdEnumAdapter } from '../enums/business-operator-id-enum.adapter';
import { hideApplicationDataForCustomerModeEnumAdapter } from '../enums/hide-application-data-for-customer-mode-enum.adapter';
import { hideApplicationDataForParticipantModeEnumAdapter } from '../enums/hide-application-data-for-participant-mode-enum.adapter';
import { hideApplicationDataModeOpenPartEnumAdapter } from '../enums/hide-application-data-mode-open-part-enum.adapter';
import { menuCustomItemTemplateAdapter } from './menu-custom-item-template.adapter';
import { messageKindAltEnumAdapter } from '../enums/message-kind-alt-enum.adapter';
import { positionsImportExcelTemplateTypeEnumAdapter } from '../enums/positions-import-excel-template-type-enum.adapter';
import { sectionEnumAdapter } from '../enums/section-enum.adapter';
import { sideFilterStructureAdapter } from './side-filter-structure.adapter';
import { tenantFlowTypeAltEnumAdapter } from '../enums/tenant-flow-type-alt-enum.adapter';
import { tenantRegionalProductSignSettingAdapter } from './tenant-regional-product-sign-setting.adapter';
import { tradeDocumentTypeEnumAdapter } from '../enums/trade-document-type-enum.adapter';

export const tenantSettingAdapter = (source?: ApiTenantSettingDto | null): TenantSetting => {
  return {
    allowSendToMovingPro: source?.AllowSendToMovingPro,
    allowUserManagement: source?.AllowUserManagement,
    availableRegions: source?.AvailableRegions,
    bannerHtml: source?.BannerHtml,
    businessOperatorId: source?.BusinessOperatorId === null ? undefined : businessOperatorIdEnumAdapter(source?.BusinessOperatorId),
    canLinkNotTookPlaceTrade: source?.CanLinkNotTookPlaceTrade,
    canLinkNotTookPlaceTradeOnce: source?.CanLinkNotTookPlaceTradeOnce,
    commercialOfferFromOpenPartIsEnabled: source?.CommercialOfferFromOpenPartIsEnabled,
    commercialOfferOwnerGuid: source?.CommercialOfferOwnerGuid,
    customCss: source?.CustomCss,
    denyTradePriceRaise: source?.DenyTradePriceRaise,
    enableApplicationsDenyPriceRaise: source?.EnableApplicationsDenyPriceRaise,
    enableMonetizationMarket: source?.EnableMonetizationMarket,
    enableRaiseApplicationPriceMoreThanTradePrice: source?.EnableRaiseApplicationPriceMoreThanTradePrice,
    footerHtml: source?.FooterHtml,
    headerHtml: source?.HeaderHtml,
    headerTitle: source?.HeaderTitle,
    hideApplicationDataForCustomerMode: source?.HideApplicationDataForCustomerMode === null ? undefined : hideApplicationDataForCustomerModeEnumAdapter(source?.HideApplicationDataForCustomerMode),
    hideApplicationDataForParticipantMode: source?.HideApplicationDataForParticipantMode === null ? undefined : hideApplicationDataForParticipantModeEnumAdapter(source?.HideApplicationDataForParticipantMode),
    hideApplicationDataOpenPartMode: source?.HideApplicationDataOpenPartMode === null ? undefined : hideApplicationDataModeOpenPartEnumAdapter(source?.HideApplicationDataOpenPartMode),
    hidedSection: source?.HidedSection?.map((item) => sectionEnumAdapter(item)),
    id: source?.Id,
    immediateTradesDisable: source?.ImmediateTradesDisable,
    importExcelTemplateType: source?.ImportExcelTemplateType === null ? undefined : positionsImportExcelTemplateTypeEnumAdapter(source?.ImportExcelTemplateType),
    instructionFileGuid: source?.InstructionFileGuid,
    isCartEnable: source?.IsCartEnable,
    isChangeSingleSupplierTradeToPriceRequest: source?.IsChangeSingleSupplierTradeToPriceRequest,
    isClarificationRequestsEnabled: source?.IsClarificationRequestsEnabled,
    isDealAgreementEnabled: source?.IsDealAgreementEnabled,
    isDealsOutOfEtpEnabled: source?.IsDealsOutOfEtpEnabled,
    isGlobalMarket: source?.IsGlobalMarket,
    isImportOffersFromYMLEnabled: source?.IsImportOffersFromYMLEnabled,
    isImportPositionsFromExcelEnabled: source?.IsImportPositionsFromExcelEnabled,
    isLandingEnable: source?.IsLandingEnable,
    isLandingSwitchEnabled: source?.IsLandingSwitchEnabled,
    isManufacturerEnabled: source?.IsManufacturerEnabled,
    isMyPriceListsEnabled: source?.IsMyPriceListsEnabled,
    isNeedTradeApprove: source?.IsNeedTradeApprove,
    isOfferContentComplaintsEnabled: source?.IsOfferContentComplaintsEnabled,
    isOfferModerationEnable: source?.IsOfferModerationEnable,
    isPassportAuthEnable: source?.IsPassportAuthEnable,
    isPriceCorridorEnabled: source?.IsPriceCorridorEnabled,
    isProposalDocsRequired: source?.IsProposalDocsRequired,
    isSalesTechAuthEnable: source?.IsSalesTechAuthEnable,
    isStarOkServiceEnabled: source?.IsStarOkServiceEnabled,
    isStoriesEnabled: source?.IsStoriesEnabled,
    isTableEditingModeEnabled: source?.IsTableEditingModeEnabled,
    isTelegramEnabled: source?.IsTelegramEnabled,
    isZeroSingleSupplierTradeEnabled: source?.IsZeroSingleSupplierTradeEnabled,
    landingBannerForCustomerLargeText: source?.LandingBannerForCustomerLargeText,
    landingBannerForCustomerSmallText: source?.LandingBannerForCustomerSmallText,
    landingBannerForSupplierLargeText: source?.LandingBannerForSupplierLargeText,
    landingBannerForSupplierSmallText: source?.LandingBannerForSupplierSmallText,
    landingMetaDescriptionContent: source?.LandingMetaDescriptionContent,
    landingSchemeColorName: source?.LandingSchemeColorName,
    landingUrl: source?.LandingUrl,
    landingYandexMetrikaCode: source?.LandingYandexMetrikaCode,
    logoSrc: source?.LogoSrc,
    mainMenuCustomItems: source?.MainMenuCustomItems?.map((item) => menuCustomItemTemplateAdapter(item)),
    maxNmz: source?.MaxNmz,
    messageKind: source?.MessageKind === null ? undefined : messageKindAltEnumAdapter(source?.MessageKind),
    monetizationMarketWithoutNmz: source?.MonetizationMarketWithoutNmz,
    newDealSignFlowForBft: source?.NewDealSignFlowForBft,
    ordersSideFilterStructure: source?.OrdersSideFilterStructure === null ? undefined : sideFilterStructureAdapter(source?.OrdersSideFilterStructure),
    priceListsSideFilterStructure: source?.PriceListsSideFilterStructure === null ? undefined : sideFilterStructureAdapter(source?.PriceListsSideFilterStructure),
    regionalProductSigns: source?.RegionalProductSigns?.map((item) => tenantRegionalProductSignSettingAdapter(item)),
    requiredTradeDocumentTypes: source?.RequiredTradeDocumentTypes?.map((item) => tradeDocumentTypeEnumAdapter(item)),
    showBankingDetailsOnCreateApplicationForm: source?.ShowBankingDetailsOnCreateApplicationForm,
    showTradeCustomerInfo: source?.ShowTradeCustomerInfo,
    statisticsAndAnalyticsReportUrl: source?.StatisticsAndAnalyticsReportUrl,
    tenantFlowType: source?.TenantFlowType === null ? undefined : tenantFlowTypeAltEnumAdapter(source?.TenantFlowType),
    tenantHosts: source?.TenantHosts,
    zmoPersonalAccountUrl: source?.ZmoPersonalAccountUrl,
  };
}

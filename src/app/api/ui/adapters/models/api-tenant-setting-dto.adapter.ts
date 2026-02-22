import { TenantSetting } from '../../models/tenant-setting.interface';
import { ApiTenantSettingDto } from '../../../swagger/models/api-tenant-setting-dto';
import { apiBusinessOperatorIdEnumAdapter } from '../enums/api-business-operator-id-enum.adapter';
import { apiHideApplicationDataForCustomerModeEnumAdapter } from '../enums/api-hide-application-data-for-customer-mode-enum.adapter';
import { apiHideApplicationDataForParticipantModeEnumAdapter } from '../enums/api-hide-application-data-for-participant-mode-enum.adapter';
import { apiHideApplicationDataModeOpenPartEnumAdapter } from '../enums/api-hide-application-data-mode-open-part-enum.adapter';
import { apiMenuCustomItemTemplateDtoAdapter } from './api-menu-custom-item-template-dto.adapter';
import { apiMessageKindAltEnumAdapter } from '../enums/api-message-kind.adapter';
import { apiPositionsImportExcelTemplateTypeEnumAdapter } from '../enums/api-positions-import-excel-template-type-enum.adapter';
import { apiSectionEnumAdapter } from '../enums/api-section-enum.adapter';
import { apiSideFilterStructureDtoAdapter } from './api-side-filter-structure-dto.adapter';
import { apiTenantFlowTypeAltEnumAdapter } from '../enums/api-tenant-flow-type.adapter';
import { apiTenantRegionalProductSignSettingDtoAdapter } from './api-tenant-regional-product-sign-setting-dto.adapter';
import { apiTradeDocumentTypeEnumAdapter } from '../enums/api-trade-document-type-enum.adapter';

export const apiTenantSettingDtoAdapter = (source?: TenantSetting | null): ApiTenantSettingDto => {
  return {
    AllowSendToMovingPro: source?.allowSendToMovingPro,
    AllowUserManagement: source?.allowUserManagement,
    AvailableRegions: source?.availableRegions,
    BannerHtml: source?.bannerHtml,
    BusinessOperatorId: source?.businessOperatorId === null ? undefined : apiBusinessOperatorIdEnumAdapter(source?.businessOperatorId),
    CanLinkNotTookPlaceTrade: source?.canLinkNotTookPlaceTrade,
    CanLinkNotTookPlaceTradeOnce: source?.canLinkNotTookPlaceTradeOnce,
    CommercialOfferFromOpenPartIsEnabled: source?.commercialOfferFromOpenPartIsEnabled,
    CommercialOfferOwnerGuid: source?.commercialOfferOwnerGuid,
    CustomCss: source?.customCss,
    DenyTradePriceRaise: source?.denyTradePriceRaise,
    EnableApplicationsDenyPriceRaise: source?.enableApplicationsDenyPriceRaise,
    EnableMonetizationMarket: source?.enableMonetizationMarket,
    EnableRaiseApplicationPriceMoreThanTradePrice: source?.enableRaiseApplicationPriceMoreThanTradePrice,
    FooterHtml: source?.footerHtml,
    HeaderHtml: source?.headerHtml,
    HeaderTitle: source?.headerTitle,
    HideApplicationDataForCustomerMode: source?.hideApplicationDataForCustomerMode === null ? undefined : apiHideApplicationDataForCustomerModeEnumAdapter(source?.hideApplicationDataForCustomerMode),
    HideApplicationDataForParticipantMode: source?.hideApplicationDataForParticipantMode === null ? undefined : apiHideApplicationDataForParticipantModeEnumAdapter(source?.hideApplicationDataForParticipantMode),
    HideApplicationDataOpenPartMode: source?.hideApplicationDataOpenPartMode === null ? undefined : apiHideApplicationDataModeOpenPartEnumAdapter(source?.hideApplicationDataOpenPartMode),
    HidedSection: source?.hidedSection?.map((item) => apiSectionEnumAdapter(item)),
    Id: source?.id,
    ImmediateTradesDisable: source?.immediateTradesDisable,
    ImportExcelTemplateType: source?.importExcelTemplateType === null ? undefined : apiPositionsImportExcelTemplateTypeEnumAdapter(source?.importExcelTemplateType),
    InstructionFileGuid: source?.instructionFileGuid,
    IsCartEnable: source?.isCartEnable,
    IsChangeSingleSupplierTradeToPriceRequest: source?.isChangeSingleSupplierTradeToPriceRequest,
    IsClarificationRequestsEnabled: source?.isClarificationRequestsEnabled,
    IsDealAgreementEnabled: source?.isDealAgreementEnabled,
    IsDealsOutOfEtpEnabled: source?.isDealsOutOfEtpEnabled,
    IsGlobalMarket: source?.isGlobalMarket,
    IsImportOffersFromYMLEnabled: source?.isImportOffersFromYMLEnabled,
    IsImportPositionsFromExcelEnabled: source?.isImportPositionsFromExcelEnabled,
    IsLandingEnable: source?.isLandingEnable,
    IsLandingSwitchEnabled: source?.isLandingSwitchEnabled,
    IsManufacturerEnabled: source?.isManufacturerEnabled,
    IsMyPriceListsEnabled: source?.isMyPriceListsEnabled,
    IsNeedTradeApprove: source?.isNeedTradeApprove,
    IsOfferContentComplaintsEnabled: source?.isOfferContentComplaintsEnabled,
    IsOfferModerationEnable: source?.isOfferModerationEnable,
    IsPassportAuthEnable: source?.isPassportAuthEnable,
    IsPriceCorridorEnabled: source?.isPriceCorridorEnabled,
    IsProposalDocsRequired: source?.isProposalDocsRequired,
    IsSalesTechAuthEnable: source?.isSalesTechAuthEnable,
    IsStarOkServiceEnabled: source?.isStarOkServiceEnabled,
    IsStoriesEnabled: source?.isStoriesEnabled,
    IsTableEditingModeEnabled: source?.isTableEditingModeEnabled,
    IsTelegramEnabled: source?.isTelegramEnabled,
    IsZeroSingleSupplierTradeEnabled: source?.isZeroSingleSupplierTradeEnabled,
    LandingBannerForCustomerLargeText: source?.landingBannerForCustomerLargeText,
    LandingBannerForCustomerSmallText: source?.landingBannerForCustomerSmallText,
    LandingBannerForSupplierLargeText: source?.landingBannerForSupplierLargeText,
    LandingBannerForSupplierSmallText: source?.landingBannerForSupplierSmallText,
    LandingMetaDescriptionContent: source?.landingMetaDescriptionContent,
    LandingSchemeColorName: source?.landingSchemeColorName,
    LandingUrl: source?.landingUrl,
    LandingYandexMetrikaCode: source?.landingYandexMetrikaCode,
    LogoSrc: source?.logoSrc,
    MainMenuCustomItems: source?.mainMenuCustomItems?.map((item) => apiMenuCustomItemTemplateDtoAdapter(item)),
    MaxNmz: source?.maxNmz,
    MessageKind: source?.messageKind === null ? undefined : apiMessageKindAltEnumAdapter(source?.messageKind),
    MonetizationMarketWithoutNmz: source?.monetizationMarketWithoutNmz,
    NewDealSignFlowForBft: source?.newDealSignFlowForBft,
    OrdersSideFilterStructure: source?.ordersSideFilterStructure === null ? undefined : apiSideFilterStructureDtoAdapter(source?.ordersSideFilterStructure),
    PriceListsSideFilterStructure: source?.priceListsSideFilterStructure === null ? undefined : apiSideFilterStructureDtoAdapter(source?.priceListsSideFilterStructure),
    RegionalProductSigns: source?.regionalProductSigns?.map((item) => apiTenantRegionalProductSignSettingDtoAdapter(item)),
    RequiredTradeDocumentTypes: source?.requiredTradeDocumentTypes?.map((item) => apiTradeDocumentTypeEnumAdapter(item)),
    ShowBankingDetailsOnCreateApplicationForm: source?.showBankingDetailsOnCreateApplicationForm,
    ShowTradeCustomerInfo: source?.showTradeCustomerInfo,
    StatisticsAndAnalyticsReportUrl: source?.statisticsAndAnalyticsReportUrl,
    TenantFlowType: source?.tenantFlowType === null ? undefined : apiTenantFlowTypeAltEnumAdapter(source?.tenantFlowType),
    TenantHosts: source?.tenantHosts,
    ZmoPersonalAccountUrl: source?.zmoPersonalAccountUrl,
  };
}

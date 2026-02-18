import { TenantSetting } from '../../models/tenant-setting.interface';
import { ApiTenantSettingDto } from '../../../swagger/models/api-tenant-setting-dto';
import { adaptApiBusinessOperatorIdEnum } from './api-business-operator-id-enum.adapter';
import { adaptApiHideApplicationDataForCustomerModeEnum } from './api-hide-application-data-for-customer-mode-enum.adapter';
import { adaptApiHideApplicationDataForParticipantModeEnum } from './api-hide-application-data-for-participant-mode-enum.adapter';
import { adaptApiHideApplicationDataModeOpenPartEnum } from './api-hide-application-data-mode-open-part-enum.adapter';
import { adaptApiMenuCustomItemTemplateDto } from './api-menu-custom-item-template-dto.adapter';
import { adaptApiMessageKindAltEnum } from './api-message-kind.adapter';
import { adaptApiPositionsImportExcelTemplateTypeEnum } from './api-positions-import-excel-template-type-enum.adapter';
import { adaptApiSectionEnum } from './api-section-enum.adapter';
import { adaptApiSideFilterStructureDto } from './api-side-filter-structure-dto.adapter';
import { adaptApiTenantFlowTypeAltEnum } from './api-tenant-flow-type.adapter';
import { adaptApiTenantRegionalProductSignSettingDto } from './api-tenant-regional-product-sign-setting-dto.adapter';
import { adaptApiTradeDocumentTypeEnum } from './api-trade-document-type-enum.adapter';

export function adaptApiTenantSettingDto(source?: TenantSetting | null): ApiTenantSettingDto {
  return {
    AllowSendToMovingPro: source?.allowSendToMovingPro,
    AllowUserManagement: source?.allowUserManagement,
    AvailableRegions: source?.availableRegions ?? [],
    BannerHtml: source?.bannerHtml,
    BusinessOperatorId: adaptApiBusinessOperatorIdEnum(source?.businessOperatorId),
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
    HideApplicationDataForCustomerMode: adaptApiHideApplicationDataForCustomerModeEnum(source?.hideApplicationDataForCustomerMode),
    HideApplicationDataForParticipantMode: adaptApiHideApplicationDataForParticipantModeEnum(source?.hideApplicationDataForParticipantMode),
    HideApplicationDataOpenPartMode: adaptApiHideApplicationDataModeOpenPartEnum(source?.hideApplicationDataOpenPartMode),
    HidedSection: (source?.hidedSection ?? []).map((item) => adaptApiSectionEnum(item)),
    Id: source?.id,
    ImmediateTradesDisable: source?.immediateTradesDisable,
    ImportExcelTemplateType: adaptApiPositionsImportExcelTemplateTypeEnum(source?.importExcelTemplateType),
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
    MainMenuCustomItems: (source?.mainMenuCustomItems ?? []).map((item) => adaptApiMenuCustomItemTemplateDto(item)),
    MaxNmz: source?.maxNmz,
    MessageKind: adaptApiMessageKindAltEnum(source?.messageKind),
    MonetizationMarketWithoutNmz: source?.monetizationMarketWithoutNmz,
    NewDealSignFlowForBft: source?.newDealSignFlowForBft ?? [],
    OrdersSideFilterStructure: adaptApiSideFilterStructureDto(source?.ordersSideFilterStructure),
    PriceListsSideFilterStructure: adaptApiSideFilterStructureDto(source?.priceListsSideFilterStructure),
    RegionalProductSigns: (source?.regionalProductSigns ?? []).map((item) => adaptApiTenantRegionalProductSignSettingDto(item)),
    RequiredTradeDocumentTypes: (source?.requiredTradeDocumentTypes ?? []).map((item) => adaptApiTradeDocumentTypeEnum(item)),
    ShowBankingDetailsOnCreateApplicationForm: source?.showBankingDetailsOnCreateApplicationForm,
    ShowTradeCustomerInfo: source?.showTradeCustomerInfo,
    StatisticsAndAnalyticsReportUrl: source?.statisticsAndAnalyticsReportUrl,
    TenantFlowType: adaptApiTenantFlowTypeAltEnum(source?.tenantFlowType),
    TenantHosts: source?.tenantHosts ?? [],
    ZmoPersonalAccountUrl: source?.zmoPersonalAccountUrl,
  };
}

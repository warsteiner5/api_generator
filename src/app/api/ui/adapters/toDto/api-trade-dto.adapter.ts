import { Trade } from '../../models/trade.interface';
import { ApiTradeDto } from '../../../swagger/models/api-trade-dto';
import { adaptApiAdditionalRequirementDto } from './api-additional-requirement-dto.adapter';
import { adaptApiCharacteristicDto } from './api-characteristic-dto.adapter';
import { adaptApiCustomerContactInfoAltDto } from './api-customer-contact-info.adapter';
import { adaptApiDictionaryItemAltDto } from './api-dictionary-item.adapter';
import { adaptApiExternalFieldValueAltDto } from './api-external-field-value.adapter';
import { adaptApiFederalLawLimitAltEnum } from './api-federal-law-limit.adapter';
import { adaptApiProductDto } from './api-product-dto.adapter';
import { adaptApiSourcePlatformEnum } from './api-source-platform-enum.adapter';
import { adaptApiTradeBiddingTypeEnum } from './api-trade-bidding-type-enum.adapter';
import { adaptApiTradeBusinessFlowEnum } from './api-trade-business-flow-enum.adapter';
import { adaptApiTradeDocumentDto } from './api-trade-document-dto.adapter';
import { adaptApiTradeStateEnum } from './api-trade-state-enum.adapter';
import { adaptApiZmoFinanceSourceEnum } from './api-zmo-finance-source-enum.adapter';

export function adaptApiTradeDto(source?: Trade | null): ApiTradeDto {
  return {
    AdditionalInfo: source?.additionalInfo,
    AdditionalRequirements: (source?.additionalRequirements ?? []).map((item) => adaptApiAdditionalRequirementDto(item)),
    AlwaysSendInvitationsForVendors: source?.alwaysSendInvitationsForVendors,
    AutoInvitationVendors: source?.autoInvitationVendors,
    BusinessFlowType: adaptApiTradeBusinessFlowEnum(source?.businessFlowType),
    CharacteristicFileGuid: source?.characteristicFileGuid,
    CharacteristicFromUi: source?.characteristicFromUi,
    Characteristics: (source?.characteristics ?? []).map((item) => adaptApiCharacteristicDto(item)),
    ClientTimeZoneMinutesOffset: source?.clientTimeZoneMinutesOffset,
    ConditionsOfPayment: source?.conditionsOfPayment,
    ContactInfo: adaptApiCustomerContactInfoAltDto(source?.contactInfo),
    CustomerId: source?.customerId,
    CustomerOrgFullName: source?.customerOrgFullName,
    CustomerOrganizationId: source?.customerOrganizationId,
    CustomerWorkGroupNames: source?.customerWorkGroupNames ?? [],
    DealDocument: adaptApiTradeDocumentDto(source?.dealDocument),
    DealExecutionDate: source?.dealExecutionDate,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    EnableKtruSpecifications: source?.enableKtruSpecifications,
    EnablePositionCharacteristics: source?.enablePositionCharacteristics,
    ExternalContractTemplateId: source?.externalContractTemplateId,
    ExternalFieldValues: (source?.externalFieldValues ?? []).map((item) => adaptApiExternalFieldValueAltDto(item)),
    ExternalId: source?.externalId,
    ExternalSourcePlatformNumber: source?.externalSourcePlatformNumber,
    ExternalSystemId: source?.externalSystemId,
    FederalLawLimit: adaptApiFederalLawLimitAltEnum(source?.federalLawLimit),
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    Id: source?.id,
    InitialPrice: source?.initialPrice,
    InitialPriceWithVat: source?.initialPriceWithVat,
    InitialPriceWithoutVat: source?.initialPriceWithoutVat,
    InvitedOrganizationIds: source?.invitedOrganizationIds ?? [],
    IsAutoCompleteDeal: source?.isAutoCompleteDeal,
    IsBasedOnPublicOffer: source?.isBasedOnPublicOffer,
    IsContractInElectronicForm: source?.isContractInElectronicForm,
    IsImmediate: source?.isImmediate,
    IsInitialPriceDefined: source?.isInitialPriceDefined,
    IsLotPriceWithVat: source?.isLotPriceWithVat,
    IsManualEnterPriceForEachProduct: source?.isManualEnterPriceForEachProduct,
    IsOnlySmp: source?.isOnlySmp,
    IsParentContractNumberNotSpecified: source?.isParentContractNumberNotSpecified,
    IsRussianPurchaseObjectHasAdvantage: source?.isRussianPurchaseObjectHasAdvantage,
    IsUnitBidding: source?.isUnitBidding,
    KeepGuaranteeForAllParticipants: source?.keepGuaranteeForAllParticipants,
    KeepGuaranteeForParticipantsCount: source?.keepGuaranteeForParticipantsCount,
    KladrRegionCode: source?.kladrRegionCode,
    KladrRegionCodes: (source?.kladrRegionCodes ?? []).map((item) => adaptApiDictionaryItemAltDto(item)),
    LastModificationDate: source?.lastModificationDate,
    LotItemsSumPrice: source?.lotItemsSumPrice,
    MaxDealPrice: source?.maxDealPrice,
    MinFillingApplicationEndDateForImmediate: source?.minFillingApplicationEndDateForImmediate,
    OrganizerId: source?.organizerId,
    ParentContractNumber: source?.parentContractNumber,
    PlanNumber: source?.planNumber,
    PlanPositionNumber: source?.planPositionNumber,
    PlanedDealSignDate: source?.planedDealSignDate,
    Products: (source?.products ?? []).map((item) => adaptApiProductDto(item)),
    RegulationDocumentUrl: source?.regulationDocumentUrl,
    ResultsDeliveryType: source?.resultsDeliveryType,
    RowVersion: source?.rowVersion,
    SourcePlatform: adaptApiSourcePlatformEnum(source?.sourcePlatform),
    SupplierWithSmallBusinessRequirements: source?.supplierWithSmallBusinessRequirements,
    SupplierWithUniversalRequirements: source?.supplierWithUniversalRequirements,
    TradeBiddingType: adaptApiTradeBiddingTypeEnum(source?.tradeBiddingType),
    TradeDocuments: (source?.tradeDocuments ?? []).map((item) => adaptApiTradeDocumentDto(item)),
    TradeFiles: (source?.tradeFiles ?? []).map((item) => adaptApiTradeDocumentDto(item)),
    TradeIdentificationCode: source?.tradeIdentificationCode,
    TradeName: source?.tradeName,
    TradeState: adaptApiTradeStateEnum(source?.tradeState),
    ZmoFinanceSource: adaptApiZmoFinanceSourceEnum(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}

import { Trade } from '../../models/trade.interface';
import { ApiTradeDto } from '../../../swagger/models/api-trade-dto';
import { apiAdditionalRequirementDtoAdapter } from './api-additional-requirement-dto.adapter';
import { apiCharacteristicDtoAdapter } from './api-characteristic-dto.adapter';
import { apiCustomerContactInfoAltDtoAdapter } from './api-customer-contact-info.adapter';
import { apiDictionaryItemAltDtoAdapter } from './api-dictionary-item.adapter';
import { apiExternalFieldValueAltDtoAdapter } from './api-external-field-value.adapter';
import { apiFederalLawLimitAltEnumAdapter } from '../enums/api-federal-law-limit.adapter';
import { apiProductDtoAdapter } from './api-product-dto.adapter';
import { apiSourcePlatformEnumAdapter } from '../enums/api-source-platform-enum.adapter';
import { apiTradeBiddingTypeEnumAdapter } from '../enums/api-trade-bidding-type-enum.adapter';
import { apiTradeBusinessFlowEnumAdapter } from '../enums/api-trade-business-flow-enum.adapter';
import { apiTradeDocumentDtoAdapter } from './api-trade-document-dto.adapter';
import { apiTradeStateEnumAdapter } from '../enums/api-trade-state-enum.adapter';
import { apiZmoFinanceSourceEnumAdapter } from '../enums/api-zmo-finance-source-enum.adapter';

export const apiTradeDtoAdapter = (source?: Trade | null): ApiTradeDto => {
  return {
    AdditionalInfo: source?.additionalInfo,
    AdditionalRequirements: source?.additionalRequirements?.map((item) => apiAdditionalRequirementDtoAdapter(item)),
    AlwaysSendInvitationsForVendors: source?.alwaysSendInvitationsForVendors,
    AutoInvitationVendors: source?.autoInvitationVendors,
    BusinessFlowType: source?.businessFlowType === null ? undefined : apiTradeBusinessFlowEnumAdapter(source?.businessFlowType),
    CharacteristicFileGuid: source?.characteristicFileGuid,
    CharacteristicFromUi: source?.characteristicFromUi,
    Characteristics: source?.characteristics?.map((item) => apiCharacteristicDtoAdapter(item)),
    ClientTimeZoneMinutesOffset: source?.clientTimeZoneMinutesOffset,
    ConditionsOfPayment: source?.conditionsOfPayment,
    ContactInfo: source?.contactInfo === null ? undefined : apiCustomerContactInfoAltDtoAdapter(source?.contactInfo),
    CustomerId: source?.customerId,
    CustomerOrgFullName: source?.customerOrgFullName,
    CustomerOrganizationId: source?.customerOrganizationId,
    CustomerWorkGroupNames: source?.customerWorkGroupNames,
    DealDocument: source?.dealDocument === null ? undefined : apiTradeDocumentDtoAdapter(source?.dealDocument),
    DealExecutionDate: source?.dealExecutionDate,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    EnableKtruSpecifications: source?.enableKtruSpecifications,
    EnablePositionCharacteristics: source?.enablePositionCharacteristics,
    ExternalContractTemplateId: source?.externalContractTemplateId,
    ExternalFieldValues: source?.externalFieldValues?.map((item) => apiExternalFieldValueAltDtoAdapter(item)),
    ExternalId: source?.externalId,
    ExternalSourcePlatformNumber: source?.externalSourcePlatformNumber,
    ExternalSystemId: source?.externalSystemId,
    FederalLawLimit: source?.federalLawLimit === null ? undefined : apiFederalLawLimitAltEnumAdapter(source?.federalLawLimit),
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    Id: source?.id,
    InitialPrice: source?.initialPrice,
    InitialPriceWithVat: source?.initialPriceWithVat,
    InitialPriceWithoutVat: source?.initialPriceWithoutVat,
    InvitedOrganizationIds: source?.invitedOrganizationIds,
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
    KladrRegionCodes: source?.kladrRegionCodes?.map((item) => apiDictionaryItemAltDtoAdapter(item)),
    LastModificationDate: source?.lastModificationDate,
    LotItemsSumPrice: source?.lotItemsSumPrice,
    MaxDealPrice: source?.maxDealPrice,
    MinFillingApplicationEndDateForImmediate: source?.minFillingApplicationEndDateForImmediate,
    OrganizerId: source?.organizerId,
    ParentContractNumber: source?.parentContractNumber,
    PlanNumber: source?.planNumber,
    PlanPositionNumber: source?.planPositionNumber,
    PlanedDealSignDate: source?.planedDealSignDate,
    Products: source?.products?.map((item) => apiProductDtoAdapter(item)),
    RegulationDocumentUrl: source?.regulationDocumentUrl,
    ResultsDeliveryType: source?.resultsDeliveryType,
    RowVersion: source?.rowVersion,
    SourcePlatform: source?.sourcePlatform === null ? undefined : apiSourcePlatformEnumAdapter(source?.sourcePlatform),
    SupplierWithSmallBusinessRequirements: source?.supplierWithSmallBusinessRequirements,
    SupplierWithUniversalRequirements: source?.supplierWithUniversalRequirements,
    TradeBiddingType: source?.tradeBiddingType === null ? undefined : apiTradeBiddingTypeEnumAdapter(source?.tradeBiddingType),
    TradeDocuments: source?.tradeDocuments?.map((item) => apiTradeDocumentDtoAdapter(item)),
    TradeFiles: source?.tradeFiles?.map((item) => apiTradeDocumentDtoAdapter(item)),
    TradeIdentificationCode: source?.tradeIdentificationCode,
    TradeName: source?.tradeName,
    TradeState: source?.tradeState === null ? undefined : apiTradeStateEnumAdapter(source?.tradeState),
    ZmoFinanceSource: source?.zmoFinanceSource === null ? undefined : apiZmoFinanceSourceEnumAdapter(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}

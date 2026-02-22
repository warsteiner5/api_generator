import { ApiTradeDto } from '../../../swagger/models/api-trade-dto';
import { Trade } from '../../models/trade.interface';
import { additionalRequirementAdapter } from './additional-requirement.adapter';
import { characteristicAdapter } from './characteristic.adapter';
import { customerContactInfoAltAdapter } from './customer-contact-info-alt.adapter';
import { dictionaryItemAltAdapter } from './dictionary-item-alt.adapter';
import { externalFieldValueAltAdapter } from './external-field-value-alt.adapter';
import { federalLawLimitAltEnumAdapter } from '../enums/federal-law-limit-alt-enum.adapter';
import { productAdapter } from './product.adapter';
import { sourcePlatformEnumAdapter } from '../enums/source-platform-enum.adapter';
import { tradeBiddingTypeEnumAdapter } from '../enums/trade-bidding-type-enum.adapter';
import { tradeBusinessFlowEnumAdapter } from '../enums/trade-business-flow-enum.adapter';
import { tradeDocumentAdapter } from './trade-document.adapter';
import { tradeStateEnumAdapter } from '../enums/trade-state-enum.adapter';
import { zmoFinanceSourceEnumAdapter } from '../enums/zmo-finance-source-enum.adapter';

export const tradeAdapter = (source?: ApiTradeDto | null): Trade => {
  return {
    additionalInfo: source?.AdditionalInfo,
    additionalRequirements: source?.AdditionalRequirements?.map((item) => additionalRequirementAdapter(item)),
    alwaysSendInvitationsForVendors: source?.AlwaysSendInvitationsForVendors,
    autoInvitationVendors: source?.AutoInvitationVendors,
    businessFlowType: source?.BusinessFlowType === null ? undefined : tradeBusinessFlowEnumAdapter(source?.BusinessFlowType),
    characteristicFileGuid: source?.CharacteristicFileGuid,
    characteristicFromUi: source?.CharacteristicFromUi,
    characteristics: source?.Characteristics?.map((item) => characteristicAdapter(item)),
    clientTimeZoneMinutesOffset: source?.ClientTimeZoneMinutesOffset,
    conditionsOfPayment: source?.ConditionsOfPayment,
    contactInfo: source?.ContactInfo === null ? undefined : customerContactInfoAltAdapter(source?.ContactInfo),
    customerId: source?.CustomerId,
    customerOrgFullName: source?.CustomerOrgFullName,
    customerOrganizationId: source?.CustomerOrganizationId,
    customerWorkGroupNames: source?.CustomerWorkGroupNames,
    dealDocument: source?.DealDocument === null ? undefined : tradeDocumentAdapter(source?.DealDocument),
    dealExecutionDate: source?.DealExecutionDate,
    deliveryPlace: source?.DeliveryPlace,
    deliveryTerms: source?.DeliveryTerms,
    description: source?.Description,
    enableKtruSpecifications: source?.EnableKtruSpecifications,
    enablePositionCharacteristics: source?.EnablePositionCharacteristics,
    externalContractTemplateId: source?.ExternalContractTemplateId,
    externalFieldValues: source?.ExternalFieldValues?.map((item) => externalFieldValueAltAdapter(item)),
    externalId: source?.ExternalId,
    externalSourcePlatformNumber: source?.ExternalSourcePlatformNumber,
    externalSystemId: source?.ExternalSystemId,
    federalLawLimit: source?.FederalLawLimit === null ? undefined : federalLawLimitAltEnumAdapter(source?.FederalLawLimit),
    fillingApplicationEndDate: source?.FillingApplicationEndDate,
    id: source?.Id,
    initialPrice: source?.InitialPrice,
    initialPriceWithVat: source?.InitialPriceWithVat,
    initialPriceWithoutVat: source?.InitialPriceWithoutVat,
    invitedOrganizationIds: source?.InvitedOrganizationIds,
    isAutoCompleteDeal: source?.IsAutoCompleteDeal,
    isBasedOnPublicOffer: source?.IsBasedOnPublicOffer,
    isContractInElectronicForm: source?.IsContractInElectronicForm,
    isImmediate: source?.IsImmediate,
    isInitialPriceDefined: source?.IsInitialPriceDefined,
    isLotPriceWithVat: source?.IsLotPriceWithVat,
    isManualEnterPriceForEachProduct: source?.IsManualEnterPriceForEachProduct,
    isOnlySmp: source?.IsOnlySmp,
    isParentContractNumberNotSpecified: source?.IsParentContractNumberNotSpecified,
    isRussianPurchaseObjectHasAdvantage: source?.IsRussianPurchaseObjectHasAdvantage,
    isUnitBidding: source?.IsUnitBidding,
    keepGuaranteeForAllParticipants: source?.KeepGuaranteeForAllParticipants,
    keepGuaranteeForParticipantsCount: source?.KeepGuaranteeForParticipantsCount,
    kladrRegionCode: source?.KladrRegionCode,
    kladrRegionCodes: source?.KladrRegionCodes?.map((item) => dictionaryItemAltAdapter(item)),
    lastModificationDate: source?.LastModificationDate,
    lotItemsSumPrice: source?.LotItemsSumPrice,
    maxDealPrice: source?.MaxDealPrice,
    minFillingApplicationEndDateForImmediate: source?.MinFillingApplicationEndDateForImmediate,
    organizerId: source?.OrganizerId,
    parentContractNumber: source?.ParentContractNumber,
    planNumber: source?.PlanNumber,
    planPositionNumber: source?.PlanPositionNumber,
    planedDealSignDate: source?.PlanedDealSignDate,
    products: source?.Products?.map((item) => productAdapter(item)),
    regulationDocumentUrl: source?.RegulationDocumentUrl,
    resultsDeliveryType: source?.ResultsDeliveryType,
    rowVersion: source?.RowVersion,
    sourcePlatform: source?.SourcePlatform === null ? undefined : sourcePlatformEnumAdapter(source?.SourcePlatform),
    supplierWithSmallBusinessRequirements: source?.SupplierWithSmallBusinessRequirements,
    supplierWithUniversalRequirements: source?.SupplierWithUniversalRequirements,
    tradeBiddingType: source?.TradeBiddingType === null ? undefined : tradeBiddingTypeEnumAdapter(source?.TradeBiddingType),
    tradeDocuments: source?.TradeDocuments?.map((item) => tradeDocumentAdapter(item)),
    tradeFiles: source?.TradeFiles?.map((item) => tradeDocumentAdapter(item)),
    tradeIdentificationCode: source?.TradeIdentificationCode,
    tradeName: source?.TradeName,
    tradeState: source?.TradeState === null ? undefined : tradeStateEnumAdapter(source?.TradeState),
    zmoFinanceSource: source?.ZmoFinanceSource === null ? undefined : zmoFinanceSourceEnumAdapter(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType,
  };
}

import { ApiTradeDto } from '../../../swagger/models/api-trade-dto';
import { Trade } from '../../models/trade.interface';
import { adaptAdditionalRequirementToUI } from './additional-requirement.adapter';
import { adaptCharacteristicToUI } from './characteristic.adapter';
import { adaptCustomerContactInfoAltToUI } from './customer-contact-info-alt.adapter';
import { adaptDictionaryItemAltToUI } from './dictionary-item-alt.adapter';
import { adaptExternalFieldValueAltToUI } from './external-field-value-alt.adapter';
import { adaptFederalLawLimitAltEnumToUI } from './federal-law-limit-alt-enum.adapter';
import { adaptProductToUI } from './product.adapter';
import { adaptSourcePlatformEnumToUI } from './source-platform-enum.adapter';
import { adaptTradeBiddingTypeEnumToUI } from './trade-bidding-type-enum.adapter';
import { adaptTradeBusinessFlowEnumToUI } from './trade-business-flow-enum.adapter';
import { adaptTradeDocumentToUI } from './trade-document.adapter';
import { adaptTradeStateEnumToUI } from './trade-state-enum.adapter';
import { adaptZmoFinanceSourceEnumToUI } from './zmo-finance-source-enum.adapter';

export function adaptTradeToUI(source?: ApiTradeDto | null): Trade {
  return {
    additionalInfo: source?.AdditionalInfo ?? '',
    additionalRequirements: (source?.AdditionalRequirements ?? []).map((item) => adaptAdditionalRequirementToUI(item)),
    alwaysSendInvitationsForVendors: source?.AlwaysSendInvitationsForVendors ?? false,
    autoInvitationVendors: source?.AutoInvitationVendors ?? false,
    businessFlowType: adaptTradeBusinessFlowEnumToUI(source?.BusinessFlowType),
    characteristicFileGuid: source?.CharacteristicFileGuid ?? '',
    characteristicFromUi: source?.CharacteristicFromUi ?? false,
    characteristics: (source?.Characteristics ?? []).map((item) => adaptCharacteristicToUI(item)),
    clientTimeZoneMinutesOffset: source?.ClientTimeZoneMinutesOffset ?? 0,
    conditionsOfPayment: source?.ConditionsOfPayment ?? '',
    contactInfo: adaptCustomerContactInfoAltToUI(source?.ContactInfo),
    customerId: source?.CustomerId ?? 0,
    customerOrgFullName: source?.CustomerOrgFullName ?? '',
    customerOrganizationId: source?.CustomerOrganizationId ?? 0,
    customerWorkGroupNames: source?.CustomerWorkGroupNames ?? [],
    dealDocument: adaptTradeDocumentToUI(source?.DealDocument),
    dealExecutionDate: source?.DealExecutionDate ?? '',
    deliveryPlace: source?.DeliveryPlace ?? '',
    deliveryTerms: source?.DeliveryTerms ?? '',
    description: source?.Description ?? '',
    enableKtruSpecifications: source?.EnableKtruSpecifications ?? false,
    enablePositionCharacteristics: source?.EnablePositionCharacteristics ?? false,
    externalContractTemplateId: source?.ExternalContractTemplateId ?? 0,
    externalFieldValues: (source?.ExternalFieldValues ?? []).map((item) => adaptExternalFieldValueAltToUI(item)),
    externalId: source?.ExternalId ?? '',
    externalSourcePlatformNumber: source?.ExternalSourcePlatformNumber ?? '',
    externalSystemId: source?.ExternalSystemId ?? 0,
    federalLawLimit: adaptFederalLawLimitAltEnumToUI(source?.FederalLawLimit),
    fillingApplicationEndDate: source?.FillingApplicationEndDate ?? '',
    id: source?.Id ?? 0,
    initialPrice: source?.InitialPrice ?? 0,
    initialPriceWithVat: source?.InitialPriceWithVat ?? 0,
    initialPriceWithoutVat: source?.InitialPriceWithoutVat ?? 0,
    invitedOrganizationIds: source?.InvitedOrganizationIds ?? [],
    isAutoCompleteDeal: source?.IsAutoCompleteDeal ?? false,
    isBasedOnPublicOffer: source?.IsBasedOnPublicOffer ?? false,
    isContractInElectronicForm: source?.IsContractInElectronicForm ?? false,
    isImmediate: source?.IsImmediate ?? false,
    isInitialPriceDefined: source?.IsInitialPriceDefined ?? false,
    isLotPriceWithVat: source?.IsLotPriceWithVat ?? false,
    isManualEnterPriceForEachProduct: source?.IsManualEnterPriceForEachProduct ?? false,
    isOnlySmp: source?.IsOnlySmp ?? false,
    isParentContractNumberNotSpecified: source?.IsParentContractNumberNotSpecified ?? false,
    isRussianPurchaseObjectHasAdvantage: source?.IsRussianPurchaseObjectHasAdvantage ?? false,
    isUnitBidding: source?.IsUnitBidding ?? false,
    keepGuaranteeForAllParticipants: source?.KeepGuaranteeForAllParticipants ?? false,
    keepGuaranteeForParticipantsCount: source?.KeepGuaranteeForParticipantsCount ?? 0,
    kladrRegionCode: source?.KladrRegionCode ?? '',
    kladrRegionCodes: (source?.KladrRegionCodes ?? []).map((item) => adaptDictionaryItemAltToUI(item)),
    lastModificationDate: source?.LastModificationDate ?? '',
    lotItemsSumPrice: source?.LotItemsSumPrice ?? 0,
    maxDealPrice: source?.MaxDealPrice ?? 0,
    minFillingApplicationEndDateForImmediate: source?.MinFillingApplicationEndDateForImmediate ?? '',
    organizerId: source?.OrganizerId ?? 0,
    parentContractNumber: source?.ParentContractNumber ?? '',
    planNumber: source?.PlanNumber ?? '',
    planPositionNumber: source?.PlanPositionNumber ?? '',
    planedDealSignDate: source?.PlanedDealSignDate ?? '',
    products: (source?.Products ?? []).map((item) => adaptProductToUI(item)),
    regulationDocumentUrl: source?.RegulationDocumentUrl ?? '',
    resultsDeliveryType: source?.ResultsDeliveryType ?? 0,
    rowVersion: source?.RowVersion ?? 0,
    sourcePlatform: adaptSourcePlatformEnumToUI(source?.SourcePlatform),
    supplierWithSmallBusinessRequirements: source?.SupplierWithSmallBusinessRequirements ?? false,
    supplierWithUniversalRequirements: source?.SupplierWithUniversalRequirements ?? false,
    tradeBiddingType: adaptTradeBiddingTypeEnumToUI(source?.TradeBiddingType),
    tradeDocuments: (source?.TradeDocuments ?? []).map((item) => adaptTradeDocumentToUI(item)),
    tradeFiles: (source?.TradeFiles ?? []).map((item) => adaptTradeDocumentToUI(item)),
    tradeIdentificationCode: source?.TradeIdentificationCode ?? '',
    tradeName: source?.TradeName ?? '',
    tradeState: adaptTradeStateEnumToUI(source?.TradeState),
    zmoFinanceSource: adaptZmoFinanceSourceEnumToUI(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType ?? 0,
  };
}

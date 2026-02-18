import { ApiMarketParticipantOfferInfoDto } from '../../../swagger/models/api-market-participant-offer-info-dto';
import { MarketParticipantOfferInfo } from '../../models/market-participant-offer-info.interface';
import { adaptB2BCategoryToUI } from './b-2-b-category.adapter';
import { adaptCharacteristicToUI } from './characteristic.adapter';
import { adaptCharacteristicValuesToUI } from './characteristic-values.adapter';
import { adaptCountryToUI } from './country.adapter';
import { adaptDeliveryRegionInfoToUI } from './delivery-region-info.adapter';
import { adaptDisplayCharacteristicToUI } from './display-characteristic.adapter';
import { adaptManufacturerCountryRegistryTypeEnumToUI } from './manufacturer-country-registry-type-enum.adapter';
import { adaptOfferCreatedMethodEnumToUI } from './offer-created-method-enum.adapter';
import { adaptOkpd2MarketToUI } from './okpd-2-market.adapter';
import { adaptOrganizationCountryAltEnumToUI } from './organization-country-alt-enum.adapter';
import { adaptParticipantOfferActionsToUI } from './participant-offer-actions.adapter';
import { adaptParticipantOfferDocumentToUI } from './participant-offer-document.adapter';
import { adaptParticipantOfferSourceEnumToUI } from './participant-offer-source-enum.adapter';
import { adaptParticipantOfferSpecificFlagEnumToUI } from './participant-offer-specific-flag-enum.adapter';
import { adaptParticipantOfferStateEnumToUI } from './participant-offer-state-enum.adapter';
import { adaptParticipantOfferTypeEnumToUI } from './participant-offer-type-enum.adapter';
import { adaptPriceListStateEnumToUI } from './price-list-state-enum.adapter';
import { adaptPriceListTypeEnumToUI } from './price-list-type-enum.adapter';
import { adaptPriceRegionDetailToUI } from './price-region-detail.adapter';
import { adaptRegionKladrToUI } from './region-kladr.adapter';
import { adaptTagViewToUI } from './tag-view.adapter';
import { adaptTruTypeEnumToUI } from './tru-type-enum.adapter';
import { adaptUsedClassificatorTypeEnumToUI } from './used-classificator-type-enum.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';
import { adaptYmlParamToUI } from './yml-param.adapter';

export function adaptMarketParticipantOfferInfoToUI(source?: ApiMarketParticipantOfferInfoDto | null): MarketParticipantOfferInfo {
  return {
    actions: adaptParticipantOfferActionsToUI(source?.Actions),
    barCode: source?.BarCode ?? '',
    category: adaptB2BCategoryToUI(source?.Category),
    characteristicValues: (source?.CharacteristicValues ?? []).map((item) => adaptCharacteristicValuesToUI(item)),
    characteristics: (source?.Characteristics ?? []).map((item) => adaptCharacteristicToUI(item)),
    classificatorCode: source?.ClassificatorCode ?? '',
    classificatorDescription: source?.ClassificatorDescription ?? '',
    country: adaptCountryToUI(source?.Country),
    countryCode: source?.CountryCode ?? '',
    countryOfOrigin: source?.CountryOfOrigin ?? '',
    createdMethod: adaptOfferCreatedMethodEnumToUI(source?.CreatedMethod),
    currencyCode: source?.CurrencyCode ?? '',
    deliveryCost: source?.DeliveryCost ?? 0,
    deliveryPlace: source?.DeliveryPlace ?? '',
    deliveryRegionInfos: (source?.DeliveryRegionInfos ?? []).map((item) => adaptDeliveryRegionInfoToUI(item)),
    deliveryRegions: source?.DeliveryRegions ?? '',
    deliveryTerms: source?.DeliveryTerms ?? '',
    displayCharacteristics: (source?.DisplayCharacteristics ?? []).map((item) => adaptDisplayCharacteristicToUI(item)),
    dosageForm: source?.DosageForm ?? '',
    dosageMeasureUnits: source?.DosageMeasureUnits ?? '',
    drugDosage: source?.DrugDosage ?? '',
    duringDays: source?.DuringDays ?? 0,
    exclusiveToTradeId: source?.ExclusiveToTradeId ?? 0,
    exclusiveToTradeNumber: source?.ExclusiveToTradeNumber ?? '',
    externalSystemIdentifier: source?.ExternalSystemIdentifier ?? '',
    externalSystemIdentifierNumeric: source?.ExternalSystemIdentifierNumeric ?? 0,
    id: source?.Id ?? 0,
    isFromGuarnteeSupplier: source?.IsFromGuarnteeSupplier ?? false,
    isOwner: source?.IsOwner ?? false,
    isParticipatesInRequirementRequests: source?.IsParticipatesInRequirementRequests ?? false,
    isPhysicalPerson: source?.IsPhysicalPerson ?? false,
    isPublicOffer: source?.IsPublicOffer ?? false,
    ksrCode: source?.KsrCode ?? '',
    ksrName: source?.KsrName ?? '',
    ksrUnit: source?.KsrUnit ?? '',
    manufacturer: source?.Manufacturer ?? '',
    manufacturerCountryRegistryNumber: source?.ManufacturerCountryRegistryNumber ?? '',
    manufacturerCountryRegistryType: adaptManufacturerCountryRegistryTypeEnumToUI(source?.ManufacturerCountryRegistryType),
    manufacturerCountryScore: source?.ManufacturerCountryScore ?? 0,
    movingProLink: source?.MovingProLink ?? '',
    offerOwner: source?.OfferOwner ?? false,
    offerState: adaptParticipantOfferStateEnumToUI(source?.OfferState),
    offerStateDescription: source?.OfferStateDescription ?? '',
    offerTerms: source?.OfferTerms ?? '',
    offerType: adaptParticipantOfferTypeEnumToUI(source?.OfferType),
    offerTypeDescription: source?.OfferTypeDescription ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okeiDescription: source?.OkeiDescription ?? '',
    okpd2Values: (source?.Okpd2Values ?? []).map((item) => adaptOkpd2MarketToUI(item)),
    params: (source?.Params ?? []).map((item) => adaptYmlParamToUI(item)),
    participantCountry: adaptOrganizationCountryAltEnumToUI(source?.ParticipantCountry),
    participantForeignId: source?.ParticipantForeignId ?? '',
    participantGuid: source?.ParticipantGuid ?? '',
    participantId: source?.ParticipantId ?? 0,
    participantInn: source?.ParticipantInn ?? '',
    participantKpp: source?.ParticipantKpp ?? '',
    participantName: source?.ParticipantName ?? '',
    participantOfferDocuments: (source?.ParticipantOfferDocuments ?? []).map((item) => adaptParticipantOfferDocumentToUI(item)),
    participantOfferSource: adaptParticipantOfferSourceEnumToUI(source?.ParticipantOfferSource),
    participantOfferSpecific: adaptParticipantOfferSpecificFlagEnumToUI(source?.ParticipantOfferSpecific),
    participantSource: source?.ParticipantSource ?? 0,
    possibleDeliveryBySeller: source?.PossibleDeliveryBySeller ?? false,
    possibleSelfDelivery: source?.PossibleSelfDelivery ?? false,
    possibleSendByTransportCompany: source?.PossibleSendByTransportCompany ?? false,
    priceListDeliveryRegionInfos: (source?.PriceListDeliveryRegionInfos ?? []).map((item) => adaptDeliveryRegionInfoToUI(item)),
    priceListId: source?.PriceListId ?? 0,
    priceListState: adaptPriceListStateEnumToUI(source?.PriceListState),
    priceListType: adaptPriceListTypeEnumToUI(source?.PriceListType),
    priceRegionDetails: (source?.PriceRegionDetails ?? []).map((item) => adaptPriceRegionDetailToUI(item)),
    printFormFileName: source?.PrintFormFileName ?? '',
    printFormGuid: source?.PrintFormGuid ?? '',
    producer: source?.Producer ?? '',
    productDescription: source?.ProductDescription ?? '',
    productMNN: source?.ProductMNN ?? '',
    productName: source?.ProductName ?? '',
    publishDate: source?.PublishDate ?? '',
    publishDateStart: source?.PublishDateStart ?? '',
    recipientOrganizationInn: source?.RecipientOrganizationInn ?? '',
    recipientOrganizationKpp: source?.RecipientOrganizationKpp ?? '',
    recipientOrganizationName: source?.RecipientOrganizationName ?? '',
    regionalProductSignCanEdit: source?.RegionalProductSignCanEdit ?? false,
    regionalProductSignChecked: source?.RegionalProductSignChecked ?? false,
    regionalProductSignTenantId: source?.RegionalProductSignTenantId ?? 0,
    regions: (source?.Regions ?? []).map((item) => adaptRegionKladrToUI(item)),
    requestDateEnd: source?.RequestDateEnd ?? '',
    requestDateStart: source?.RequestDateStart ?? '',
    selfDeliveryPlace: source?.SelfDeliveryPlace ?? '',
    sellerCode: source?.SellerCode ?? '',
    shortOkeiName: source?.ShortOkeiName ?? '',
    signature: source?.Signature ?? '',
    tags: (source?.Tags ?? []).map((item) => adaptTagViewToUI(item)),
    truType: adaptTruTypeEnumToUI(source?.TruType),
    unitPrice: source?.UnitPrice ?? 0,
    unitPriceInCurrency: source?.UnitPriceInCurrency ?? 0,
    usedClassificatorType: adaptUsedClassificatorTypeEnumToUI(source?.UsedClassificatorType),
    usedClassificatorTypeDescription: source?.UsedClassificatorTypeDescription ?? '',
    vatRate: source?.VatRate ?? 0,
    vatRateDecimal: source?.VatRateDecimal ?? 0,
    vatRateDescription: source?.VatRateDescription ?? '',
    vatRateState: adaptVatRateStateEnumToUI(source?.VatRateState),
    vendorCode: source?.VendorCode ?? '',
    wholesalePercentage: source?.WholesalePercentage ?? 0,
  };
}

import { ApiMarketParticipantOfferDto } from '../../../swagger/models/api-market-participant-offer-dto';
import { MarketParticipantOffer } from '../../models/market-participant-offer.interface';
import { adaptCategoryToUI } from './category.adapter';
import { adaptCharacteristicValuesToUI } from './characteristic-values.adapter';
import { adaptCountryToUI } from './country.adapter';
import { adaptDeliveryRegionInfoToUI } from './delivery-region-info.adapter';
import { adaptManufacturerCountryRegistryTypeEnumToUI } from './manufacturer-country-registry-type-enum.adapter';
import { adaptOfferCreatedMethodEnumToUI } from './offer-created-method-enum.adapter';
import { adaptOkpd2MarketToUI } from './okpd-2-market.adapter';
import { adaptParticipantOfferDocumentToUI } from './participant-offer-document.adapter';
import { adaptParticipantOfferSourceEnumToUI } from './participant-offer-source-enum.adapter';
import { adaptParticipantOfferSpecificFlagEnumToUI } from './participant-offer-specific-flag-enum.adapter';
import { adaptParticipantOfferStateEnumToUI } from './participant-offer-state-enum.adapter';
import { adaptParticipantOfferTypeEnumToUI } from './participant-offer-type-enum.adapter';
import { adaptPriceRegionDetailToUI } from './price-region-detail.adapter';
import { adaptRegionKladrToUI } from './region-kladr.adapter';
import { adaptTruTypeEnum2ToUI } from './tru-type-enum-2.adapter';
import { adaptUsedClassificatorTypeEnumToUI } from './used-classificator-type-enum.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';

export function adaptMarketParticipantOfferToUI(source?: ApiMarketParticipantOfferDto | null): MarketParticipantOffer {
  return {
    category: adaptCategoryToUI(source?.Category),
    characteristicFileGuid: source?.CharacteristicFileGuid ?? '',
    characteristicFromUi: source?.CharacteristicFromUi ?? false,
    characteristicValues: (source?.CharacteristicValues ?? []).map((item) => adaptCharacteristicValuesToUI(item)),
    classificatorCode: source?.ClassificatorCode ?? '',
    classificatorDescription: source?.ClassificatorDescription ?? '',
    country: adaptCountryToUI(source?.Country),
    createdMethod: adaptOfferCreatedMethodEnumToUI(source?.CreatedMethod),
    currencyCode: source?.CurrencyCode ?? '',
    deliveryCost: source?.DeliveryCost ?? 0,
    deliveryPlace: source?.DeliveryPlace ?? '',
    deliveryRegionInfos: (source?.DeliveryRegionInfos ?? []).map((item) => adaptDeliveryRegionInfoToUI(item)),
    deliveryRegions: source?.DeliveryRegions ?? '',
    duringDays: source?.DuringDays ?? 0,
    exclusiveToTrade: source?.ExclusiveToTrade ?? false,
    externalSystemIdentifier: source?.ExternalSystemIdentifier ?? '',
    externalSystemIdentifierNumeric: source?.ExternalSystemIdentifierNumeric ?? 0,
    id: source?.Id ?? 0,
    isPublicOffer: source?.IsPublicOffer ?? false,
    ksrCode: source?.KsrCode ?? '',
    lotItemId: source?.LotItemId ?? 0,
    manufacturer: source?.Manufacturer ?? '',
    manufacturerCountryRegistryNumber: source?.ManufacturerCountryRegistryNumber ?? '',
    manufacturerCountryRegistryType: adaptManufacturerCountryRegistryTypeEnumToUI(source?.ManufacturerCountryRegistryType),
    manufacturerCountryScore: source?.ManufacturerCountryScore ?? 0,
    neverExpired: source?.NeverExpired ?? false,
    offerState: adaptParticipantOfferStateEnumToUI(source?.OfferState),
    offerTerms: source?.OfferTerms ?? '',
    offerType: adaptParticipantOfferTypeEnumToUI(source?.OfferType),
    okeiCode: source?.OkeiCode ?? '',
    okeiDescription: source?.OkeiDescription ?? '',
    okpd2Codes: (source?.Okpd2Codes ?? []).map((item) => adaptOkpd2MarketToUI(item)),
    participantOfferDocuments: (source?.ParticipantOfferDocuments ?? []).map((item) => adaptParticipantOfferDocumentToUI(item)),
    participantOfferSource: adaptParticipantOfferSourceEnumToUI(source?.ParticipantOfferSource),
    participantOfferSpecific: adaptParticipantOfferSpecificFlagEnumToUI(source?.ParticipantOfferSpecific),
    possibleDeliveryBySeller: source?.PossibleDeliveryBySeller ?? false,
    possibleSelfDelivery: source?.PossibleSelfDelivery ?? false,
    possibleSendByTransportCompany: source?.PossibleSendByTransportCompany ?? false,
    priceListId: source?.PriceListId ?? 0,
    priceRegionDetails: (source?.PriceRegionDetails ?? []).map((item) => adaptPriceRegionDetailToUI(item)),
    printFormGuid: source?.PrintFormGuid ?? '',
    productDescription: source?.ProductDescription ?? '',
    productName: source?.ProductName ?? '',
    publishDateStart: source?.PublishDateStart ?? '',
    recipientOrganizationInn: source?.RecipientOrganizationInn ?? '',
    recipientOrganizationKpp: source?.RecipientOrganizationKpp ?? '',
    recipientOrganizationName: source?.RecipientOrganizationName ?? '',
    regionalProductSignChecked: source?.RegionalProductSignChecked ?? false,
    regions: (source?.Regions ?? []).map((item) => adaptRegionKladrToUI(item)),
    requestDateEnd: source?.RequestDateEnd ?? '',
    requestDateStart: source?.RequestDateStart ?? '',
    selfDeliveryPlace: source?.SelfDeliveryPlace ?? '',
    signature: source?.Signature ?? '',
    tradeId: source?.TradeId ?? 0,
    truType: adaptTruTypeEnum2ToUI(source?.TruType),
    unitPrice: source?.UnitPrice ?? 0,
    unitPriceInCurrency: source?.UnitPriceInCurrency ?? 0,
    usedClassificatorType: adaptUsedClassificatorTypeEnumToUI(source?.UsedClassificatorType),
    vatRate: source?.VatRate ?? 0,
    vatRateState: adaptVatRateStateEnumToUI(source?.VatRateState),
  };
}

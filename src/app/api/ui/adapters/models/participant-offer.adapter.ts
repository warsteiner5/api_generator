import { ApiParticipantOfferDto } from '../../../swagger/models/api-participant-offer-dto';
import { ParticipantOffer } from '../../models/participant-offer.interface';
import { categoryAdapter } from './category.adapter';
import { characteristicValuesAdapter } from './characteristic-values.adapter';
import { countryAdapter } from './country.adapter';
import { deliveryRegionInfoAdapter } from './delivery-region-info.adapter';
import { manufacturerCountryRegistryTypeEnumAdapter } from '../enums/manufacturer-country-registry-type-enum.adapter';
import { offerCreatedMethodEnumAdapter } from '../enums/offer-created-method-enum.adapter';
import { okpd2MarketAdapter } from './okpd-2-market.adapter';
import { participantOfferDocumentAdapter } from './participant-offer-document.adapter';
import { participantOfferSourceEnumAdapter } from '../enums/participant-offer-source-enum.adapter';
import { participantOfferSpecificFlagEnumAdapter } from '../enums/participant-offer-specific-flag-enum.adapter';
import { participantOfferStateEnumAdapter } from '../enums/participant-offer-state-enum.adapter';
import { participantOfferTypeEnumAdapter } from '../enums/participant-offer-type-enum.adapter';
import { priceRegionDetailAdapter } from './price-region-detail.adapter';
import { regionKladrAdapter } from './region-kladr.adapter';
import { truTypeEnum2Adapter } from '../enums/tru-type-enum-2.adapter';
import { usedClassificatorTypeEnumAdapter } from '../enums/used-classificator-type-enum.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';

export const participantOfferAdapter = (source?: ApiParticipantOfferDto | null): ParticipantOffer => {
  return {
    category: source?.Category === null ? undefined : categoryAdapter(source?.Category),
    characteristicFileGuid: source?.CharacteristicFileGuid,
    characteristicFromUi: source?.CharacteristicFromUi,
    characteristicValues: source?.CharacteristicValues?.map((item) => characteristicValuesAdapter(item)),
    classificatorCode: source?.ClassificatorCode,
    classificatorDescription: source?.ClassificatorDescription,
    country: source?.Country === null ? undefined : countryAdapter(source?.Country),
    createdMethod: source?.CreatedMethod === null ? undefined : offerCreatedMethodEnumAdapter(source?.CreatedMethod),
    currencyCode: source?.CurrencyCode,
    deliveryCost: source?.DeliveryCost,
    deliveryPlace: source?.DeliveryPlace,
    deliveryRegionInfos: source?.DeliveryRegionInfos?.map((item) => deliveryRegionInfoAdapter(item)),
    deliveryRegions: source?.DeliveryRegions,
    duringDays: source?.DuringDays,
    exclusiveToTrade: source?.ExclusiveToTrade,
    externalSystemIdentifier: source?.ExternalSystemIdentifier,
    externalSystemIdentifierNumeric: source?.ExternalSystemIdentifierNumeric,
    id: source?.Id,
    isPublicOffer: source?.IsPublicOffer,
    itemInStock: source?.ItemInStock,
    ksrCode: source?.KsrCode,
    lotItemId: source?.LotItemId,
    manufacturer: source?.Manufacturer,
    manufacturerCountryRegistryNumber: source?.ManufacturerCountryRegistryNumber,
    manufacturerCountryRegistryType: source?.ManufacturerCountryRegistryType === null ? undefined : manufacturerCountryRegistryTypeEnumAdapter(source?.ManufacturerCountryRegistryType),
    manufacturerCountryScore: source?.ManufacturerCountryScore,
    minQuantity: source?.MinQuantity,
    neverExpired: source?.NeverExpired,
    offerState: source?.OfferState === null ? undefined : participantOfferStateEnumAdapter(source?.OfferState),
    offerTerms: source?.OfferTerms,
    offerType: source?.OfferType === null ? undefined : participantOfferTypeEnumAdapter(source?.OfferType),
    okeiCode: source?.OkeiCode,
    okeiDescription: source?.OkeiDescription,
    okpd2Codes: source?.Okpd2Codes?.map((item) => okpd2MarketAdapter(item)),
    participantOfferDocuments: source?.ParticipantOfferDocuments?.map((item) => participantOfferDocumentAdapter(item)),
    participantOfferSource: source?.ParticipantOfferSource === null ? undefined : participantOfferSourceEnumAdapter(source?.ParticipantOfferSource),
    participantOfferSpecific: source?.ParticipantOfferSpecific === null ? undefined : participantOfferSpecificFlagEnumAdapter(source?.ParticipantOfferSpecific),
    possibleDeliveryBySeller: source?.PossibleDeliveryBySeller,
    possibleSelfDelivery: source?.PossibleSelfDelivery,
    possibleSendByTransportCompany: source?.PossibleSendByTransportCompany,
    priceListId: source?.PriceListId,
    priceRegionDetails: source?.PriceRegionDetails?.map((item) => priceRegionDetailAdapter(item)),
    printFormGuid: source?.PrintFormGuid,
    productDescription: source?.ProductDescription,
    productName: source?.ProductName,
    publishDateStart: source?.PublishDateStart,
    quantity: source?.Quantity,
    recipientOrganizationInn: source?.RecipientOrganizationInn,
    recipientOrganizationKpp: source?.RecipientOrganizationKpp,
    recipientOrganizationName: source?.RecipientOrganizationName,
    regionalProductSignChecked: source?.RegionalProductSignChecked,
    regions: source?.Regions?.map((item) => regionKladrAdapter(item)),
    requestDateEnd: source?.RequestDateEnd,
    requestDateStart: source?.RequestDateStart,
    selfDeliveryPlace: source?.SelfDeliveryPlace,
    signature: source?.Signature,
    tradeId: source?.TradeId,
    truType: source?.TruType === null ? undefined : truTypeEnum2Adapter(source?.TruType),
    unitPrice: source?.UnitPrice,
    unitPriceInCurrency: source?.UnitPriceInCurrency,
    usedClassificatorType: source?.UsedClassificatorType === null ? undefined : usedClassificatorTypeEnumAdapter(source?.UsedClassificatorType),
    vatRate: source?.VatRate,
    vatRateState: source?.VatRateState === null ? undefined : vatRateStateEnumAdapter(source?.VatRateState),
  };
}

import { ApiMarketParticipantOfferInfoDto } from '../../../swagger/models/api-market-participant-offer-info-dto';
import { MarketParticipantOfferInfo } from '../../models/market-participant-offer-info.interface';
import { b2BCategoryAdapter } from './b-2-b-category.adapter';
import { characteristicAdapter } from './characteristic.adapter';
import { characteristicValuesAdapter } from './characteristic-values.adapter';
import { countryAdapter } from './country.adapter';
import { deliveryRegionInfoAdapter } from './delivery-region-info.adapter';
import { displayCharacteristicAdapter } from './display-characteristic.adapter';
import { manufacturerCountryRegistryTypeEnumAdapter } from '../enums/manufacturer-country-registry-type-enum.adapter';
import { offerCreatedMethodEnumAdapter } from '../enums/offer-created-method-enum.adapter';
import { okpd2MarketAdapter } from './okpd-2-market.adapter';
import { organizationCountryAltEnumAdapter } from '../enums/organization-country-alt-enum.adapter';
import { participantOfferActionsAdapter } from './participant-offer-actions.adapter';
import { participantOfferDocumentAdapter } from './participant-offer-document.adapter';
import { participantOfferSourceEnumAdapter } from '../enums/participant-offer-source-enum.adapter';
import { participantOfferSpecificFlagEnumAdapter } from '../enums/participant-offer-specific-flag-enum.adapter';
import { participantOfferStateEnumAdapter } from '../enums/participant-offer-state-enum.adapter';
import { participantOfferTypeEnumAdapter } from '../enums/participant-offer-type-enum.adapter';
import { priceListStateEnumAdapter } from '../enums/price-list-state-enum.adapter';
import { priceListTypeEnumAdapter } from '../enums/price-list-type-enum.adapter';
import { priceRegionDetailAdapter } from './price-region-detail.adapter';
import { regionKladrAdapter } from './region-kladr.adapter';
import { tagViewAdapter } from './tag-view.adapter';
import { truTypeEnumAdapter } from '../enums/tru-type-enum.adapter';
import { usedClassificatorTypeEnumAdapter } from '../enums/used-classificator-type-enum.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';
import { ymlParamAdapter } from './yml-param.adapter';

export const marketParticipantOfferInfoAdapter = (source?: ApiMarketParticipantOfferInfoDto | null): MarketParticipantOfferInfo => {
  return {
    actions: source?.Actions === null ? undefined : participantOfferActionsAdapter(source?.Actions),
    barCode: source?.BarCode,
    category: source?.Category === null ? undefined : b2BCategoryAdapter(source?.Category),
    characteristicValues: source?.CharacteristicValues?.map((item) => characteristicValuesAdapter(item)),
    characteristics: source?.Characteristics?.map((item) => characteristicAdapter(item)),
    classificatorCode: source?.ClassificatorCode,
    classificatorDescription: source?.ClassificatorDescription,
    country: source?.Country === null ? undefined : countryAdapter(source?.Country),
    countryCode: source?.CountryCode,
    countryOfOrigin: source?.CountryOfOrigin,
    createdMethod: source?.CreatedMethod === null ? undefined : offerCreatedMethodEnumAdapter(source?.CreatedMethod),
    currencyCode: source?.CurrencyCode,
    deliveryCost: source?.DeliveryCost,
    deliveryPlace: source?.DeliveryPlace,
    deliveryRegionInfos: source?.DeliveryRegionInfos?.map((item) => deliveryRegionInfoAdapter(item)),
    deliveryRegions: source?.DeliveryRegions,
    deliveryTerms: source?.DeliveryTerms,
    displayCharacteristics: source?.DisplayCharacteristics?.map((item) => displayCharacteristicAdapter(item)),
    dosageForm: source?.DosageForm,
    dosageMeasureUnits: source?.DosageMeasureUnits,
    drugDosage: source?.DrugDosage,
    duringDays: source?.DuringDays,
    exclusiveToTradeId: source?.ExclusiveToTradeId,
    exclusiveToTradeNumber: source?.ExclusiveToTradeNumber,
    externalSystemIdentifier: source?.ExternalSystemIdentifier,
    externalSystemIdentifierNumeric: source?.ExternalSystemIdentifierNumeric,
    id: source?.Id,
    isFromGuarnteeSupplier: source?.IsFromGuarnteeSupplier,
    isOwner: source?.IsOwner,
    isParticipatesInRequirementRequests: source?.IsParticipatesInRequirementRequests,
    isPhysicalPerson: source?.IsPhysicalPerson,
    isPublicOffer: source?.IsPublicOffer,
    ksrCode: source?.KsrCode,
    ksrName: source?.KsrName,
    ksrUnit: source?.KsrUnit,
    manufacturer: source?.Manufacturer,
    manufacturerCountryRegistryNumber: source?.ManufacturerCountryRegistryNumber,
    manufacturerCountryRegistryType: source?.ManufacturerCountryRegistryType === null ? undefined : manufacturerCountryRegistryTypeEnumAdapter(source?.ManufacturerCountryRegistryType),
    manufacturerCountryScore: source?.ManufacturerCountryScore,
    movingProLink: source?.MovingProLink,
    offerOwner: source?.OfferOwner,
    offerState: source?.OfferState === null ? undefined : participantOfferStateEnumAdapter(source?.OfferState),
    offerStateDescription: source?.OfferStateDescription,
    offerTerms: source?.OfferTerms,
    offerType: source?.OfferType === null ? undefined : participantOfferTypeEnumAdapter(source?.OfferType),
    offerTypeDescription: source?.OfferTypeDescription,
    okeiCode: source?.OkeiCode,
    okeiDescription: source?.OkeiDescription,
    okpd2Values: source?.Okpd2Values?.map((item) => okpd2MarketAdapter(item)),
    params: source?.Params?.map((item) => ymlParamAdapter(item)),
    participantCountry: source?.ParticipantCountry === null ? undefined : organizationCountryAltEnumAdapter(source?.ParticipantCountry),
    participantForeignId: source?.ParticipantForeignId,
    participantGuid: source?.ParticipantGuid,
    participantId: source?.ParticipantId,
    participantInn: source?.ParticipantInn,
    participantKpp: source?.ParticipantKpp,
    participantName: source?.ParticipantName,
    participantOfferDocuments: source?.ParticipantOfferDocuments?.map((item) => participantOfferDocumentAdapter(item)),
    participantOfferSource: source?.ParticipantOfferSource === null ? undefined : participantOfferSourceEnumAdapter(source?.ParticipantOfferSource),
    participantOfferSpecific: source?.ParticipantOfferSpecific === null ? undefined : participantOfferSpecificFlagEnumAdapter(source?.ParticipantOfferSpecific),
    participantSource: source?.ParticipantSource,
    possibleDeliveryBySeller: source?.PossibleDeliveryBySeller,
    possibleSelfDelivery: source?.PossibleSelfDelivery,
    possibleSendByTransportCompany: source?.PossibleSendByTransportCompany,
    priceListDeliveryRegionInfos: source?.PriceListDeliveryRegionInfos?.map((item) => deliveryRegionInfoAdapter(item)),
    priceListId: source?.PriceListId,
    priceListState: source?.PriceListState === null ? undefined : priceListStateEnumAdapter(source?.PriceListState),
    priceListType: source?.PriceListType === null ? undefined : priceListTypeEnumAdapter(source?.PriceListType),
    priceRegionDetails: source?.PriceRegionDetails?.map((item) => priceRegionDetailAdapter(item)),
    printFormFileName: source?.PrintFormFileName,
    printFormGuid: source?.PrintFormGuid,
    producer: source?.Producer,
    productDescription: source?.ProductDescription,
    productMNN: source?.ProductMNN,
    productName: source?.ProductName,
    publishDate: source?.PublishDate,
    publishDateStart: source?.PublishDateStart,
    recipientOrganizationInn: source?.RecipientOrganizationInn,
    recipientOrganizationKpp: source?.RecipientOrganizationKpp,
    recipientOrganizationName: source?.RecipientOrganizationName,
    regionalProductSignCanEdit: source?.RegionalProductSignCanEdit,
    regionalProductSignChecked: source?.RegionalProductSignChecked,
    regionalProductSignTenantId: source?.RegionalProductSignTenantId,
    regions: source?.Regions?.map((item) => regionKladrAdapter(item)),
    requestDateEnd: source?.RequestDateEnd,
    requestDateStart: source?.RequestDateStart,
    selfDeliveryPlace: source?.SelfDeliveryPlace,
    sellerCode: source?.SellerCode,
    shortOkeiName: source?.ShortOkeiName,
    signature: source?.Signature,
    tags: source?.Tags?.map((item) => tagViewAdapter(item)),
    truType: source?.TruType === null ? undefined : truTypeEnumAdapter(source?.TruType),
    unitPrice: source?.UnitPrice,
    unitPriceInCurrency: source?.UnitPriceInCurrency,
    usedClassificatorType: source?.UsedClassificatorType === null ? undefined : usedClassificatorTypeEnumAdapter(source?.UsedClassificatorType),
    usedClassificatorTypeDescription: source?.UsedClassificatorTypeDescription,
    vatRate: source?.VatRate,
    vatRateDecimal: source?.VatRateDecimal,
    vatRateDescription: source?.VatRateDescription,
    vatRateState: source?.VatRateState === null ? undefined : vatRateStateEnumAdapter(source?.VatRateState),
    vendorCode: source?.VendorCode,
    wholesalePercentage: source?.WholesalePercentage,
  };
}

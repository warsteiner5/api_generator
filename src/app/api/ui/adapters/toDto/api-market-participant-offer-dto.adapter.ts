import { MarketParticipantOffer } from '../../models/market-participant-offer.interface';
import { ApiMarketParticipantOfferDto } from '../../../swagger/models/api-market-participant-offer-dto';
import { adaptApiCategoryDto } from './api-category-dto.adapter';
import { adaptApiCharacteristicValuesDto } from './api-characteristic-values-dto.adapter';
import { adaptApiCountryDto } from './api-country-dto.adapter';
import { adaptApiDeliveryRegionInfoDto } from './api-delivery-region-info-dto.adapter';
import { adaptApiManufacturerCountryRegistryTypeEnum } from './api-manufacturer-country-registry-type-enum.adapter';
import { adaptApiOfferCreatedMethodEnum } from './api-offer-created-method-enum.adapter';
import { adaptApiOkpd2MarketDto } from './api-okpd-2-market-dto.adapter';
import { adaptApiParticipantOfferDocumentDto } from './api-participant-offer-document-dto.adapter';
import { adaptApiParticipantOfferSourceEnum } from './api-participant-offer-source-enum.adapter';
import { adaptApiParticipantOfferSpecificFlagEnum } from './api-participant-offer-specific-flag-enum.adapter';
import { adaptApiParticipantOfferStateEnum } from './api-participant-offer-state-enum.adapter';
import { adaptApiParticipantOfferTypeEnum } from './api-participant-offer-type-enum.adapter';
import { adaptApiPriceRegionDetailDto } from './api-price-region-detail-dto.adapter';
import { adaptApiRegionKladrDto } from './api-region-kladr-dto.adapter';
import { adaptApiTruTypeEnum2 } from './api-tru-type-enum-2.adapter';
import { adaptApiUsedClassificatorTypeEnum } from './api-used-classificator-type-enum.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';

export function adaptApiMarketParticipantOfferDto(source?: MarketParticipantOffer | null): ApiMarketParticipantOfferDto {
  return {
    Category: adaptApiCategoryDto(source?.category),
    CharacteristicFileGuid: source?.characteristicFileGuid,
    CharacteristicFromUi: source?.characteristicFromUi,
    CharacteristicValues: (source?.characteristicValues ?? []).map((item) => adaptApiCharacteristicValuesDto(item)),
    ClassificatorCode: source?.classificatorCode,
    ClassificatorDescription: source?.classificatorDescription,
    Country: adaptApiCountryDto(source?.country),
    CreatedMethod: adaptApiOfferCreatedMethodEnum(source?.createdMethod),
    CurrencyCode: source?.currencyCode,
    DeliveryCost: source?.deliveryCost,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryRegionInfos: (source?.deliveryRegionInfos ?? []).map((item) => adaptApiDeliveryRegionInfoDto(item)),
    DeliveryRegions: source?.deliveryRegions,
    DuringDays: source?.duringDays,
    ExclusiveToTrade: source?.exclusiveToTrade,
    ExternalSystemIdentifier: source?.externalSystemIdentifier,
    ExternalSystemIdentifierNumeric: source?.externalSystemIdentifierNumeric,
    Id: source?.id,
    IsPublicOffer: source?.isPublicOffer,
    KsrCode: source?.ksrCode,
    LotItemId: source?.lotItemId,
    Manufacturer: source?.manufacturer,
    ManufacturerCountryRegistryNumber: source?.manufacturerCountryRegistryNumber,
    ManufacturerCountryRegistryType: adaptApiManufacturerCountryRegistryTypeEnum(source?.manufacturerCountryRegistryType),
    ManufacturerCountryScore: source?.manufacturerCountryScore,
    NeverExpired: source?.neverExpired,
    OfferState: adaptApiParticipantOfferStateEnum(source?.offerState),
    OfferTerms: source?.offerTerms,
    OfferType: adaptApiParticipantOfferTypeEnum(source?.offerType),
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Codes: (source?.okpd2Codes ?? []).map((item) => adaptApiOkpd2MarketDto(item)),
    ParticipantOfferDocuments: (source?.participantOfferDocuments ?? []).map((item) => adaptApiParticipantOfferDocumentDto(item)),
    ParticipantOfferSource: adaptApiParticipantOfferSourceEnum(source?.participantOfferSource),
    ParticipantOfferSpecific: adaptApiParticipantOfferSpecificFlagEnum(source?.participantOfferSpecific),
    PossibleDeliveryBySeller: source?.possibleDeliveryBySeller,
    PossibleSelfDelivery: source?.possibleSelfDelivery,
    PossibleSendByTransportCompany: source?.possibleSendByTransportCompany,
    PriceListId: source?.priceListId,
    PriceRegionDetails: (source?.priceRegionDetails ?? []).map((item) => adaptApiPriceRegionDetailDto(item)),
    PrintFormGuid: source?.printFormGuid,
    ProductDescription: source?.productDescription,
    ProductName: source?.productName,
    PublishDateStart: source?.publishDateStart,
    RecipientOrganizationInn: source?.recipientOrganizationInn,
    RecipientOrganizationKpp: source?.recipientOrganizationKpp,
    RecipientOrganizationName: source?.recipientOrganizationName,
    RegionalProductSignChecked: source?.regionalProductSignChecked,
    Regions: (source?.regions ?? []).map((item) => adaptApiRegionKladrDto(item)),
    RequestDateEnd: source?.requestDateEnd,
    RequestDateStart: source?.requestDateStart,
    SelfDeliveryPlace: source?.selfDeliveryPlace,
    Signature: source?.signature,
    TradeId: source?.tradeId,
    TruType: adaptApiTruTypeEnum2(source?.truType),
    UnitPrice: source?.unitPrice,
    UnitPriceInCurrency: source?.unitPriceInCurrency,
    UsedClassificatorType: adaptApiUsedClassificatorTypeEnum(source?.usedClassificatorType),
    VatRate: source?.vatRate,
    VatRateState: adaptApiVatRateStateEnum(source?.vatRateState),
  };
}

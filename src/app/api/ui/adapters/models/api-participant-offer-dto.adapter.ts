import { ParticipantOffer } from '../../models/participant-offer.interface';
import { ApiParticipantOfferDto } from '../../../swagger/models/api-participant-offer-dto';
import { apiCategoryDtoAdapter } from './api-category-dto.adapter';
import { apiCharacteristicValuesDtoAdapter } from './api-characteristic-values-dto.adapter';
import { apiCountryDtoAdapter } from './api-country-dto.adapter';
import { apiDeliveryRegionInfoDtoAdapter } from './api-delivery-region-info-dto.adapter';
import { apiManufacturerCountryRegistryTypeEnumAdapter } from '../enums/api-manufacturer-country-registry-type-enum.adapter';
import { apiOfferCreatedMethodEnumAdapter } from '../enums/api-offer-created-method-enum.adapter';
import { apiOkpd2MarketDtoAdapter } from './api-okpd-2-market-dto.adapter';
import { apiParticipantOfferDocumentDtoAdapter } from './api-participant-offer-document-dto.adapter';
import { apiParticipantOfferSourceEnumAdapter } from '../enums/api-participant-offer-source-enum.adapter';
import { apiParticipantOfferSpecificFlagEnumAdapter } from '../enums/api-participant-offer-specific-flag-enum.adapter';
import { apiParticipantOfferStateEnumAdapter } from '../enums/api-participant-offer-state-enum.adapter';
import { apiParticipantOfferTypeEnumAdapter } from '../enums/api-participant-offer-type-enum.adapter';
import { apiPriceRegionDetailDtoAdapter } from './api-price-region-detail-dto.adapter';
import { apiRegionKladrDtoAdapter } from './api-region-kladr-dto.adapter';
import { apiTruTypeEnum2Adapter } from '../enums/api-tru-type-enum-2.adapter';
import { apiUsedClassificatorTypeEnumAdapter } from '../enums/api-used-classificator-type-enum.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';

export const apiParticipantOfferDtoAdapter = (source?: ParticipantOffer | null): ApiParticipantOfferDto => {
  return {
    Category: source?.category === null ? undefined : apiCategoryDtoAdapter(source?.category),
    CharacteristicFileGuid: source?.characteristicFileGuid,
    CharacteristicFromUi: source?.characteristicFromUi,
    CharacteristicValues: source?.characteristicValues?.map((item) => apiCharacteristicValuesDtoAdapter(item)),
    ClassificatorCode: source?.classificatorCode,
    ClassificatorDescription: source?.classificatorDescription,
    Country: source?.country === null ? undefined : apiCountryDtoAdapter(source?.country),
    CreatedMethod: source?.createdMethod === null ? undefined : apiOfferCreatedMethodEnumAdapter(source?.createdMethod),
    CurrencyCode: source?.currencyCode,
    DeliveryCost: source?.deliveryCost,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryRegionInfos: source?.deliveryRegionInfos?.map((item) => apiDeliveryRegionInfoDtoAdapter(item)),
    DeliveryRegions: source?.deliveryRegions,
    DuringDays: source?.duringDays,
    ExclusiveToTrade: source?.exclusiveToTrade,
    ExternalSystemIdentifier: source?.externalSystemIdentifier,
    ExternalSystemIdentifierNumeric: source?.externalSystemIdentifierNumeric,
    Id: source?.id,
    IsPublicOffer: source?.isPublicOffer,
    ItemInStock: source?.itemInStock,
    KsrCode: source?.ksrCode,
    LotItemId: source?.lotItemId,
    Manufacturer: source?.manufacturer,
    ManufacturerCountryRegistryNumber: source?.manufacturerCountryRegistryNumber,
    ManufacturerCountryRegistryType: source?.manufacturerCountryRegistryType === null ? undefined : apiManufacturerCountryRegistryTypeEnumAdapter(source?.manufacturerCountryRegistryType),
    ManufacturerCountryScore: source?.manufacturerCountryScore,
    MinQuantity: source?.minQuantity,
    NeverExpired: source?.neverExpired,
    OfferState: source?.offerState === null ? undefined : apiParticipantOfferStateEnumAdapter(source?.offerState),
    OfferTerms: source?.offerTerms,
    OfferType: source?.offerType === null ? undefined : apiParticipantOfferTypeEnumAdapter(source?.offerType),
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Codes: source?.okpd2Codes?.map((item) => apiOkpd2MarketDtoAdapter(item)),
    ParticipantOfferDocuments: source?.participantOfferDocuments?.map((item) => apiParticipantOfferDocumentDtoAdapter(item)),
    ParticipantOfferSource: source?.participantOfferSource === null ? undefined : apiParticipantOfferSourceEnumAdapter(source?.participantOfferSource),
    ParticipantOfferSpecific: source?.participantOfferSpecific === null ? undefined : apiParticipantOfferSpecificFlagEnumAdapter(source?.participantOfferSpecific),
    PossibleDeliveryBySeller: source?.possibleDeliveryBySeller,
    PossibleSelfDelivery: source?.possibleSelfDelivery,
    PossibleSendByTransportCompany: source?.possibleSendByTransportCompany,
    PriceListId: source?.priceListId,
    PriceRegionDetails: source?.priceRegionDetails?.map((item) => apiPriceRegionDetailDtoAdapter(item)),
    PrintFormGuid: source?.printFormGuid,
    ProductDescription: source?.productDescription,
    ProductName: source?.productName,
    PublishDateStart: source?.publishDateStart,
    Quantity: source?.quantity,
    RecipientOrganizationInn: source?.recipientOrganizationInn,
    RecipientOrganizationKpp: source?.recipientOrganizationKpp,
    RecipientOrganizationName: source?.recipientOrganizationName,
    RegionalProductSignChecked: source?.regionalProductSignChecked,
    Regions: source?.regions?.map((item) => apiRegionKladrDtoAdapter(item)),
    RequestDateEnd: source?.requestDateEnd,
    RequestDateStart: source?.requestDateStart,
    SelfDeliveryPlace: source?.selfDeliveryPlace,
    Signature: source?.signature,
    TradeId: source?.tradeId,
    TruType: source?.truType === null ? undefined : apiTruTypeEnum2Adapter(source?.truType),
    UnitPrice: source?.unitPrice,
    UnitPriceInCurrency: source?.unitPriceInCurrency,
    UsedClassificatorType: source?.usedClassificatorType === null ? undefined : apiUsedClassificatorTypeEnumAdapter(source?.usedClassificatorType),
    VatRate: source?.vatRate,
    VatRateState: source?.vatRateState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatRateState),
  };
}

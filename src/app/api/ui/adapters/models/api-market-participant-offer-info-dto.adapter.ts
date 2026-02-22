import { MarketParticipantOfferInfo } from '../../models/market-participant-offer-info.interface';
import { ApiMarketParticipantOfferInfoDto } from '../../../swagger/models/api-market-participant-offer-info-dto';
import { apiB2BCategoryDtoAdapter } from './api-b-2-b-category-dto.adapter';
import { apiCharacteristicDtoAdapter } from './api-characteristic-dto.adapter';
import { apiCharacteristicValuesDtoAdapter } from './api-characteristic-values-dto.adapter';
import { apiCountryDtoAdapter } from './api-country-dto.adapter';
import { apiDeliveryRegionInfoDtoAdapter } from './api-delivery-region-info-dto.adapter';
import { apiDisplayCharacteristicDtoAdapter } from './api-display-characteristic-dto.adapter';
import { apiManufacturerCountryRegistryTypeEnumAdapter } from '../enums/api-manufacturer-country-registry-type-enum.adapter';
import { apiOfferCreatedMethodEnumAdapter } from '../enums/api-offer-created-method-enum.adapter';
import { apiOkpd2MarketDtoAdapter } from './api-okpd-2-market-dto.adapter';
import { apiOrganizationCountryAltEnumAdapter } from '../enums/api-organization-country.adapter';
import { apiParticipantOfferActionsDtoAdapter } from './api-participant-offer-actions-dto.adapter';
import { apiParticipantOfferDocumentDtoAdapter } from './api-participant-offer-document-dto.adapter';
import { apiParticipantOfferSourceEnumAdapter } from '../enums/api-participant-offer-source-enum.adapter';
import { apiParticipantOfferSpecificFlagEnumAdapter } from '../enums/api-participant-offer-specific-flag-enum.adapter';
import { apiParticipantOfferStateEnumAdapter } from '../enums/api-participant-offer-state-enum.adapter';
import { apiParticipantOfferTypeEnumAdapter } from '../enums/api-participant-offer-type-enum.adapter';
import { apiPriceListStateEnumAdapter } from '../enums/api-price-list-state-enum.adapter';
import { apiPriceListTypeEnumAdapter } from '../enums/api-price-list-type-enum.adapter';
import { apiPriceRegionDetailDtoAdapter } from './api-price-region-detail-dto.adapter';
import { apiRegionKladrDtoAdapter } from './api-region-kladr-dto.adapter';
import { apiTagViewDtoAdapter } from './api-tag-view-dto.adapter';
import { apiTruTypeEnumAdapter } from '../enums/api-tru-type-enum.adapter';
import { apiUsedClassificatorTypeEnumAdapter } from '../enums/api-used-classificator-type-enum.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';
import { apiYmlParamDtoAdapter } from './api-yml-param-dto.adapter';

export const apiMarketParticipantOfferInfoDtoAdapter = (source?: MarketParticipantOfferInfo | null): ApiMarketParticipantOfferInfoDto => {
  return {
    Actions: source?.actions === null ? undefined : apiParticipantOfferActionsDtoAdapter(source?.actions),
    BarCode: source?.barCode,
    Category: source?.category === null ? undefined : apiB2BCategoryDtoAdapter(source?.category),
    CharacteristicValues: source?.characteristicValues?.map((item) => apiCharacteristicValuesDtoAdapter(item)),
    Characteristics: source?.characteristics?.map((item) => apiCharacteristicDtoAdapter(item)),
    ClassificatorCode: source?.classificatorCode,
    ClassificatorDescription: source?.classificatorDescription,
    Country: source?.country === null ? undefined : apiCountryDtoAdapter(source?.country),
    CountryCode: source?.countryCode,
    CountryOfOrigin: source?.countryOfOrigin,
    CreatedMethod: source?.createdMethod === null ? undefined : apiOfferCreatedMethodEnumAdapter(source?.createdMethod),
    CurrencyCode: source?.currencyCode,
    DeliveryCost: source?.deliveryCost,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryRegionInfos: source?.deliveryRegionInfos?.map((item) => apiDeliveryRegionInfoDtoAdapter(item)),
    DeliveryRegions: source?.deliveryRegions,
    DeliveryTerms: source?.deliveryTerms,
    DisplayCharacteristics: source?.displayCharacteristics?.map((item) => apiDisplayCharacteristicDtoAdapter(item)),
    DosageForm: source?.dosageForm,
    DosageMeasureUnits: source?.dosageMeasureUnits,
    DrugDosage: source?.drugDosage,
    DuringDays: source?.duringDays,
    ExclusiveToTradeId: source?.exclusiveToTradeId,
    ExclusiveToTradeNumber: source?.exclusiveToTradeNumber,
    ExternalSystemIdentifier: source?.externalSystemIdentifier,
    ExternalSystemIdentifierNumeric: source?.externalSystemIdentifierNumeric,
    Id: source?.id,
    IsFromGuarnteeSupplier: source?.isFromGuarnteeSupplier,
    IsOwner: source?.isOwner,
    IsParticipatesInRequirementRequests: source?.isParticipatesInRequirementRequests,
    IsPhysicalPerson: source?.isPhysicalPerson,
    IsPublicOffer: source?.isPublicOffer,
    KsrCode: source?.ksrCode,
    KsrName: source?.ksrName,
    KsrUnit: source?.ksrUnit,
    Manufacturer: source?.manufacturer,
    ManufacturerCountryRegistryNumber: source?.manufacturerCountryRegistryNumber,
    ManufacturerCountryRegistryType: source?.manufacturerCountryRegistryType === null ? undefined : apiManufacturerCountryRegistryTypeEnumAdapter(source?.manufacturerCountryRegistryType),
    ManufacturerCountryScore: source?.manufacturerCountryScore,
    MovingProLink: source?.movingProLink,
    OfferOwner: source?.offerOwner,
    OfferState: source?.offerState === null ? undefined : apiParticipantOfferStateEnumAdapter(source?.offerState),
    OfferStateDescription: source?.offerStateDescription,
    OfferTerms: source?.offerTerms,
    OfferType: source?.offerType === null ? undefined : apiParticipantOfferTypeEnumAdapter(source?.offerType),
    OfferTypeDescription: source?.offerTypeDescription,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Values: source?.okpd2Values?.map((item) => apiOkpd2MarketDtoAdapter(item)),
    Params: source?.params?.map((item) => apiYmlParamDtoAdapter(item)),
    ParticipantCountry: source?.participantCountry === null ? undefined : apiOrganizationCountryAltEnumAdapter(source?.participantCountry),
    ParticipantForeignId: source?.participantForeignId,
    ParticipantGuid: source?.participantGuid,
    ParticipantId: source?.participantId,
    ParticipantInn: source?.participantInn,
    ParticipantKpp: source?.participantKpp,
    ParticipantName: source?.participantName,
    ParticipantOfferDocuments: source?.participantOfferDocuments?.map((item) => apiParticipantOfferDocumentDtoAdapter(item)),
    ParticipantOfferSource: source?.participantOfferSource === null ? undefined : apiParticipantOfferSourceEnumAdapter(source?.participantOfferSource),
    ParticipantOfferSpecific: source?.participantOfferSpecific === null ? undefined : apiParticipantOfferSpecificFlagEnumAdapter(source?.participantOfferSpecific),
    ParticipantSource: source?.participantSource,
    PossibleDeliveryBySeller: source?.possibleDeliveryBySeller,
    PossibleSelfDelivery: source?.possibleSelfDelivery,
    PossibleSendByTransportCompany: source?.possibleSendByTransportCompany,
    PriceListDeliveryRegionInfos: source?.priceListDeliveryRegionInfos?.map((item) => apiDeliveryRegionInfoDtoAdapter(item)),
    PriceListId: source?.priceListId,
    PriceListState: source?.priceListState === null ? undefined : apiPriceListStateEnumAdapter(source?.priceListState),
    PriceListType: source?.priceListType === null ? undefined : apiPriceListTypeEnumAdapter(source?.priceListType),
    PriceRegionDetails: source?.priceRegionDetails?.map((item) => apiPriceRegionDetailDtoAdapter(item)),
    PrintFormFileName: source?.printFormFileName,
    PrintFormGuid: source?.printFormGuid,
    Producer: source?.producer,
    ProductDescription: source?.productDescription,
    ProductMNN: source?.productMNN,
    ProductName: source?.productName,
    PublishDate: source?.publishDate,
    PublishDateStart: source?.publishDateStart,
    RecipientOrganizationInn: source?.recipientOrganizationInn,
    RecipientOrganizationKpp: source?.recipientOrganizationKpp,
    RecipientOrganizationName: source?.recipientOrganizationName,
    RegionalProductSignCanEdit: source?.regionalProductSignCanEdit,
    RegionalProductSignChecked: source?.regionalProductSignChecked,
    RegionalProductSignTenantId: source?.regionalProductSignTenantId,
    Regions: source?.regions?.map((item) => apiRegionKladrDtoAdapter(item)),
    RequestDateEnd: source?.requestDateEnd,
    RequestDateStart: source?.requestDateStart,
    SelfDeliveryPlace: source?.selfDeliveryPlace,
    SellerCode: source?.sellerCode,
    ShortOkeiName: source?.shortOkeiName,
    Signature: source?.signature,
    Tags: source?.tags?.map((item) => apiTagViewDtoAdapter(item)),
    TruType: source?.truType === null ? undefined : apiTruTypeEnumAdapter(source?.truType),
    UnitPrice: source?.unitPrice,
    UnitPriceInCurrency: source?.unitPriceInCurrency,
    UsedClassificatorType: source?.usedClassificatorType === null ? undefined : apiUsedClassificatorTypeEnumAdapter(source?.usedClassificatorType),
    UsedClassificatorTypeDescription: source?.usedClassificatorTypeDescription,
    VatRate: source?.vatRate,
    VatRateDecimal: source?.vatRateDecimal,
    VatRateDescription: source?.vatRateDescription,
    VatRateState: source?.vatRateState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatRateState),
    VendorCode: source?.vendorCode,
    WholesalePercentage: source?.wholesalePercentage,
  };
}

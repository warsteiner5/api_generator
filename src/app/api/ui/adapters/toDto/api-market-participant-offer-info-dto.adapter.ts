import { MarketParticipantOfferInfo } from '../../models/market-participant-offer-info.interface';
import { ApiMarketParticipantOfferInfoDto } from '../../../swagger/models/api-market-participant-offer-info-dto';
import { adaptApiB2BCategoryDto } from './api-b-2-b-category-dto.adapter';
import { adaptApiCharacteristicDto } from './api-characteristic-dto.adapter';
import { adaptApiCharacteristicValuesDto } from './api-characteristic-values-dto.adapter';
import { adaptApiCountryDto } from './api-country-dto.adapter';
import { adaptApiDeliveryRegionInfoDto } from './api-delivery-region-info-dto.adapter';
import { adaptApiDisplayCharacteristicDto } from './api-display-characteristic-dto.adapter';
import { adaptApiManufacturerCountryRegistryTypeEnum } from './api-manufacturer-country-registry-type-enum.adapter';
import { adaptApiOfferCreatedMethodEnum } from './api-offer-created-method-enum.adapter';
import { adaptApiOkpd2MarketDto } from './api-okpd-2-market-dto.adapter';
import { adaptApiOrganizationCountryAltEnum } from './api-organization-country.adapter';
import { adaptApiParticipantOfferActionsDto } from './api-participant-offer-actions-dto.adapter';
import { adaptApiParticipantOfferDocumentDto } from './api-participant-offer-document-dto.adapter';
import { adaptApiParticipantOfferSourceEnum } from './api-participant-offer-source-enum.adapter';
import { adaptApiParticipantOfferSpecificFlagEnum } from './api-participant-offer-specific-flag-enum.adapter';
import { adaptApiParticipantOfferStateEnum } from './api-participant-offer-state-enum.adapter';
import { adaptApiParticipantOfferTypeEnum } from './api-participant-offer-type-enum.adapter';
import { adaptApiPriceListStateEnum } from './api-price-list-state-enum.adapter';
import { adaptApiPriceListTypeEnum } from './api-price-list-type-enum.adapter';
import { adaptApiPriceRegionDetailDto } from './api-price-region-detail-dto.adapter';
import { adaptApiRegionKladrDto } from './api-region-kladr-dto.adapter';
import { adaptApiTagViewDto } from './api-tag-view-dto.adapter';
import { adaptApiTruTypeEnum } from './api-tru-type-enum.adapter';
import { adaptApiUsedClassificatorTypeEnum } from './api-used-classificator-type-enum.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';
import { adaptApiYmlParamDto } from './api-yml-param-dto.adapter';

export function adaptApiMarketParticipantOfferInfoDto(source?: MarketParticipantOfferInfo | null): ApiMarketParticipantOfferInfoDto {
  return {
    Actions: adaptApiParticipantOfferActionsDto(source?.actions),
    BarCode: source?.barCode,
    Category: adaptApiB2BCategoryDto(source?.category),
    CharacteristicValues: (source?.characteristicValues ?? []).map((item) => adaptApiCharacteristicValuesDto(item)),
    Characteristics: (source?.characteristics ?? []).map((item) => adaptApiCharacteristicDto(item)),
    ClassificatorCode: source?.classificatorCode,
    ClassificatorDescription: source?.classificatorDescription,
    Country: adaptApiCountryDto(source?.country),
    CountryCode: source?.countryCode,
    CountryOfOrigin: source?.countryOfOrigin,
    CreatedMethod: adaptApiOfferCreatedMethodEnum(source?.createdMethod),
    CurrencyCode: source?.currencyCode,
    DeliveryCost: source?.deliveryCost,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryRegionInfos: (source?.deliveryRegionInfos ?? []).map((item) => adaptApiDeliveryRegionInfoDto(item)),
    DeliveryRegions: source?.deliveryRegions,
    DeliveryTerms: source?.deliveryTerms,
    DisplayCharacteristics: (source?.displayCharacteristics ?? []).map((item) => adaptApiDisplayCharacteristicDto(item)),
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
    ManufacturerCountryRegistryType: adaptApiManufacturerCountryRegistryTypeEnum(source?.manufacturerCountryRegistryType),
    ManufacturerCountryScore: source?.manufacturerCountryScore,
    MovingProLink: source?.movingProLink,
    OfferOwner: source?.offerOwner,
    OfferState: adaptApiParticipantOfferStateEnum(source?.offerState),
    OfferStateDescription: source?.offerStateDescription,
    OfferTerms: source?.offerTerms,
    OfferType: adaptApiParticipantOfferTypeEnum(source?.offerType),
    OfferTypeDescription: source?.offerTypeDescription,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Values: (source?.okpd2Values ?? []).map((item) => adaptApiOkpd2MarketDto(item)),
    Params: (source?.params ?? []).map((item) => adaptApiYmlParamDto(item)),
    ParticipantCountry: adaptApiOrganizationCountryAltEnum(source?.participantCountry),
    ParticipantForeignId: source?.participantForeignId,
    ParticipantGuid: source?.participantGuid,
    ParticipantId: source?.participantId,
    ParticipantInn: source?.participantInn,
    ParticipantKpp: source?.participantKpp,
    ParticipantName: source?.participantName,
    ParticipantOfferDocuments: (source?.participantOfferDocuments ?? []).map((item) => adaptApiParticipantOfferDocumentDto(item)),
    ParticipantOfferSource: adaptApiParticipantOfferSourceEnum(source?.participantOfferSource),
    ParticipantOfferSpecific: adaptApiParticipantOfferSpecificFlagEnum(source?.participantOfferSpecific),
    ParticipantSource: source?.participantSource,
    PossibleDeliveryBySeller: source?.possibleDeliveryBySeller,
    PossibleSelfDelivery: source?.possibleSelfDelivery,
    PossibleSendByTransportCompany: source?.possibleSendByTransportCompany,
    PriceListDeliveryRegionInfos: (source?.priceListDeliveryRegionInfos ?? []).map((item) => adaptApiDeliveryRegionInfoDto(item)),
    PriceListId: source?.priceListId,
    PriceListState: adaptApiPriceListStateEnum(source?.priceListState),
    PriceListType: adaptApiPriceListTypeEnum(source?.priceListType),
    PriceRegionDetails: (source?.priceRegionDetails ?? []).map((item) => adaptApiPriceRegionDetailDto(item)),
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
    Regions: (source?.regions ?? []).map((item) => adaptApiRegionKladrDto(item)),
    RequestDateEnd: source?.requestDateEnd,
    RequestDateStart: source?.requestDateStart,
    SelfDeliveryPlace: source?.selfDeliveryPlace,
    SellerCode: source?.sellerCode,
    ShortOkeiName: source?.shortOkeiName,
    Signature: source?.signature,
    Tags: (source?.tags ?? []).map((item) => adaptApiTagViewDto(item)),
    TruType: adaptApiTruTypeEnum(source?.truType),
    UnitPrice: source?.unitPrice,
    UnitPriceInCurrency: source?.unitPriceInCurrency,
    UsedClassificatorType: adaptApiUsedClassificatorTypeEnum(source?.usedClassificatorType),
    UsedClassificatorTypeDescription: source?.usedClassificatorTypeDescription,
    VatRate: source?.vatRate,
    VatRateDecimal: source?.vatRateDecimal,
    VatRateDescription: source?.vatRateDescription,
    VatRateState: adaptApiVatRateStateEnum(source?.vatRateState),
    VendorCode: source?.vendorCode,
    WholesalePercentage: source?.wholesalePercentage,
  };
}

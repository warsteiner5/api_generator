import { RequirementRequest } from '../../models/requirement-request.interface';
import { ApiRequirementRequestDto } from '../../../swagger/models/api-requirement-request-dto';
import { apiCatalogItemDtoAdapter } from './api-catalog-item-dto.adapter';
import { apiCharacteristicDtoAdapter } from './api-characteristic-dto.adapter';
import { apiCharacteristicsSourceEnumAdapter } from '../enums/api-characteristics-source-enum.adapter';
import { apiConditionsOfPaymentEnumAdapter } from '../enums/api-conditions-of-payment-enum.adapter';
import { apiKladrRegionCodeDtoAdapter } from './api-kladr-region-code-dto.adapter';
import { apiPriceRegionDetailDtoAdapter } from './api-price-region-detail-dto.adapter';
import { apiRequirementRequestDocumentDtoAdapter } from './api-requirement-request-document-dto.adapter';
import { apiRequirementRequestStateEnumAdapter } from '../enums/api-requirement-request-state-enum.adapter';

export const apiRequirementRequestDtoAdapter = (source?: RequirementRequest | null): ApiRequirementRequestDto => {
  return {
    Category: source?.category === null ? undefined : apiCatalogItemDtoAdapter(source?.category),
    CategoryId: source?.categoryId,
    Characteristics: source?.characteristics?.map((item) => apiCharacteristicDtoAdapter(item)),
    CharacteristicsSource: source?.characteristicsSource === null ? undefined : apiCharacteristicsSourceEnumAdapter(source?.characteristicsSource),
    ConditionsOfPayment: source?.conditionsOfPayment === null ? undefined : apiConditionsOfPaymentEnumAdapter(source?.conditionsOfPayment),
    ContactAdditionalPhone: source?.contactAdditionalPhone,
    ContactFio: source?.contactFio,
    ContactPhone: source?.contactPhone,
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    Documents: source?.documents?.map((item) => apiRequirementRequestDocumentDtoAdapter(item)),
    EndDate: source?.endDate,
    Id: source?.id,
    IsOnlyForSmsp: source?.isOnlyForSmsp,
    KladrRegionCodes: source?.kladrRegionCodes?.map((item) => apiKladrRegionCodeDtoAdapter(item)),
    ManufacturerCountries: source?.manufacturerCountries,
    Manufacturers: source?.manufacturers,
    MinQuantity: source?.minQuantity,
    MinQuantityMax: source?.minQuantityMax,
    MinQuantityMin: source?.minQuantityMin,
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2: source?.okpd2,
    PriceRegionDetails: source?.priceRegionDetails?.map((item) => apiPriceRegionDetailDtoAdapter(item)),
    ProductName: source?.productName,
    Quantity: source?.quantity,
    RestQuantity: source?.restQuantity,
    SegmentId: source?.segmentId,
    SegmentName: source?.segmentName,
    StartDate: source?.startDate,
    State: source?.state === null ? undefined : apiRequirementRequestStateEnumAdapter(source?.state),
    TotalPrice: source?.totalPrice,
    UnitPrice: source?.unitPrice,
  };
}

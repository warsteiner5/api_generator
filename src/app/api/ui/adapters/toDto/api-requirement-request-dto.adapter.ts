import { RequirementRequest } from '../../models/requirement-request.interface';
import { ApiRequirementRequestDto } from '../../../swagger/models/api-requirement-request-dto';
import { adaptApiCatalogItemDto } from './api-catalog-item-dto.adapter';
import { adaptApiCharacteristicDto } from './api-characteristic-dto.adapter';
import { adaptApiCharacteristicsSourceEnum } from './api-characteristics-source-enum.adapter';
import { adaptApiConditionsOfPaymentEnum } from './api-conditions-of-payment-enum.adapter';
import { adaptApiKladrRegionCodeDto } from './api-kladr-region-code-dto.adapter';
import { adaptApiPriceRegionDetailDto } from './api-price-region-detail-dto.adapter';
import { adaptApiRequirementRequestDocumentDto } from './api-requirement-request-document-dto.adapter';
import { adaptApiRequirementRequestStateEnum } from './api-requirement-request-state-enum.adapter';

export function adaptApiRequirementRequestDto(source?: RequirementRequest | null): ApiRequirementRequestDto {
  return {
    Category: adaptApiCatalogItemDto(source?.category),
    CategoryId: source?.categoryId,
    Characteristics: (source?.characteristics ?? []).map((item) => adaptApiCharacteristicDto(item)),
    CharacteristicsSource: adaptApiCharacteristicsSourceEnum(source?.characteristicsSource),
    ConditionsOfPayment: adaptApiConditionsOfPaymentEnum(source?.conditionsOfPayment),
    ContactAdditionalPhone: source?.contactAdditionalPhone,
    ContactFio: source?.contactFio,
    ContactPhone: source?.contactPhone,
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    Documents: (source?.documents ?? []).map((item) => adaptApiRequirementRequestDocumentDto(item)),
    EndDate: source?.endDate,
    Id: source?.id,
    IsOnlyForSmsp: source?.isOnlyForSmsp,
    KladrRegionCodes: (source?.kladrRegionCodes ?? []).map((item) => adaptApiKladrRegionCodeDto(item)),
    ManufacturerCountries: source?.manufacturerCountries ?? [],
    Manufacturers: source?.manufacturers ?? [],
    MinQuantity: source?.minQuantity,
    MinQuantityMax: source?.minQuantityMax,
    MinQuantityMin: source?.minQuantityMin,
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2: source?.okpd2,
    PriceRegionDetails: (source?.priceRegionDetails ?? []).map((item) => adaptApiPriceRegionDetailDto(item)),
    ProductName: source?.productName,
    Quantity: source?.quantity,
    RestQuantity: source?.restQuantity,
    SegmentId: source?.segmentId,
    SegmentName: source?.segmentName,
    StartDate: source?.startDate,
    State: adaptApiRequirementRequestStateEnum(source?.state),
    TotalPrice: source?.totalPrice,
    UnitPrice: source?.unitPrice,
  };
}

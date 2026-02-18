import { ApiRequirementRequestDto } from '../../../swagger/models/api-requirement-request-dto';
import { RequirementRequest } from '../../models/requirement-request.interface';
import { adaptCatalogItemToUI } from './catalog-item.adapter';
import { adaptCharacteristicsSourceEnumToUI } from './characteristics-source-enum.adapter';
import { adaptCharacteristicToUI } from './characteristic.adapter';
import { adaptConditionsOfPaymentEnumToUI } from './conditions-of-payment-enum.adapter';
import { adaptKladrRegionCodeToUI } from './kladr-region-code.adapter';
import { adaptPriceRegionDetailToUI } from './price-region-detail.adapter';
import { adaptRequirementRequestDocumentToUI } from './requirement-request-document.adapter';
import { adaptRequirementRequestStateEnumToUI } from './requirement-request-state-enum.adapter';

export function adaptRequirementRequestToUI(source?: ApiRequirementRequestDto | null): RequirementRequest {
  return {
    category: adaptCatalogItemToUI(source?.Category),
    categoryId: source?.CategoryId ?? 0,
    characteristics: (source?.Characteristics ?? []).map((item) => adaptCharacteristicToUI(item)),
    characteristicsSource: adaptCharacteristicsSourceEnumToUI(source?.CharacteristicsSource),
    conditionsOfPayment: adaptConditionsOfPaymentEnumToUI(source?.ConditionsOfPayment),
    contactAdditionalPhone: source?.ContactAdditionalPhone ?? '',
    contactFio: source?.ContactFio ?? '',
    contactPhone: source?.ContactPhone ?? '',
    deliveryTerms: source?.DeliveryTerms ?? '',
    description: source?.Description ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptRequirementRequestDocumentToUI(item)),
    endDate: source?.EndDate ?? '',
    id: source?.Id ?? 0,
    isOnlyForSmsp: source?.IsOnlyForSmsp ?? false,
    kladrRegionCodes: (source?.KladrRegionCodes ?? []).map((item) => adaptKladrRegionCodeToUI(item)),
    manufacturerCountries: source?.ManufacturerCountries ?? [],
    manufacturers: source?.Manufacturers ?? [],
    minQuantity: source?.MinQuantity ?? 0,
    minQuantityMax: source?.MinQuantityMax ?? 0,
    minQuantityMin: source?.MinQuantityMin ?? 0,
    name: source?.Name ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okeiDescription: source?.OkeiDescription ?? '',
    okpd2: source?.Okpd2 ?? '',
    priceRegionDetails: (source?.PriceRegionDetails ?? []).map((item) => adaptPriceRegionDetailToUI(item)),
    productName: source?.ProductName ?? '',
    quantity: source?.Quantity ?? 0,
    restQuantity: source?.RestQuantity ?? 0,
    segmentId: source?.SegmentId ?? 0,
    segmentName: source?.SegmentName ?? '',
    startDate: source?.StartDate ?? '',
    state: adaptRequirementRequestStateEnumToUI(source?.State),
    totalPrice: source?.TotalPrice ?? 0,
    unitPrice: source?.UnitPrice ?? 0,
  };
}

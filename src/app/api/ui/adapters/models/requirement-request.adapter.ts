import { ApiRequirementRequestDto } from '../../../swagger/models/api-requirement-request-dto';
import { RequirementRequest } from '../../models/requirement-request.interface';
import { catalogItemAdapter } from './catalog-item.adapter';
import { characteristicAdapter } from './characteristic.adapter';
import { characteristicsSourceEnumAdapter } from '../enums/characteristics-source-enum.adapter';
import { conditionsOfPaymentEnumAdapter } from '../enums/conditions-of-payment-enum.adapter';
import { kladrRegionCodeAdapter } from './kladr-region-code.adapter';
import { priceRegionDetailAdapter } from './price-region-detail.adapter';
import { requirementRequestDocumentAdapter } from './requirement-request-document.adapter';
import { requirementRequestStateEnumAdapter } from '../enums/requirement-request-state-enum.adapter';

export const requirementRequestAdapter = (source?: ApiRequirementRequestDto | null): RequirementRequest => {
  return {
    category: source?.Category === null ? undefined : catalogItemAdapter(source?.Category),
    categoryId: source?.CategoryId,
    characteristics: source?.Characteristics?.map((item) => characteristicAdapter(item)),
    characteristicsSource: source?.CharacteristicsSource === null ? undefined : characteristicsSourceEnumAdapter(source?.CharacteristicsSource),
    conditionsOfPayment: source?.ConditionsOfPayment === null ? undefined : conditionsOfPaymentEnumAdapter(source?.ConditionsOfPayment),
    contactAdditionalPhone: source?.ContactAdditionalPhone,
    contactFio: source?.ContactFio,
    contactPhone: source?.ContactPhone,
    deliveryTerms: source?.DeliveryTerms,
    description: source?.Description,
    documents: source?.Documents?.map((item) => requirementRequestDocumentAdapter(item)),
    endDate: source?.EndDate,
    id: source?.Id,
    isOnlyForSmsp: source?.IsOnlyForSmsp,
    kladrRegionCodes: source?.KladrRegionCodes?.map((item) => kladrRegionCodeAdapter(item)),
    manufacturerCountries: source?.ManufacturerCountries,
    manufacturers: source?.Manufacturers,
    minQuantity: source?.MinQuantity,
    minQuantityMax: source?.MinQuantityMax,
    minQuantityMin: source?.MinQuantityMin,
    name: source?.Name,
    okeiCode: source?.OkeiCode,
    okeiDescription: source?.OkeiDescription,
    okpd2: source?.Okpd2,
    priceRegionDetails: source?.PriceRegionDetails?.map((item) => priceRegionDetailAdapter(item)),
    productName: source?.ProductName,
    quantity: source?.Quantity,
    restQuantity: source?.RestQuantity,
    segmentId: source?.SegmentId,
    segmentName: source?.SegmentName,
    startDate: source?.StartDate,
    state: source?.State === null ? undefined : requirementRequestStateEnumAdapter(source?.State),
    totalPrice: source?.TotalPrice,
    unitPrice: source?.UnitPrice,
  };
}

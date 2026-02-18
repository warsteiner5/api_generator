import { CompetitiveListItemForView } from '../../models/competitive-list-item-for-view.interface';
import { ApiCompetitiveListItemForViewDto } from '../../../swagger/models/api-competitive-list-item-for-view-dto';
import { adaptApiCharacteristicValuesDto } from './api-characteristic-values-dto.adapter';
import { adaptApiCompetitiveListItemDocumentDto } from './api-competitive-list-item-document-dto.adapter';
import { adaptApiPriceRegionDetailDto } from './api-price-region-detail-dto.adapter';
import { adaptApiSupplierCharacteristicForViewDto } from './api-supplier-characteristic-for-view-dto.adapter';

export function adaptApiCompetitiveListItemForViewDto(source?: CompetitiveListItemForView | null): ApiCompetitiveListItemForViewDto {
  return {
    CharacteristicsValues: (source?.characteristicsValues ?? []).map((item) => adaptApiCharacteristicValuesDto(item)),
    Comment: source?.comment,
    Documents: (source?.documents ?? []).map((item) => adaptApiCompetitiveListItemDocumentDto(item)),
    Id: source?.id,
    Manufacture: source?.manufacture,
    ManufactureCountry: source?.manufactureCountry,
    OkeiCode: source?.okeiCode,
    Okpd2: source?.okpd2,
    PriceRegionDetails: (source?.priceRegionDetails ?? []).map((item) => adaptApiPriceRegionDetailDto(item)),
    Quantity: source?.quantity,
    RequirementRequestId: source?.requirementRequestId,
    SupplierCharacteristics: (source?.supplierCharacteristics ?? []).map((item) => adaptApiSupplierCharacteristicForViewDto(item)),
    SupplierId: source?.supplierId,
    UnitPrice: source?.unitPrice,
    UsePriceForAllRegions: source?.usePriceForAllRegions,
  };
}

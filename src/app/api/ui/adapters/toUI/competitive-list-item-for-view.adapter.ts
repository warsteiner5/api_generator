import { ApiCompetitiveListItemForViewDto } from '../../../swagger/models/api-competitive-list-item-for-view-dto';
import { CompetitiveListItemForView } from '../../models/competitive-list-item-for-view.interface';
import { adaptCharacteristicValuesToUI } from './characteristic-values.adapter';
import { adaptCompetitiveListItemDocumentToUI } from './competitive-list-item-document.adapter';
import { adaptPriceRegionDetailToUI } from './price-region-detail.adapter';
import { adaptSupplierCharacteristicForViewToUI } from './supplier-characteristic-for-view.adapter';

export function adaptCompetitiveListItemForViewToUI(source?: ApiCompetitiveListItemForViewDto | null): CompetitiveListItemForView {
  return {
    characteristicsValues: (source?.CharacteristicsValues ?? []).map((item) => adaptCharacteristicValuesToUI(item)),
    comment: source?.Comment ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptCompetitiveListItemDocumentToUI(item)),
    id: source?.Id ?? 0,
    manufacture: source?.Manufacture ?? '',
    manufactureCountry: source?.ManufactureCountry ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okpd2: source?.Okpd2 ?? '',
    priceRegionDetails: (source?.PriceRegionDetails ?? []).map((item) => adaptPriceRegionDetailToUI(item)),
    quantity: source?.Quantity ?? 0,
    requirementRequestId: source?.RequirementRequestId ?? 0,
    supplierCharacteristics: (source?.SupplierCharacteristics ?? []).map((item) => adaptSupplierCharacteristicForViewToUI(item)),
    supplierId: source?.SupplierId ?? 0,
    unitPrice: source?.UnitPrice ?? 0,
    usePriceForAllRegions: source?.UsePriceForAllRegions ?? false,
  };
}

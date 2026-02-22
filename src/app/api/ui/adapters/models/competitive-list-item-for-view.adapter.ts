import { ApiCompetitiveListItemForViewDto } from '../../../swagger/models/api-competitive-list-item-for-view-dto';
import { CompetitiveListItemForView } from '../../models/competitive-list-item-for-view.interface';
import { characteristicValuesAdapter } from './characteristic-values.adapter';
import { competitiveListItemDocumentAdapter } from './competitive-list-item-document.adapter';
import { priceRegionDetailAdapter } from './price-region-detail.adapter';
import { supplierCharacteristicForViewAdapter } from './supplier-characteristic-for-view.adapter';

export const competitiveListItemForViewAdapter = (source?: ApiCompetitiveListItemForViewDto | null): CompetitiveListItemForView => {
  return {
    characteristicsValues: source?.CharacteristicsValues?.map((item) => characteristicValuesAdapter(item)),
    comment: source?.Comment,
    documents: source?.Documents?.map((item) => competitiveListItemDocumentAdapter(item)),
    id: source?.Id,
    manufacture: source?.Manufacture,
    manufactureCountry: source?.ManufactureCountry,
    okeiCode: source?.OkeiCode,
    okpd2: source?.Okpd2,
    priceRegionDetails: source?.PriceRegionDetails?.map((item) => priceRegionDetailAdapter(item)),
    quantity: source?.Quantity,
    requirementRequestId: source?.RequirementRequestId,
    supplierCharacteristics: source?.SupplierCharacteristics?.map((item) => supplierCharacteristicForViewAdapter(item)),
    supplierId: source?.SupplierId,
    unitPrice: source?.UnitPrice,
    usePriceForAllRegions: source?.UsePriceForAllRegions,
  };
}

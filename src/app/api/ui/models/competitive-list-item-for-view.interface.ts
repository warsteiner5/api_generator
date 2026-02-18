import { CharacteristicValues } from './characteristic-values.interface';
import { CompetitiveListItemDocument } from './competitive-list-item-document.interface';
import { PriceRegionDetail } from './price-region-detail.interface';
import { SupplierCharacteristicForView } from './supplier-characteristic-for-view.interface';

export interface CompetitiveListItemForView {
  characteristicsValues: CharacteristicValues[];
  comment: string;
  documents: CompetitiveListItemDocument[];
  id: number;
  manufacture: string;
  manufactureCountry: string;
  okeiCode: string;
  okpd2: string;
  priceRegionDetails: PriceRegionDetail[];
  quantity: number;
  requirementRequestId: number;
  supplierCharacteristics: SupplierCharacteristicForView[];
  supplierId: number;
  unitPrice: number;
  usePriceForAllRegions: boolean;
}

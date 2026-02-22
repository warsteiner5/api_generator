import { EquivalentTablePriceRegionDetail } from './equivalent-table-price-region-detail.interface';

// @ts-ignore
export interface EquivalentTableOffer {
  id: number;
  minQuantity: number;
  offerTerms: string;
  okeiCode: string;
  pictureGuid: string;
  price: number;
  priceListId: number;
  priceRegionDetails: EquivalentTablePriceRegionDetail[];
  productName: string;
  quantity: number;
  shortOkeiName: string;
}

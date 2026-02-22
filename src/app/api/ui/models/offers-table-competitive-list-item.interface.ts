import { CompetitiveListItemDocument } from './competitive-list-item-document.interface';
import { CompetitiveListItemStateEnum } from '../enums/competitive-list-item-state.enum';
import { PriceRegionDetail } from './price-region-detail.interface';

// @ts-ignore
export interface OffersTableCompetitiveListItem {
  comment: string;
  competitiveListItemId: number;
  manufacturerCountries: string[];
  manufacturers: string[];
  participantOfferDocuments: CompetitiveListItemDocument[];
  participantOfferId: number;
  priceRegionDetails: PriceRegionDetail[];
  state: CompetitiveListItemStateEnum;
  supplierId: number;
  supplierName: string;
  unitPrice: number;
  usePriceForAllRegions: boolean;
}

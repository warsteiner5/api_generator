/* tslint:disable */
/* eslint-disable */
import { ApiEquivalentTablePriceRegionDetailDto } from '../models/api-equivalent-table-price-region-detail-dto';
export interface ApiEquivalentTableOfferDto {
  Id?: number;
  MinQuantity?: number | null;
  OfferTerms?: string | null;
  OkeiCode?: string | null;
  PictureGuid?: string | null;
  Price?: number | null;
  PriceListId?: number | null;
  PriceRegionDetails?: Array<ApiEquivalentTablePriceRegionDetailDto> | null;
  ProductName?: string | null;
  Quantity?: number | null;
  ShortOkeiName?: string | null;
}

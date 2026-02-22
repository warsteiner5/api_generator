import { MarketOfferShortModel } from './market-offer-short-model.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfMarketOfferShortModel {
  currentPage: number;
  items: MarketOfferShortModel[];
  total: number;
  totalPages: number;
}

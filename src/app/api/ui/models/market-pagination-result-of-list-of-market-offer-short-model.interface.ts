import { MarketOfferShortModel } from './market-offer-short-model.interface';

export interface MarketPaginationResultOfListOfMarketOfferShortModel {
  currentPage: number;
  items: MarketOfferShortModel[];
  total: number;
  totalPages: number;
}

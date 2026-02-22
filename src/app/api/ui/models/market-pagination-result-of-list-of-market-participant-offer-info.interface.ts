import { MarketParticipantOfferInfo } from './market-participant-offer-info.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfMarketParticipantOfferInfo {
  currentPage: number;
  items: MarketParticipantOfferInfo[];
  total: number;
  totalPages: number;
}

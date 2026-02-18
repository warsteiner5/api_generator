import { MarketParticipantOfferInfo } from './market-participant-offer-info.interface';

export interface MarketPaginationResultOfListOfMarketParticipantOfferInfo {
  currentPage: number;
  items: MarketParticipantOfferInfo[];
  total: number;
  totalPages: number;
}

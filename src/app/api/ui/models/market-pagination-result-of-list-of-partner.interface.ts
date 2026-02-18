import { Partner } from './partner.interface';

export interface MarketPaginationResultOfListOfPartner {
  currentPage: number;
  items: Partner[];
  total: number;
  totalPages: number;
}

import { Partner } from './partner.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfPartner {
  currentPage: number;
  items: Partner[];
  total: number;
  totalPages: number;
}

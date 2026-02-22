import { NicRegistryGrid } from './nic-registry-grid.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfNicRegistryGrid {
  currentPage: number;
  items: NicRegistryGrid[];
  total: number;
  totalPages: number;
}

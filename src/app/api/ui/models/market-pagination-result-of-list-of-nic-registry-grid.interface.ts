import { NicRegistryGrid } from './nic-registry-grid.interface';

export interface MarketPaginationResultOfListOfNicRegistryGrid {
  currentPage: number;
  items: NicRegistryGrid[];
  total: number;
  totalPages: number;
}

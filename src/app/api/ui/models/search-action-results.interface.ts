import { MarketEntityTypeEnum } from '../enums/market-entity-type.enum';

export interface SearchActionResults {
  entityId: number;
  entityType: MarketEntityTypeEnum;
  name: string;
  numberInOrder: number;
  pageNum: number;
  price: number;
}

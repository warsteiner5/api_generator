import { FilterParameter } from './filter-parameter.interface';
import { FilterSourceTypeEnum } from '../enums/filter-source-type.enum';
import { MarketSearchActionEnum } from '../enums/market-search-action.enum';
import { SearchActionResults } from './search-action-results.interface';

export interface SearchActionMessage {
  filterParameters: FilterParameter[];
  filterSource: FilterSourceTypeEnum;
  keyWords: string;
  marketSearchAction: MarketSearchActionEnum;
  organizationId: number;
  searchActionResults: SearchActionResults[];
  searchDuration: number;
  tenantId: number;
  url: string;
  userGuid: string;
  userId: number;
}

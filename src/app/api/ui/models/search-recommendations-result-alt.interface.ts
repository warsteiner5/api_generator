import { SearchResultTypeAltEnum } from '../enums/search-result-type-alt.enum';
import { TradeRecommendation } from './trade-recommendation.interface';

export interface SearchRecommendationsResultAlt {
  items: TradeRecommendation[];
  resultType: SearchResultTypeAltEnum;
}

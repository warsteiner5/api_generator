import { ApiCompetitiveListMinPriceDto } from '../../../swagger/models/api-competitive-list-min-price-dto';
import { CompetitiveListMinPrice } from '../../models/competitive-list-min-price.interface';

export const competitiveListMinPriceAdapter = (source?: ApiCompetitiveListMinPriceDto | null): CompetitiveListMinPrice => {
  return {
    competitiveListId: source?.CompetitiveListId,
    minPrice: source?.MinPrice,
  };
}

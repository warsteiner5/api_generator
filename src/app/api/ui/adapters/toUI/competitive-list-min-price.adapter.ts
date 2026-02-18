import { ApiCompetitiveListMinPriceDto } from '../../../swagger/models/api-competitive-list-min-price-dto';
import { CompetitiveListMinPrice } from '../../models/competitive-list-min-price.interface';

export function adaptCompetitiveListMinPriceToUI(source?: ApiCompetitiveListMinPriceDto | null): CompetitiveListMinPrice {
  return {
    competitiveListId: source?.CompetitiveListId ?? 0,
    minPrice: source?.MinPrice ?? 0,
  };
}

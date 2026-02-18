import { CompetitiveListMinPrice } from '../../models/competitive-list-min-price.interface';
import { ApiCompetitiveListMinPriceDto } from '../../../swagger/models/api-competitive-list-min-price-dto';

export function adaptApiCompetitiveListMinPriceDto(source?: CompetitiveListMinPrice | null): ApiCompetitiveListMinPriceDto {
  return {
    CompetitiveListId: source?.competitiveListId,
    MinPrice: source?.minPrice,
  };
}

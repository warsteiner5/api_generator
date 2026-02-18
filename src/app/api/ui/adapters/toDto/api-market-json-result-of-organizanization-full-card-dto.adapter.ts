import { MarketJsonResultOfOrganizanizationFullCard } from '../../models/market-json-result-of-organizanization-full-card.interface';
import { ApiMarketJsonResultOfOrganizanizationFullCardDto } from '../../../swagger/models/api-market-json-result-of-organizanization-full-card-dto';

export function adaptApiMarketJsonResultOfOrganizanizationFullCardDto(source?: MarketJsonResultOfOrganizanizationFullCard | null): ApiMarketJsonResultOfOrganizanizationFullCardDto {
  return (source ?? {}) as ApiMarketJsonResultOfOrganizanizationFullCardDto;
}

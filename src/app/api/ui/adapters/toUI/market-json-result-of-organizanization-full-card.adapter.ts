import { ApiMarketJsonResultOfOrganizanizationFullCardDto } from '../../../swagger/models/api-market-json-result-of-organizanization-full-card-dto';
import { MarketJsonResultOfOrganizanizationFullCard } from '../../models/market-json-result-of-organizanization-full-card.interface';

export function adaptMarketJsonResultOfOrganizanizationFullCardToUI(source?: ApiMarketJsonResultOfOrganizanizationFullCardDto | null): MarketJsonResultOfOrganizanizationFullCard {
  return (source ?? {}) as MarketJsonResultOfOrganizanizationFullCard;
}

import { ApiEquivalentTableCompetitiveListItemDto } from '../../../swagger/models/api-equivalent-table-competitive-list-item-dto';
import { EquivalentTableCompetitiveListItem } from '../../models/equivalent-table-competitive-list-item.interface';
import { equivalentTableOfferAdapter } from './equivalent-table-offer.adapter';

export const equivalentTableCompetitiveListItemAdapter = (source?: ApiEquivalentTableCompetitiveListItemDto | null): EquivalentTableCompetitiveListItem => {
  return {
    comment: source?.Comment,
    competitiveListItemId: source?.CompetitiveListItemId,
    isMine: source?.IsMine,
    manufacturerCountries: source?.ManufacturerCountries,
    manufacturers: source?.Manufacturers,
    offer: source?.Offer === null ? undefined : equivalentTableOfferAdapter(source?.Offer),
  };
}

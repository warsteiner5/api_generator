import { ApiEquivalentTableCompetitiveListItemDto } from '../../../swagger/models/api-equivalent-table-competitive-list-item-dto';
import { EquivalentTableCompetitiveListItem } from '../../models/equivalent-table-competitive-list-item.interface';
import { adaptEquivalentTableOfferToUI } from './equivalent-table-offer.adapter';

export function adaptEquivalentTableCompetitiveListItemToUI(source?: ApiEquivalentTableCompetitiveListItemDto | null): EquivalentTableCompetitiveListItem {
  return {
    comment: source?.Comment ?? '',
    competitiveListItemId: source?.CompetitiveListItemId ?? 0,
    isMine: source?.IsMine ?? false,
    manufacturerCountries: source?.ManufacturerCountries ?? [],
    manufacturers: source?.Manufacturers ?? [],
    offer: adaptEquivalentTableOfferToUI(source?.Offer),
  };
}

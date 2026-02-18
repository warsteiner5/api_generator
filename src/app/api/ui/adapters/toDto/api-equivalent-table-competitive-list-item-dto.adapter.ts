import { EquivalentTableCompetitiveListItem } from '../../models/equivalent-table-competitive-list-item.interface';
import { ApiEquivalentTableCompetitiveListItemDto } from '../../../swagger/models/api-equivalent-table-competitive-list-item-dto';
import { adaptApiEquivalentTableOfferDto } from './api-equivalent-table-offer-dto.adapter';

export function adaptApiEquivalentTableCompetitiveListItemDto(source?: EquivalentTableCompetitiveListItem | null): ApiEquivalentTableCompetitiveListItemDto {
  return {
    Comment: source?.comment,
    CompetitiveListItemId: source?.competitiveListItemId,
    IsMine: source?.isMine,
    ManufacturerCountries: source?.manufacturerCountries ?? [],
    Manufacturers: source?.manufacturers ?? [],
    Offer: adaptApiEquivalentTableOfferDto(source?.offer),
  };
}

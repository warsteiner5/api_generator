import { EquivalentTableOffer } from './equivalent-table-offer.interface';

export interface EquivalentTableCompetitiveListItem {
  comment: string;
  competitiveListItemId: number;
  isMine: boolean;
  manufacturerCountries: string[];
  manufacturers: string[];
  offer: EquivalentTableOffer;
}

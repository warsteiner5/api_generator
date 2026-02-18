/* tslint:disable */
/* eslint-disable */
import { ApiEquivalentTableOfferDto } from '../models/api-equivalent-table-offer-dto';
export interface ApiEquivalentTableCompetitiveListItemDto {
  Comment?: string | null;
  CompetitiveListItemId?: number;
  IsMine?: boolean;
  ManufacturerCountries?: Array<string> | null;
  Manufacturers?: Array<string> | null;
  Offer?: ApiEquivalentTableOfferDto | null;
}

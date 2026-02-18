/* tslint:disable */
/* eslint-disable */
import { ApiCompetitiveListItemStateEnum } from '../models/api-competitive-list-item-state-enum';
export interface ApiOffersTableCharacteristicValuesDto {
  CharacteristicId?: number;
  Comment?: string | null;
  CompetitiveListItemId?: number;
  CompetitiveListItemState?: ApiCompetitiveListItemStateEnum | null;
  Id?: number;
  SupplierId?: number;
  SupplierName?: string | null;
  Value?: string | null;
  Value2?: string | null;
}

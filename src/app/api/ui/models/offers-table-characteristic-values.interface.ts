import { CompetitiveListItemStateEnum } from '../enums/competitive-list-item-state.enum';

// @ts-ignore
export interface OffersTableCharacteristicValues {
  characteristicId: number;
  comment: string;
  competitiveListItemId: number;
  competitiveListItemState: CompetitiveListItemStateEnum;
  id: number;
  supplierId: number;
  supplierName: string;
  value: string;
  value2: string;
}

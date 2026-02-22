import { StopListItem } from './stop-list-item.interface';

// @ts-ignore
export interface StopListItemExtended {
  logoFileGuid: string;
  stopListItemDtos: StopListItem[];
  supplierAdress: string;
  supplierEmail: string;
  supplierName: string;
  supplierPhone: string;
  supplierSite: string;
}

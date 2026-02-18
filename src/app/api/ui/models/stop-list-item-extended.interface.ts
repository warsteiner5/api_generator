import { StopListItem } from './stop-list-item.interface';

export interface StopListItemExtended {
  logoFileGuid: string;
  stopListItemDtos: StopListItem[];
  supplierAdress: string;
  supplierEmail: string;
  supplierName: string;
  supplierPhone: string;
  supplierSite: string;
}

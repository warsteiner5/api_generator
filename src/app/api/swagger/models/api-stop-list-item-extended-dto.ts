/* tslint:disable */
/* eslint-disable */
import { ApiStopListItemDto } from '../models/api-stop-list-item-dto';
export interface ApiStopListItemExtendedDto {
  LogoFileGuid?: string | null;
  StopListItemDtos?: Array<ApiStopListItemDto> | null;
  SupplierAdress?: string | null;
  SupplierEmail?: string | null;
  SupplierName?: string | null;
  SupplierPhone?: string | null;
  SupplierSite?: string | null;
}

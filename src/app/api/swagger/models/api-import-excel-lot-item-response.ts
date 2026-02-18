/* tslint:disable */
/* eslint-disable */
import { ApiImportExcelLotItemAltDto } from '../models/api-import-excel-lot-item';
export interface ApiImportExcelLotItemResponseAltDto {
  AllIsEmpty?: boolean;
  FileGuidWithExceptions?: string | null;
  ImportExcelLotItem?: Array<ApiImportExcelLotItemAltDto> | null;
}

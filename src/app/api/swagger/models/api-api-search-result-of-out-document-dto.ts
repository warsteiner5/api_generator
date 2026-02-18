/* tslint:disable */
/* eslint-disable */
import { ApiOutDocumentDto } from '../models/api-out-document-dto';
export interface ApiApiSearchResultOfOutDocumentDto {
  currpage?: number;
  invdata?: Array<ApiOutDocumentDto> | null;
  showTotal?: boolean;
  totalpages?: number;
  totalrecords?: number;
}

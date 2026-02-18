/* tslint:disable */
/* eslint-disable */
import { ApiRegulationDocumentViewDto } from '../models/api-regulation-document-view-dto';
export interface ApiSearchResultOfRegulationDocumentViewDto {
  CurrentPage?: number;
  Infos?: Array<ApiRegulationDocumentViewDto> | null;
  ShowTotal?: boolean;
  TotalPages?: number;
  TotalRecords?: number;
}

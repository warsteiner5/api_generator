import { RegulationDocumentView } from './regulation-document-view.interface';

// @ts-ignore
export interface SearchResultOfRegulationDocumentView {
  currentPage: number;
  infos: RegulationDocumentView[];
  showTotal: boolean;
  totalPages: number;
  totalRecords: number;
}

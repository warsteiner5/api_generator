import { RegulationDocumentView } from './regulation-document-view.interface';

export interface SearchResultOfRegulationDocumentView {
  currentPage: number;
  infos: RegulationDocumentView[];
  showTotal: boolean;
  totalPages: number;
  totalRecords: number;
}

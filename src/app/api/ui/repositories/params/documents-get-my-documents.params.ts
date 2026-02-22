import { DocumentsGetMyDocuments$Params } from '../../../swagger/fn/documents/documents-get-my-documents';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface DocumentsGetMyDocumentsParams {
  body?: SearchObjectAlt;
}

export function documentsGetMyDocumentsAdapter(params?: DocumentsGetMyDocumentsParams): DocumentsGetMyDocuments$Params {
  if (!params) {
    return {} as DocumentsGetMyDocuments$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

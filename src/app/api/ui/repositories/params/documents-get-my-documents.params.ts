import { DocumentsGetMyDocuments$Params } from '../../../swagger/fn/documents/documents-get-my-documents';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface DocumentsGetMyDocumentsParams {
  body?: SearchObjectAlt;
}

export const documentsGetMyDocumentsParamsAdapter = {
  adapt(params?: DocumentsGetMyDocumentsParams): DocumentsGetMyDocuments$Params {
    if (!params) {
      return {} as DocumentsGetMyDocuments$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};

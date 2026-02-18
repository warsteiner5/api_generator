import { DocumentsDeleteDocument$Params } from '../../../swagger/fn/documents/documents-delete-document';

export interface DocumentsDeleteDocumentParams {
  id: number;
}

export const documentsDeleteDocumentParamsAdapter = {
  adapt(params?: DocumentsDeleteDocumentParams): DocumentsDeleteDocument$Params {
    if (!params) {
      return {} as DocumentsDeleteDocument$Params;
    }
    return {
      id: params.id,
    };
  }
};

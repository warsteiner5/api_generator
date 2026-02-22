import { DocumentsDeleteDocument$Params } from '../../../swagger/fn/documents/documents-delete-document';

// @ts-ignore
export interface DocumentsDeleteDocumentParams {
  id: number;
}

export function documentsDeleteDocumentAdapter(params?: DocumentsDeleteDocumentParams): DocumentsDeleteDocument$Params {
  if (!params) {
    return {} as DocumentsDeleteDocument$Params;
  }
  return {
      id: params.id,
  };
}

import { OutDocumentFilter } from '../../models/out-document-filter.interface';
import { OutDocumentGetOutDocuments$Params } from '../../../swagger/fn/out-document/out-document-get-out-documents';
import { apiOutDocumentFilterDtoAdapter } from '../../adapters/models/api-out-document-filter-dto.adapter';

// @ts-ignore
export interface OutDocumentGetOutDocumentsParams {
  body?: OutDocumentFilter;
}

export function outDocumentGetOutDocumentsAdapter(params?: OutDocumentGetOutDocumentsParams): OutDocumentGetOutDocuments$Params {
  if (!params) {
    return {} as OutDocumentGetOutDocuments$Params;
  }
  return {
      body: apiOutDocumentFilterDtoAdapter(params.body),
  };
}

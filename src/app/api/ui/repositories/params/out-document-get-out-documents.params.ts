import { OutDocumentFilter } from '../../models/out-document-filter.interface';
import { OutDocumentGetOutDocuments$Params } from '../../../swagger/fn/out-document/out-document-get-out-documents';
import { adaptApiOutDocumentFilterDto } from '../../adapters/toDto/api-out-document-filter-dto.adapter';

export interface OutDocumentGetOutDocumentsParams {
  body?: OutDocumentFilter;
}

export const outDocumentGetOutDocumentsParamsAdapter = {
  adapt(params?: OutDocumentGetOutDocumentsParams): OutDocumentGetOutDocuments$Params {
    if (!params) {
      return {} as OutDocumentGetOutDocuments$Params;
    }
    return {
      body: adaptApiOutDocumentFilterDto(params.body),
    };
  }
};

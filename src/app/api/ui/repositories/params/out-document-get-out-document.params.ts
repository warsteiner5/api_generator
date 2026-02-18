import { OutDocumentGetOutDocument$Params } from '../../../swagger/fn/out-document/out-document-get-out-document';

export interface OutDocumentGetOutDocumentParams {
  id: number;
  externalSystemId: number;
}

export const outDocumentGetOutDocumentParamsAdapter = {
  adapt(params?: OutDocumentGetOutDocumentParams): OutDocumentGetOutDocument$Params {
    if (!params) {
      return {} as OutDocumentGetOutDocument$Params;
    }
    return {
      id: params.id,
      externalSystemId: params.externalSystemId,
    };
  }
};

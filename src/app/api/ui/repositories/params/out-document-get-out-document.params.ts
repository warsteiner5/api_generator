import { OutDocumentGetOutDocument$Params } from '../../../swagger/fn/out-document/out-document-get-out-document';

// @ts-ignore
export interface OutDocumentGetOutDocumentParams {
  id: number;
  externalSystemId: number;
}

export function outDocumentGetOutDocumentAdapter(params?: OutDocumentGetOutDocumentParams): OutDocumentGetOutDocument$Params {
  if (!params) {
    return {} as OutDocumentGetOutDocument$Params;
  }
  return {
      id: params.id,
      externalSystemId: params.externalSystemId,
  };
}

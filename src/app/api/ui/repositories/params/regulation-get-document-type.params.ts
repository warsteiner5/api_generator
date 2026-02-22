import { RegulationGetDocumentType$Params } from '../../../swagger/fn/regulation/regulation-get-document-type';

// @ts-ignore
export interface RegulationGetDocumentTypeParams {
  id: number;
}

export function regulationGetDocumentTypeAdapter(params?: RegulationGetDocumentTypeParams): RegulationGetDocumentType$Params {
  if (!params) {
    return {} as RegulationGetDocumentType$Params;
  }
  return {
      id: params.id,
  };
}

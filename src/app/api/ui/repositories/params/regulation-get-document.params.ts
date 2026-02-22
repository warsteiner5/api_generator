import { RegulationGetDocument$Params } from '../../../swagger/fn/regulation/regulation-get-document';

// @ts-ignore
export interface RegulationGetDocumentParams {
  id: number;
}

export function regulationGetDocumentAdapter(params?: RegulationGetDocumentParams): RegulationGetDocument$Params {
  if (!params) {
    return {} as RegulationGetDocument$Params;
  }
  return {
      id: params.id,
  };
}

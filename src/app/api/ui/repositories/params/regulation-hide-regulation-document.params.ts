import { RegulationHideRegulationDocument$Params } from '../../../swagger/fn/regulation/regulation-hide-regulation-document';

// @ts-ignore
export interface RegulationHideRegulationDocumentParams {
  id: number;
}

export function regulationHideRegulationDocumentAdapter(params?: RegulationHideRegulationDocumentParams): RegulationHideRegulationDocument$Params {
  if (!params) {
    return {} as RegulationHideRegulationDocument$Params;
  }
  return {
      id: params.id,
  };
}

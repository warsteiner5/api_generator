import { RegulationHideRegulationDocumentType$Params } from '../../../swagger/fn/regulation/regulation-hide-regulation-document-type';

// @ts-ignore
export interface RegulationHideRegulationDocumentTypeParams {
  id: number;
}

export function regulationHideRegulationDocumentTypeAdapter(params?: RegulationHideRegulationDocumentTypeParams): RegulationHideRegulationDocumentType$Params {
  if (!params) {
    return {} as RegulationHideRegulationDocumentType$Params;
  }
  return {
      id: params.id,
  };
}

import { RegulationHideRegulationDocument$Params } from '../../../swagger/fn/regulation/regulation-hide-regulation-document';

export interface RegulationHideRegulationDocumentParams {
  id: number;
}

export const regulationHideRegulationDocumentParamsAdapter = {
  adapt(params?: RegulationHideRegulationDocumentParams): RegulationHideRegulationDocument$Params {
    if (!params) {
      return {} as RegulationHideRegulationDocument$Params;
    }
    return {
      id: params.id,
    };
  }
};

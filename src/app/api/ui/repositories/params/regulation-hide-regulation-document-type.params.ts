import { RegulationHideRegulationDocumentType$Params } from '../../../swagger/fn/regulation/regulation-hide-regulation-document-type';

export interface RegulationHideRegulationDocumentTypeParams {
  id: number;
}

export const regulationHideRegulationDocumentTypeParamsAdapter = {
  adapt(params?: RegulationHideRegulationDocumentTypeParams): RegulationHideRegulationDocumentType$Params {
    if (!params) {
      return {} as RegulationHideRegulationDocumentType$Params;
    }
    return {
      id: params.id,
    };
  }
};

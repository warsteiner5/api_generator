import { RegulationGetDocumentType$Params } from '../../../swagger/fn/regulation/regulation-get-document-type';

export interface RegulationGetDocumentTypeParams {
  id: number;
}

export const regulationGetDocumentTypeParamsAdapter = {
  adapt(params?: RegulationGetDocumentTypeParams): RegulationGetDocumentType$Params {
    if (!params) {
      return {} as RegulationGetDocumentType$Params;
    }
    return {
      id: params.id,
    };
  }
};

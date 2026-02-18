import { RegulationGetDocument$Params } from '../../../swagger/fn/regulation/regulation-get-document';

export interface RegulationGetDocumentParams {
  id: number;
}

export const regulationGetDocumentParamsAdapter = {
  adapt(params?: RegulationGetDocumentParams): RegulationGetDocument$Params {
    if (!params) {
      return {} as RegulationGetDocument$Params;
    }
    return {
      id: params.id,
    };
  }
};

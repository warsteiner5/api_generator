import { RegulationGetRegulationDocumentTypes$Params } from '../../../swagger/fn/regulation/regulation-get-regulation-document-types';

export interface RegulationGetRegulationDocumentTypesParams {
  showHidden?: boolean;
}

export const regulationGetRegulationDocumentTypesParamsAdapter = {
  adapt(params?: RegulationGetRegulationDocumentTypesParams): RegulationGetRegulationDocumentTypes$Params {
    if (!params) {
      return {} as RegulationGetRegulationDocumentTypes$Params;
    }
    return {
      showHidden: params.showHidden,
    };
  }
};

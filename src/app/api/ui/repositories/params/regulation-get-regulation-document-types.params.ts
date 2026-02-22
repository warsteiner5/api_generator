import { RegulationGetRegulationDocumentTypes$Params } from '../../../swagger/fn/regulation/regulation-get-regulation-document-types';

// @ts-ignore
export interface RegulationGetRegulationDocumentTypesParams {
  showHidden?: boolean;
}

export function regulationGetRegulationDocumentTypesAdapter(params?: RegulationGetRegulationDocumentTypesParams): RegulationGetRegulationDocumentTypes$Params {
  if (!params) {
    return {} as RegulationGetRegulationDocumentTypes$Params;
  }
  return {
      showHidden: params.showHidden,
  };
}

import { RegulationSaveDocument$Params } from '../../../swagger/fn/regulation/regulation-save-document';
import { SaveRegulationDocument } from '../../models/save-regulation-document.interface';
import { apiSaveRegulationDocumentDtoAdapter } from '../../adapters/models/api-save-regulation-document-dto.adapter';

// @ts-ignore
export interface RegulationSaveDocumentParams {
  body?: SaveRegulationDocument;
}

export function regulationSaveDocumentAdapter(params?: RegulationSaveDocumentParams): RegulationSaveDocument$Params {
  if (!params) {
    return {} as RegulationSaveDocument$Params;
  }
  return {
      body: apiSaveRegulationDocumentDtoAdapter(params.body),
  };
}

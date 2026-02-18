import { RegulationSaveDocument$Params } from '../../../swagger/fn/regulation/regulation-save-document';
import { SaveRegulationDocument } from '../../models/save-regulation-document.interface';
import { adaptApiSaveRegulationDocumentDto } from '../../adapters/toDto/api-save-regulation-document-dto.adapter';

export interface RegulationSaveDocumentParams {
  body?: SaveRegulationDocument;
}

export const regulationSaveDocumentParamsAdapter = {
  adapt(params?: RegulationSaveDocumentParams): RegulationSaveDocument$Params {
    if (!params) {
      return {} as RegulationSaveDocument$Params;
    }
    return {
      body: adaptApiSaveRegulationDocumentDto(params.body),
    };
  }
};

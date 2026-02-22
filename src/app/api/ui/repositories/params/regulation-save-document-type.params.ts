import { RegulationSaveDocumentType$Params } from '../../../swagger/fn/regulation/regulation-save-document-type';
import { SaveRegulationDocumentType } from '../../models/save-regulation-document-type.interface';
import { apiSaveRegulationDocumentTypeDtoAdapter } from '../../adapters/models/api-save-regulation-document-type-dto.adapter';

// @ts-ignore
export interface RegulationSaveDocumentTypeParams {
  body?: SaveRegulationDocumentType;
}

export function regulationSaveDocumentTypeAdapter(params?: RegulationSaveDocumentTypeParams): RegulationSaveDocumentType$Params {
  if (!params) {
    return {} as RegulationSaveDocumentType$Params;
  }
  return {
      body: apiSaveRegulationDocumentTypeDtoAdapter(params.body),
  };
}

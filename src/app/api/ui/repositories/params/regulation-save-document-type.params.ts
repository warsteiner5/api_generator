import { RegulationSaveDocumentType$Params } from '../../../swagger/fn/regulation/regulation-save-document-type';
import { SaveRegulationDocumentType } from '../../models/save-regulation-document-type.interface';
import { adaptApiSaveRegulationDocumentTypeDto } from '../../adapters/toDto/api-save-regulation-document-type-dto.adapter';

export interface RegulationSaveDocumentTypeParams {
  body?: SaveRegulationDocumentType;
}

export const regulationSaveDocumentTypeParamsAdapter = {
  adapt(params?: RegulationSaveDocumentTypeParams): RegulationSaveDocumentType$Params {
    if (!params) {
      return {} as RegulationSaveDocumentType$Params;
    }
    return {
      body: adaptApiSaveRegulationDocumentTypeDto(params.body),
    };
  }
};

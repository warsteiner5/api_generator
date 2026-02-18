import { RegulationDocumentFilterAlt } from '../../models/regulation-document-filter-alt.interface';
import { RegulationGetRegulationDocumentsByFilter$Params } from '../../../swagger/fn/regulation/regulation-get-regulation-documents-by-filter';
import { adaptApiRegulationDocumentFilterAltDto } from '../../adapters/toDto/api-regulation-document-filter.adapter';

export interface RegulationGetRegulationDocumentsByFilterParams {
  body?: RegulationDocumentFilterAlt;
}

export const regulationGetRegulationDocumentsByFilterParamsAdapter = {
  adapt(params?: RegulationGetRegulationDocumentsByFilterParams): RegulationGetRegulationDocumentsByFilter$Params {
    if (!params) {
      return {} as RegulationGetRegulationDocumentsByFilter$Params;
    }
    return {
      body: adaptApiRegulationDocumentFilterAltDto(params.body),
    };
  }
};

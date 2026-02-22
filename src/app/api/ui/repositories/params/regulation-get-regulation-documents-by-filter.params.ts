import { RegulationDocumentFilterAlt } from '../../models/regulation-document-filter-alt.interface';
import { RegulationGetRegulationDocumentsByFilter$Params } from '../../../swagger/fn/regulation/regulation-get-regulation-documents-by-filter';
import { apiRegulationDocumentFilterAltDtoAdapter } from '../../adapters/models/api-regulation-document-filter.adapter';

// @ts-ignore
export interface RegulationGetRegulationDocumentsByFilterParams {
  body?: RegulationDocumentFilterAlt;
}

export function regulationGetRegulationDocumentsByFilterAdapter(params?: RegulationGetRegulationDocumentsByFilterParams): RegulationGetRegulationDocumentsByFilter$Params {
  if (!params) {
    return {} as RegulationGetRegulationDocumentsByFilter$Params;
  }
  return {
      body: apiRegulationDocumentFilterAltDtoAdapter(params.body),
  };
}

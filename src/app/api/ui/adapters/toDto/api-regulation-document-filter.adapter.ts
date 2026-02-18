import { RegulationDocumentFilterAlt } from '../../models/regulation-document-filter-alt.interface';
import { ApiRegulationDocumentFilterAltDto } from '../../../swagger/models/api-regulation-document-filter';

export function adaptApiRegulationDocumentFilterAltDto(source?: RegulationDocumentFilterAlt | null): ApiRegulationDocumentFilterAltDto {
  return (source ?? {}) as ApiRegulationDocumentFilterAltDto;
}

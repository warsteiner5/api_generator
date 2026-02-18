import { ApiRegulationDocumentFilterAltDto } from '../../../swagger/models/api-regulation-document-filter';
import { RegulationDocumentFilterAlt } from '../../models/regulation-document-filter-alt.interface';

export function adaptRegulationDocumentFilterAltToUI(source?: ApiRegulationDocumentFilterAltDto | null): RegulationDocumentFilterAlt {
  return (source ?? {}) as RegulationDocumentFilterAlt;
}

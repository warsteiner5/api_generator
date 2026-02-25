import { ApiRegulationDocumentFilterAltDto } from '../../../swagger/models/api-regulation-document-filter';
import { RegulationDocumentFilterAlt } from '../../models/regulation-document-filter-alt.interface';
import { baseFilterAltAdapter } from './base-filter-alt.adapter';

export const regulationDocumentFilterAltAdapter = (source?: ApiRegulationDocumentFilterAltDto | null): RegulationDocumentFilterAlt => {
  return {
    ...baseFilterAltAdapter(source as unknown as Parameters<typeof baseFilterAltAdapter>[0]),
    isActual: source?.IsActual,
    typeId: source?.TypeId,
    typeIds: source?.TypeIds,
    showHidden: source?.ShowHidden,
  };
}

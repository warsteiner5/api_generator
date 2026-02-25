import { RegulationDocumentFilterAlt } from '../../models/regulation-document-filter-alt.interface';
import { ApiRegulationDocumentFilterAltDto } from '../../../swagger/models/api-regulation-document-filter';
import { apiBaseFilterAltDtoAdapter } from './api-base-filter.adapter';

export const apiRegulationDocumentFilterAltDtoAdapter = (source?: RegulationDocumentFilterAlt | null): ApiRegulationDocumentFilterAltDto => {
  return {
    ...apiBaseFilterAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterAltDtoAdapter>[0]),
    IsActual: source?.isActual,
    TypeId: source?.typeId,
    TypeIds: source?.typeIds,
    ShowHidden: source?.showHidden,
  };
}

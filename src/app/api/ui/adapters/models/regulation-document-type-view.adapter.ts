import { ApiRegulationDocumentTypeViewDto } from '../../../swagger/models/api-regulation-document-type-view-dto';
import { RegulationDocumentTypeView } from '../../models/regulation-document-type-view.interface';

export const regulationDocumentTypeViewAdapter = (source?: ApiRegulationDocumentTypeViewDto | null): RegulationDocumentTypeView => {
  return {
    code: source?.Code,
    id: source?.Id,
    isHidden: source?.IsHidden,
    name: source?.Name,
  };
}

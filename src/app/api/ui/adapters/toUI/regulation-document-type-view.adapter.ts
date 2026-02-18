import { ApiRegulationDocumentTypeViewDto } from '../../../swagger/models/api-regulation-document-type-view-dto';
import { RegulationDocumentTypeView } from '../../models/regulation-document-type-view.interface';

export function adaptRegulationDocumentTypeViewToUI(source?: ApiRegulationDocumentTypeViewDto | null): RegulationDocumentTypeView {
  return {
    code: source?.Code ?? '',
    id: source?.Id ?? 0,
    isHidden: source?.IsHidden ?? false,
    name: source?.Name ?? '',
  };
}

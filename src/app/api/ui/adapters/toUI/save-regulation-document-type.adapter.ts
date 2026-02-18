import { ApiSaveRegulationDocumentTypeDto } from '../../../swagger/models/api-save-regulation-document-type-dto';
import { SaveRegulationDocumentType } from '../../models/save-regulation-document-type.interface';

export function adaptSaveRegulationDocumentTypeToUI(source?: ApiSaveRegulationDocumentTypeDto | null): SaveRegulationDocumentType {
  return {
    code: source?.Code ?? '',
    id: source?.Id ?? 0,
    isHidden: source?.IsHidden ?? false,
    name: source?.Name ?? '',
  };
}

import { ApiSaveRegulationDocumentTypeDto } from '../../../swagger/models/api-save-regulation-document-type-dto';
import { SaveRegulationDocumentType } from '../../models/save-regulation-document-type.interface';

export const saveRegulationDocumentTypeAdapter = (source?: ApiSaveRegulationDocumentTypeDto | null): SaveRegulationDocumentType => {
  return {
    code: source?.Code,
    id: source?.Id,
    isHidden: source?.IsHidden,
    name: source?.Name,
  };
}

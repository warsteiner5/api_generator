import { ApiSaveRegulationDocumentDto } from '../../../swagger/models/api-save-regulation-document-dto';
import { SaveRegulationDocument } from '../../models/save-regulation-document.interface';

export function adaptSaveRegulationDocumentToUI(source?: ApiSaveRegulationDocumentDto | null): SaveRegulationDocument {
  return {
    fileGuid: source?.FileGuid ?? '',
    fileName: source?.FileName ?? '',
    fileSize: source?.FileSize ?? 0,
    id: source?.Id ?? 0,
    isActual: source?.IsActual ?? false,
    isHidden: source?.IsHidden ?? false,
    regulationName: source?.RegulationName ?? '',
    typeId: source?.TypeId ?? 0,
    uploadDateTime: source?.UploadDateTime ?? '',
  };
}

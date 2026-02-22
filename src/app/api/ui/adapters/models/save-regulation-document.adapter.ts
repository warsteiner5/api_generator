import { ApiSaveRegulationDocumentDto } from '../../../swagger/models/api-save-regulation-document-dto';
import { SaveRegulationDocument } from '../../models/save-regulation-document.interface';

export const saveRegulationDocumentAdapter = (source?: ApiSaveRegulationDocumentDto | null): SaveRegulationDocument => {
  return {
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
    fileSize: source?.FileSize,
    id: source?.Id,
    isActual: source?.IsActual,
    isHidden: source?.IsHidden,
    regulationName: source?.RegulationName,
    typeId: source?.TypeId,
    uploadDateTime: source?.UploadDateTime,
  };
}

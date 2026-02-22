import { ApiRegulationDocumentViewDto } from '../../../swagger/models/api-regulation-document-view-dto';
import { RegulationDocumentView } from '../../models/regulation-document-view.interface';

export const regulationDocumentViewAdapter = (source?: ApiRegulationDocumentViewDto | null): RegulationDocumentView => {
  return {
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
    fileSize: source?.FileSize,
    id: source?.Id,
    isActual: source?.IsActual,
    isHidden: source?.IsHidden,
    regulationName: source?.RegulationName,
    typeAsString: source?.TypeAsString,
    typeId: source?.TypeId,
    uploadDateTime: source?.UploadDateTime,
  };
}

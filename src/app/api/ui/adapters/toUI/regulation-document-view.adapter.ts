import { ApiRegulationDocumentViewDto } from '../../../swagger/models/api-regulation-document-view-dto';
import { RegulationDocumentView } from '../../models/regulation-document-view.interface';

export function adaptRegulationDocumentViewToUI(source?: ApiRegulationDocumentViewDto | null): RegulationDocumentView {
  return {
    fileGuid: source?.FileGuid ?? '',
    fileName: source?.FileName ?? '',
    fileSize: source?.FileSize ?? 0,
    id: source?.Id ?? 0,
    isActual: source?.IsActual ?? false,
    isHidden: source?.IsHidden ?? false,
    regulationName: source?.RegulationName ?? '',
    typeAsString: source?.TypeAsString ?? '',
    typeId: source?.TypeId ?? 0,
    uploadDateTime: source?.UploadDateTime ?? '',
  };
}

import { RegulationDocumentView } from '../../models/regulation-document-view.interface';
import { ApiRegulationDocumentViewDto } from '../../../swagger/models/api-regulation-document-view-dto';

export function adaptApiRegulationDocumentViewDto(source?: RegulationDocumentView | null): ApiRegulationDocumentViewDto {
  return {
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    FileSize: source?.fileSize,
    Id: source?.id,
    IsActual: source?.isActual,
    IsHidden: source?.isHidden,
    RegulationName: source?.regulationName,
    TypeAsString: source?.typeAsString,
    TypeId: source?.typeId,
    UploadDateTime: source?.uploadDateTime,
  };
}

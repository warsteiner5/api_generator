import { SaveRegulationDocument } from '../../models/save-regulation-document.interface';
import { ApiSaveRegulationDocumentDto } from '../../../swagger/models/api-save-regulation-document-dto';

export const apiSaveRegulationDocumentDtoAdapter = (source?: SaveRegulationDocument | null): ApiSaveRegulationDocumentDto => {
  return {
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    FileSize: source?.fileSize,
    Id: source?.id,
    IsActual: source?.isActual,
    IsHidden: source?.isHidden,
    RegulationName: source?.regulationName,
    TypeId: source?.typeId,
    UploadDateTime: source?.uploadDateTime,
  };
}

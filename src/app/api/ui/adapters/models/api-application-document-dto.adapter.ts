import { ApplicationDocument } from '../../models/application-document.interface';
import { ApiApplicationDocumentDto } from '../../../swagger/models/api-application-document-dto';
import { apiTradeLotApplicationDocumentTypeEnumAdapter } from '../enums/api-trade-lot-application-document-type-enum.adapter';

export const apiApplicationDocumentDtoAdapter = (source?: ApplicationDocument | null): ApiApplicationDocumentDto => {
  return {
    DocumentType: source?.documentType === null ? undefined : apiTradeLotApplicationDocumentTypeEnumAdapter(source?.documentType),
    FileName: source?.fileName,
    FileSize: source?.fileSize,
    Id: source?.id,
    UploadDate: source?.uploadDate,
    Url: source?.url,
  };
}

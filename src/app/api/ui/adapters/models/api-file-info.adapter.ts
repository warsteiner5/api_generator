import { FileInfoAlt } from '../../models/file-info-alt.interface';
import { ApiFileInfoAltDto } from '../../../swagger/models/api-file-info';
import { apiFileSignatureInfoAltDtoAdapter } from './api-file-signature-info.adapter';

export const apiFileInfoAltDtoAdapter = (source?: FileInfoAlt | null): ApiFileInfoAltDto => {
  return {
    Comment: source?.comment,
    Compressed: source?.compressed,
    ContentType: source?.contentType,
    CreateDateTime: source?.createDateTime,
    CreateUserId: source?.createUserId,
    DownloadUrl: source?.downloadUrl,
    Guid: source?.guid,
    Hash: source?.hash,
    IsSigned: source?.isSigned,
    LastChangeDateTime: source?.lastChangeDateTime,
    LastChangeUserId: source?.lastChangeUserId,
    Link: source?.link,
    Name: source?.name,
    RevisionNumber: source?.revisionNumber,
    SignatureInfos: source?.signatureInfos?.map((item) => apiFileSignatureInfoAltDtoAdapter(item)),
    Size: source?.size,
    Tag: source?.tag,
    Type: source?.type,
    VirusCheckState: source?.virusCheckState,
  };
}

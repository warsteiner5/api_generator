import { ApiFileInfoAltDto } from '../../../swagger/models/api-file-info';
import { FileInfoAlt } from '../../models/file-info-alt.interface';
import { fileSignatureInfoAltAdapter } from './file-signature-info-alt.adapter';

export const fileInfoAltAdapter = (source?: ApiFileInfoAltDto | null): FileInfoAlt => {
  return {
    comment: source?.Comment,
    compressed: source?.Compressed,
    contentType: source?.ContentType,
    createDateTime: source?.CreateDateTime,
    createUserId: source?.CreateUserId,
    downloadUrl: source?.DownloadUrl,
    guid: source?.Guid,
    hash: source?.Hash,
    isSigned: source?.IsSigned,
    lastChangeDateTime: source?.LastChangeDateTime,
    lastChangeUserId: source?.LastChangeUserId,
    link: source?.Link,
    name: source?.Name,
    revisionNumber: source?.RevisionNumber,
    signatureInfos: source?.SignatureInfos?.map((item) => fileSignatureInfoAltAdapter(item)),
    size: source?.Size,
    tag: source?.Tag,
    type: source?.Type,
    virusCheckState: source?.VirusCheckState,
  };
}

import { ApiFileInfoAltDto } from '../../../swagger/models/api-file-info';
import { FileInfoAlt } from '../../models/file-info-alt.interface';
import { adaptFileSignatureInfoAltToUI } from './file-signature-info-alt.adapter';

export function adaptFileInfoAltToUI(source?: ApiFileInfoAltDto | null): FileInfoAlt {
  return {
    comment: source?.Comment ?? '',
    compressed: source?.Compressed ?? false,
    contentType: source?.ContentType ?? 0,
    createDateTime: source?.CreateDateTime ?? '',
    createUserId: source?.CreateUserId ?? 0,
    downloadUrl: source?.DownloadUrl ?? '',
    guid: source?.Guid ?? '',
    hash: source?.Hash ?? '',
    isSigned: source?.IsSigned ?? false,
    lastChangeDateTime: source?.LastChangeDateTime ?? '',
    lastChangeUserId: source?.LastChangeUserId ?? 0,
    link: source?.Link ?? '',
    name: source?.Name ?? '',
    revisionNumber: source?.RevisionNumber ?? 0,
    signatureInfos: (source?.SignatureInfos ?? []).map((item) => adaptFileSignatureInfoAltToUI(item)),
    size: source?.Size ?? 0,
    tag: source?.Tag ?? '',
    type: source?.Type ?? '',
    virusCheckState: source?.VirusCheckState ?? 0,
  };
}

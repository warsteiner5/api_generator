import { ApiFileSignatureInfoAltDto } from '../../../swagger/models/api-file-signature-info';
import { FileSignatureInfoAlt } from '../../models/file-signature-info-alt.interface';
import { applicationsEnumAdapter } from '../enums/applications-enum.adapter';

export const fileSignatureInfoAltAdapter = (source?: ApiFileSignatureInfoAltDto | null): FileSignatureInfoAlt => {
  return {
    application: source?.Application === null ? undefined : applicationsEnumAdapter(source?.Application),
    certificateThumbprint: source?.CertificateThumbprint,
    signatureDownloadUrl: source?.SignatureDownloadUrl,
  };
}

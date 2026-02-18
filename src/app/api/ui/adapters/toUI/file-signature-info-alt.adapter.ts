import { ApiFileSignatureInfoAltDto } from '../../../swagger/models/api-file-signature-info';
import { FileSignatureInfoAlt } from '../../models/file-signature-info-alt.interface';
import { adaptApplicationsEnumToUI } from './applications-enum.adapter';

export function adaptFileSignatureInfoAltToUI(source?: ApiFileSignatureInfoAltDto | null): FileSignatureInfoAlt {
  return {
    application: adaptApplicationsEnumToUI(source?.Application),
    certificateThumbprint: source?.CertificateThumbprint ?? '',
    signatureDownloadUrl: source?.SignatureDownloadUrl ?? '',
  };
}

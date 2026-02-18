import { FileSignatureInfoAlt } from '../../models/file-signature-info-alt.interface';
import { ApiFileSignatureInfoAltDto } from '../../../swagger/models/api-file-signature-info';
import { adaptApiApplicationsEnum } from './api-applications-enum.adapter';

export function adaptApiFileSignatureInfoAltDto(source?: FileSignatureInfoAlt | null): ApiFileSignatureInfoAltDto {
  return {
    Application: adaptApiApplicationsEnum(source?.application),
    CertificateThumbprint: source?.certificateThumbprint,
    SignatureDownloadUrl: source?.signatureDownloadUrl,
  };
}

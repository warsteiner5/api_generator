import { FileSignatureInfoAlt } from '../../models/file-signature-info-alt.interface';
import { ApiFileSignatureInfoAltDto } from '../../../swagger/models/api-file-signature-info';
import { apiApplicationsEnumAdapter } from '../enums/api-applications-enum.adapter';

export const apiFileSignatureInfoAltDtoAdapter = (source?: FileSignatureInfoAlt | null): ApiFileSignatureInfoAltDto => {
  return {
    Application: source?.application === null ? undefined : apiApplicationsEnumAdapter(source?.application),
    CertificateThumbprint: source?.certificateThumbprint,
    SignatureDownloadUrl: source?.signatureDownloadUrl,
  };
}

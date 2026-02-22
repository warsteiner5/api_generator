import { ApiCertificateViewModelDto } from '../../../swagger/models/api-certificate-view-model-dto';
import { CertificateViewModel } from '../../models/certificate-view-model.interface';
import { organizationContractSideAltEnumAdapter } from '../enums/organization-contract-side-alt-enum.adapter';
import { organizationCountryAltEnumAdapter } from '../enums/organization-country-alt-enum.adapter';
import { powerOfAttorneyRequiredStateEnumAdapter } from '../enums/power-of-attorney-required-state-enum.adapter';
import { x509Certificate2AltAdapter } from './x-509-certificate-2-alt.adapter';

export const certificateViewModelAdapter = (source?: ApiCertificateViewModelDto | null): CertificateViewModel => {
  return {
    cert: source?.Cert === null ? undefined : x509Certificate2AltAdapter(source?.Cert),
    certIssuer: source?.CertIssuer,
    certNumber: source?.CertNumber,
    certThumbprint: source?.CertThumbprint,
    contractSide: source?.ContractSide === null ? undefined : organizationContractSideAltEnumAdapter(source?.ContractSide),
    country: source?.Country === null ? undefined : organizationCountryAltEnumAdapter(source?.Country),
    departament: source?.Departament,
    downloadCertUrl: source?.DownloadCertUrl,
    email: source?.Email,
    error: source?.Error,
    fileId: source?.FileId,
    fileName: source?.FileName,
    fileUrl: source?.FileUrl,
    foreignParticipantId: source?.ForeignParticipantId,
    inn: source?.Inn,
    kpp: source?.Kpp,
    location: source?.Location,
    name: source?.Name,
    notAfter: source?.NotAfter,
    notBefore: source?.NotBefore,
    ogrn: source?.Ogrn,
    organization: source?.Organization,
    powerOfAttorneyId: source?.PowerOfAttorneyId,
    powerOfAttorneyRequiredState: source?.PowerOfAttorneyRequiredState === null ? undefined : powerOfAttorneyRequiredStateEnumAdapter(source?.PowerOfAttorneyRequiredState),
    role: source?.Role,
    snils: source?.Snils,
    surname: source?.Surname,
  };
}

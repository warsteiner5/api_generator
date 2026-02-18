import { ApiCertificateViewModelDto } from '../../../swagger/models/api-certificate-view-model-dto';
import { CertificateViewModel } from '../../models/certificate-view-model.interface';
import { adaptOrganizationContractSideAltEnumToUI } from './organization-contract-side-alt-enum.adapter';
import { adaptOrganizationCountryAltEnumToUI } from './organization-country-alt-enum.adapter';
import { adaptPowerOfAttorneyRequiredStateEnumToUI } from './power-of-attorney-required-state-enum.adapter';
import { adaptX509Certificate2AltToUI } from './x-509-certificate-2-alt.adapter';

export function adaptCertificateViewModelToUI(source?: ApiCertificateViewModelDto | null): CertificateViewModel {
  return {
    cert: adaptX509Certificate2AltToUI(source?.Cert),
    certIssuer: source?.CertIssuer ?? '',
    certNumber: source?.CertNumber ?? '',
    certThumbprint: source?.CertThumbprint ?? '',
    contractSide: adaptOrganizationContractSideAltEnumToUI(source?.ContractSide),
    country: adaptOrganizationCountryAltEnumToUI(source?.Country),
    departament: source?.Departament ?? '',
    downloadCertUrl: source?.DownloadCertUrl ?? '',
    email: source?.Email ?? '',
    error: source?.Error ?? '',
    fileId: source?.FileId ?? '',
    fileName: source?.FileName ?? '',
    fileUrl: source?.FileUrl ?? '',
    foreignParticipantId: source?.ForeignParticipantId ?? '',
    inn: source?.Inn ?? '',
    kpp: source?.Kpp ?? '',
    location: source?.Location ?? '',
    name: source?.Name ?? '',
    notAfter: source?.NotAfter ?? '',
    notBefore: source?.NotBefore ?? '',
    ogrn: source?.Ogrn ?? '',
    organization: source?.Organization ?? '',
    powerOfAttorneyId: source?.PowerOfAttorneyId ?? '',
    powerOfAttorneyRequiredState: adaptPowerOfAttorneyRequiredStateEnumToUI(source?.PowerOfAttorneyRequiredState),
    role: source?.Role ?? '',
    snils: source?.Snils ?? '',
    surname: source?.Surname ?? '',
  };
}

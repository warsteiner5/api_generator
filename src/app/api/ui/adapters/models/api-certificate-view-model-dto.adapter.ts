import { CertificateViewModel } from '../../models/certificate-view-model.interface';
import { ApiCertificateViewModelDto } from '../../../swagger/models/api-certificate-view-model-dto';
import { apiOrganizationContractSideAltEnumAdapter } from '../enums/api-organization-contract-side.adapter';
import { apiOrganizationCountryAltEnumAdapter } from '../enums/api-organization-country.adapter';
import { apiPowerOfAttorneyRequiredStateEnumAdapter } from '../enums/api-power-of-attorney-required-state-enum.adapter';
import { apiX509Certificate2AltDtoAdapter } from './api-x-509-certificate-2.adapter';

export const apiCertificateViewModelDtoAdapter = (source?: CertificateViewModel | null): ApiCertificateViewModelDto => {
  return {
    Cert: source?.cert === null ? undefined : apiX509Certificate2AltDtoAdapter(source?.cert),
    CertIssuer: source?.certIssuer,
    CertNumber: source?.certNumber,
    CertThumbprint: source?.certThumbprint,
    ContractSide: source?.contractSide === null ? undefined : apiOrganizationContractSideAltEnumAdapter(source?.contractSide),
    Country: source?.country === null ? undefined : apiOrganizationCountryAltEnumAdapter(source?.country),
    Departament: source?.departament,
    DownloadCertUrl: source?.downloadCertUrl,
    Email: source?.email,
    Error: source?.error,
    FileId: source?.fileId,
    FileName: source?.fileName,
    FileUrl: source?.fileUrl,
    ForeignParticipantId: source?.foreignParticipantId,
    Inn: source?.inn,
    Kpp: source?.kpp,
    Location: source?.location,
    Name: source?.name,
    NotAfter: source?.notAfter,
    NotBefore: source?.notBefore,
    Ogrn: source?.ogrn,
    Organization: source?.organization,
    PowerOfAttorneyId: source?.powerOfAttorneyId,
    PowerOfAttorneyRequiredState: source?.powerOfAttorneyRequiredState === null ? undefined : apiPowerOfAttorneyRequiredStateEnumAdapter(source?.powerOfAttorneyRequiredState),
    Role: source?.role,
    Snils: source?.snils,
    Surname: source?.surname,
  };
}

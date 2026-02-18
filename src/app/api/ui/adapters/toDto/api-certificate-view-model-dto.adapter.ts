import { CertificateViewModel } from '../../models/certificate-view-model.interface';
import { ApiCertificateViewModelDto } from '../../../swagger/models/api-certificate-view-model-dto';
import { adaptApiOrganizationContractSideAltEnum } from './api-organization-contract-side.adapter';
import { adaptApiOrganizationCountryAltEnum } from './api-organization-country.adapter';
import { adaptApiPowerOfAttorneyRequiredStateEnum } from './api-power-of-attorney-required-state-enum.adapter';
import { adaptApiX509Certificate2AltDto } from './api-x-509-certificate-2.adapter';

export function adaptApiCertificateViewModelDto(source?: CertificateViewModel | null): ApiCertificateViewModelDto {
  return {
    Cert: adaptApiX509Certificate2AltDto(source?.cert),
    CertIssuer: source?.certIssuer,
    CertNumber: source?.certNumber,
    CertThumbprint: source?.certThumbprint,
    ContractSide: adaptApiOrganizationContractSideAltEnum(source?.contractSide),
    Country: adaptApiOrganizationCountryAltEnum(source?.country),
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
    PowerOfAttorneyRequiredState: adaptApiPowerOfAttorneyRequiredStateEnum(source?.powerOfAttorneyRequiredState),
    Role: source?.role,
    Snils: source?.snils,
    Surname: source?.surname,
  };
}

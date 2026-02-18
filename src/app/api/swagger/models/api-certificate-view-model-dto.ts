/* tslint:disable */
/* eslint-disable */
import { ApiOrganizationContractSideAltEnum } from '../models/api-organization-contract-side';
import { ApiOrganizationCountryAltEnum } from '../models/api-organization-country';
import { ApiPowerOfAttorneyRequiredStateEnum } from '../models/api-power-of-attorney-required-state-enum';
import { ApiX509Certificate2AltDto } from '../models/api-x-509-certificate-2';
export interface ApiCertificateViewModelDto {
  Cert?: ApiX509Certificate2AltDto | null;
  CertIssuer?: string | null;
  CertNumber?: string | null;
  CertThumbprint?: string | null;
  ContractSide?: ApiOrganizationContractSideAltEnum;
  Country?: ApiOrganizationCountryAltEnum;
  Departament?: string | null;
  DownloadCertUrl?: string | null;
  Email?: string | null;
  Error?: string | null;
  FileId?: string | null;
  FileName?: string | null;
  FileUrl?: string | null;
  ForeignParticipantId?: string | null;
  Inn?: string | null;
  Kpp?: string | null;
  Location?: string | null;
  Name?: string | null;
  NotAfter?: string | null;
  NotBefore?: string | null;
  Ogrn?: string | null;
  Organization?: string | null;
  PowerOfAttorneyId?: string | null;
  PowerOfAttorneyRequiredState?: ApiPowerOfAttorneyRequiredStateEnum;
  Role?: string | null;
  Snils?: string | null;
  Surname?: string | null;
}

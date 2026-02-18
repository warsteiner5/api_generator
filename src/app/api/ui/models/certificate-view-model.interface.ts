import { OrganizationContractSideAltEnum } from '../enums/organization-contract-side-alt.enum';
import { OrganizationCountryAltEnum } from '../enums/organization-country-alt.enum';
import { PowerOfAttorneyRequiredStateEnum } from '../enums/power-of-attorney-required-state.enum';
import { X509Certificate2Alt } from './x-509-certificate-2-alt.interface';

export interface CertificateViewModel {
  cert: X509Certificate2Alt;
  certIssuer: string;
  certNumber: string;
  certThumbprint: string;
  contractSide: OrganizationContractSideAltEnum;
  country: OrganizationCountryAltEnum;
  departament: string;
  downloadCertUrl: string;
  email: string;
  error: string;
  fileId: string;
  fileName: string;
  fileUrl: string;
  foreignParticipantId: string;
  inn: string;
  kpp: string;
  location: string;
  name: string;
  notAfter: string;
  notBefore: string;
  ogrn: string;
  organization: string;
  powerOfAttorneyId: string;
  powerOfAttorneyRequiredState: PowerOfAttorneyRequiredStateEnum;
  role: string;
  snils: string;
  surname: string;
}

import { ApiMakeOrganizationSmpRequestAltDto } from '../../../swagger/models/api-make-organization-smp-request';
import { MakeOrganizationSmpRequestAlt } from '../../models/make-organization-smp-request-alt.interface';

export const makeOrganizationSmpRequestAltAdapter = (source?: ApiMakeOrganizationSmpRequestAltDto | null): MakeOrganizationSmpRequestAlt => {
  return {
    certificateThumbprint: source?.CertificateThumbprint,
    fileGuid: source?.FileGuid,
  };
}

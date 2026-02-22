import { MakeOrganizationSmpRequestAlt } from '../../models/make-organization-smp-request-alt.interface';
import { ApiMakeOrganizationSmpRequestAltDto } from '../../../swagger/models/api-make-organization-smp-request';

export const apiMakeOrganizationSmpRequestAltDtoAdapter = (source?: MakeOrganizationSmpRequestAlt | null): ApiMakeOrganizationSmpRequestAltDto => {
  return {
    CertificateThumbprint: source?.certificateThumbprint,
    FileGuid: source?.fileGuid,
  };
}

import { ApiOrganizationDesignDto } from '../../../swagger/models/api-organization-design-dto';
import { OrganizationDesign } from '../../models/organization-design.interface';

export function adaptOrganizationDesignToUI(source?: ApiOrganizationDesignDto | null): OrganizationDesign {
  return {
    backgroundFileGuid: source?.BackgroundFileGuid ?? '',
    bannerHtml: source?.BannerHtml ?? '',
    logoFileGuid: source?.LogoFileGuid ?? '',
  };
}

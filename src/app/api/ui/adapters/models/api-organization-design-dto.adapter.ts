import { OrganizationDesign } from '../../models/organization-design.interface';
import { ApiOrganizationDesignDto } from '../../../swagger/models/api-organization-design-dto';

export const apiOrganizationDesignDtoAdapter = (source?: OrganizationDesign | null): ApiOrganizationDesignDto => {
  return {
    BackgroundFileGuid: source?.backgroundFileGuid,
    BannerHtml: source?.bannerHtml,
    LogoFileGuid: source?.logoFileGuid,
  };
}

import { OrganizationDesign } from '../../models/organization-design.interface';
import { ApiOrganizationDesignDto } from '../../../swagger/models/api-organization-design-dto';

export function adaptApiOrganizationDesignDto(source?: OrganizationDesign | null): ApiOrganizationDesignDto {
  return {
    BackgroundFileGuid: source?.backgroundFileGuid,
    BannerHtml: source?.bannerHtml,
    LogoFileGuid: source?.logoFileGuid,
  };
}

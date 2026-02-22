import { ApiOrganizationContractSideAltEnum } from '../../../swagger/models/api-organization-contract-side';
import { OrganizationContractSideAltEnum } from '../../enums/organization-contract-side-alt.enum';

export const organizationContractSideAltEnumAdapter = (source?: ApiOrganizationContractSideAltEnum | null): OrganizationContractSideAltEnum => {
  switch (source) {
    case ApiOrganizationContractSideAltEnum.Organizer:
      return OrganizationContractSideAltEnum.Organizer;
    case ApiOrganizationContractSideAltEnum.Provider:
      return OrganizationContractSideAltEnum.Provider;
    case ApiOrganizationContractSideAltEnum.Responsible:
      return OrganizationContractSideAltEnum.Responsible;
    default:
      throw new Error(`Enum value is not defined: ApiOrganizationContractSideAltEnum=${String(source)}`);
  }
}

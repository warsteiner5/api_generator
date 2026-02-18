import { OrganizationContractSideAltEnum } from '../../enums/organization-contract-side-alt.enum';
import { ApiOrganizationContractSideAltEnum } from '../../../swagger/models/api-organization-contract-side';

export function adaptApiOrganizationContractSideAltEnum(source?: OrganizationContractSideAltEnum | null): ApiOrganizationContractSideAltEnum {
  switch (source) {
    case OrganizationContractSideAltEnum.Organizer:
      return ApiOrganizationContractSideAltEnum.Organizer;
    case OrganizationContractSideAltEnum.Provider:
      return ApiOrganizationContractSideAltEnum.Provider;
    case OrganizationContractSideAltEnum.Responsible:
      return ApiOrganizationContractSideAltEnum.Responsible;
    default:
      throw new Error(`Enum value is not defined: OrganizationContractSideAltEnum=${String(source)}`);
  }
}

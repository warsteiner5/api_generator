import { OrganizationTypeEnum } from '../../enums/organization-type.enum';
import { ApiOrganizationTypeEnum } from '../../../swagger/models/api-organization-type-enum';

export const apiOrganizationTypeEnumAdapter = (source?: OrganizationTypeEnum | null): ApiOrganizationTypeEnum => {
  switch (source) {
    case OrganizationTypeEnum.Unknown:
      return ApiOrganizationTypeEnum.Unknown;
    case OrganizationTypeEnum.JudicialPerson:
      return ApiOrganizationTypeEnum.JudicialPerson;
    case OrganizationTypeEnum.IndividualEntrepreneur:
      return ApiOrganizationTypeEnum.IndividualEntrepreneur;
    case OrganizationTypeEnum.PhysicalPerson:
      return ApiOrganizationTypeEnum.PhysicalPerson;
    case OrganizationTypeEnum.ForeignJudicialPerson:
      return ApiOrganizationTypeEnum.ForeignJudicialPerson;
    case OrganizationTypeEnum.ForeignIndividualEntrepreneur:
      return ApiOrganizationTypeEnum.ForeignIndividualEntrepreneur;
    case OrganizationTypeEnum.ForeignPhysicalPerson:
      return ApiOrganizationTypeEnum.ForeignPhysicalPerson;
    default:
      throw new Error(`Enum value is not defined: OrganizationTypeEnum=${String(source)}`);
  }
}

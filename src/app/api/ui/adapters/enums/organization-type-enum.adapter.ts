import { ApiOrganizationTypeEnum } from '../../../swagger/models/api-organization-type-enum';
import { OrganizationTypeEnum } from '../../enums/organization-type.enum';

export const organizationTypeEnumAdapter = (source?: ApiOrganizationTypeEnum | null): OrganizationTypeEnum => {
  switch (source) {
    case ApiOrganizationTypeEnum.Unknown:
      return OrganizationTypeEnum.Unknown;
    case ApiOrganizationTypeEnum.JudicialPerson:
      return OrganizationTypeEnum.JudicialPerson;
    case ApiOrganizationTypeEnum.IndividualEntrepreneur:
      return OrganizationTypeEnum.IndividualEntrepreneur;
    case ApiOrganizationTypeEnum.PhysicalPerson:
      return OrganizationTypeEnum.PhysicalPerson;
    case ApiOrganizationTypeEnum.ForeignJudicialPerson:
      return OrganizationTypeEnum.ForeignJudicialPerson;
    case ApiOrganizationTypeEnum.ForeignIndividualEntrepreneur:
      return OrganizationTypeEnum.ForeignIndividualEntrepreneur;
    case ApiOrganizationTypeEnum.ForeignPhysicalPerson:
      return OrganizationTypeEnum.ForeignPhysicalPerson;
    default:
      throw new Error(`Enum value is not defined: ApiOrganizationTypeEnum=${String(source)}`);
  }
}

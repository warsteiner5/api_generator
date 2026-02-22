import { ApiFeedBackOrganizationRoleEnum } from '../../../swagger/models/api-feed-back-organization-role-enum';
import { FeedBackOrganizationRoleEnum } from '../../enums/feed-back-organization-role.enum';

export const feedBackOrganizationRoleEnumAdapter = (source?: ApiFeedBackOrganizationRoleEnum | null): FeedBackOrganizationRoleEnum => {
  switch (source) {
    case ApiFeedBackOrganizationRoleEnum.Customer:
      return FeedBackOrganizationRoleEnum.Customer;
    case ApiFeedBackOrganizationRoleEnum.Participant:
      return FeedBackOrganizationRoleEnum.Participant;
    default:
      throw new Error(`Enum value is not defined: ApiFeedBackOrganizationRoleEnum=${String(source)}`);
  }
}

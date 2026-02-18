import { FeedBackOrganizationRoleEnum } from '../../enums/feed-back-organization-role.enum';
import { ApiFeedBackOrganizationRoleEnum } from '../../../swagger/models/api-feed-back-organization-role-enum';

export function adaptApiFeedBackOrganizationRoleEnum(source?: FeedBackOrganizationRoleEnum | null): ApiFeedBackOrganizationRoleEnum {
  switch (source) {
    case FeedBackOrganizationRoleEnum.Customer:
      return ApiFeedBackOrganizationRoleEnum.Customer;
    case FeedBackOrganizationRoleEnum.Participant:
      return ApiFeedBackOrganizationRoleEnum.Participant;
    default:
      throw new Error(`Enum value is not defined: FeedBackOrganizationRoleEnum=${String(source)}`);
  }
}

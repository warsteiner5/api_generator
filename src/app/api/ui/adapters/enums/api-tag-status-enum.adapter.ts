import { TagStatusEnum } from '../../enums/tag-status.enum';
import { ApiTagStatusEnum } from '../../../swagger/models/api-tag-status-enum';

export const apiTagStatusEnumAdapter = (source?: TagStatusEnum | null): ApiTagStatusEnum => {
  switch (source) {
    case TagStatusEnum.IsActive:
      return ApiTagStatusEnum.IsActive;
    case TagStatusEnum.IsHidden:
      return ApiTagStatusEnum.IsHidden;
    default:
      throw new Error(`Enum value is not defined: TagStatusEnum=${String(source)}`);
  }
}

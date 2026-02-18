import { ApiTagStatusEnum } from '../../../swagger/models/api-tag-status-enum';
import { TagStatusEnum } from '../../enums/tag-status.enum';

export function adaptTagStatusEnumToUI(source?: ApiTagStatusEnum | null): TagStatusEnum {
  switch (source) {
    case ApiTagStatusEnum.IsActive:
      return TagStatusEnum.IsActive;
    case ApiTagStatusEnum.IsHidden:
      return TagStatusEnum.IsHidden;
    default:
      throw new Error(`Enum value is not defined: ApiTagStatusEnum=${String(source)}`);
  }
}

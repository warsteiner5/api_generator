import { SearchTypeEnum } from '../enums/search-type.enum';

export interface TagSettingsDelete {
  tagSettingsId: string;
  type: SearchTypeEnum;
}

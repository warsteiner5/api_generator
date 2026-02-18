import { SearchTypeEnum } from '../enums/search-type.enum';

export interface TagSettingsAdd {
  tag: string;
  type: SearchTypeEnum;
}

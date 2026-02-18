import { SearchTypeEnum } from '../enums/search-type.enum';

export interface MultipleTagSettingsAdd {
  tags: string[];
  type: SearchTypeEnum;
}

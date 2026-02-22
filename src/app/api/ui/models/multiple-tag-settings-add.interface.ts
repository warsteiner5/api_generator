import { SearchTypeEnum } from '../enums/search-type.enum';

// @ts-ignore
export interface MultipleTagSettingsAdd {
  tags: string[];
  type: SearchTypeEnum;
}

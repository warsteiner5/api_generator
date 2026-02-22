import { PomogatorGetSettingsTagExist$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings-tag-exist';
import { SearchTypeEnum } from '../../enums/search-type.enum';
import { apiSearchTypeEnumAdapter } from '../../adapters/enums/api-search-type-enum.adapter';

// @ts-ignore
export interface PomogatorGetSettingsTagExistParams {
  tag: string;
  type: SearchTypeEnum;
}

export function pomogatorGetSettingsTagExistAdapter(params?: PomogatorGetSettingsTagExistParams): PomogatorGetSettingsTagExist$Params {
  if (!params) {
    return {} as PomogatorGetSettingsTagExist$Params;
  }
  return {
      tag: params.tag,
      type: apiSearchTypeEnumAdapter(params.type),
  };
}

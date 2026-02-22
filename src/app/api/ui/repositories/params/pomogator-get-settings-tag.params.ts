import { PomogatorGetSettingsTag$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings-tag';
import { SearchTypeEnum } from '../../enums/search-type.enum';
import { apiSearchTypeEnumAdapter } from '../../adapters/enums/api-search-type-enum.adapter';

// @ts-ignore
export interface PomogatorGetSettingsTagParams {
  id: string;
  type: SearchTypeEnum;
}

export function pomogatorGetSettingsTagAdapter(params?: PomogatorGetSettingsTagParams): PomogatorGetSettingsTag$Params {
  if (!params) {
    return {} as PomogatorGetSettingsTag$Params;
  }
  return {
      id: params.id,
      type: apiSearchTypeEnumAdapter(params.type),
  };
}

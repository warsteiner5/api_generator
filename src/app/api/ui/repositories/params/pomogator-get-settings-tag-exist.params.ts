import { PomogatorGetSettingsTagExist$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings-tag-exist';
import { SearchTypeEnum } from '../../enums/search-type.enum';
import { adaptApiSearchTypeEnum } from '../../adapters/toDto/api-search-type-enum.adapter';

export interface PomogatorGetSettingsTagExistParams {
  tag: string;
  type: SearchTypeEnum;
}

export const pomogatorGetSettingsTagExistParamsAdapter = {
  adapt(params?: PomogatorGetSettingsTagExistParams): PomogatorGetSettingsTagExist$Params {
    if (!params) {
      return {} as PomogatorGetSettingsTagExist$Params;
    }
    return {
      tag: params.tag,
      type: adaptApiSearchTypeEnum(params.type),
    };
  }
};

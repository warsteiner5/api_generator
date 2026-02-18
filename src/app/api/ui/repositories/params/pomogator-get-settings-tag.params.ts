import { PomogatorGetSettingsTag$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings-tag';
import { SearchTypeEnum } from '../../enums/search-type.enum';
import { adaptApiSearchTypeEnum } from '../../adapters/toDto/api-search-type-enum.adapter';

export interface PomogatorGetSettingsTagParams {
  id: string;
  type: SearchTypeEnum;
}

export const pomogatorGetSettingsTagParamsAdapter = {
  adapt(params?: PomogatorGetSettingsTagParams): PomogatorGetSettingsTag$Params {
    if (!params) {
      return {} as PomogatorGetSettingsTag$Params;
    }
    return {
      id: params.id,
      type: adaptApiSearchTypeEnum(params.type),
    };
  }
};

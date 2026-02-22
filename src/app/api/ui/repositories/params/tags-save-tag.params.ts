import { TagOperator } from '../../models/tag-operator.interface';
import { TagsSaveTag$Params } from '../../../swagger/fn/tags/tags-save-tag';
import { apiTagOperatorDtoAdapter } from '../../adapters/models/api-tag-operator-dto.adapter';

// @ts-ignore
export interface TagsSaveTagParams {
  body?: TagOperator;
}

export function tagsSaveTagAdapter(params?: TagsSaveTagParams): TagsSaveTag$Params {
  if (!params) {
    return {} as TagsSaveTag$Params;
  }
  return {
      body: apiTagOperatorDtoAdapter(params.body),
  };
}

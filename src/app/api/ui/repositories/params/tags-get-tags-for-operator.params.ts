import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TagsGetTagsForOperator$Params } from '../../../swagger/fn/tags/tags-get-tags-for-operator';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface TagsGetTagsForOperatorParams {
  body?: SearchObjectAlt;
}

export function tagsGetTagsForOperatorAdapter(params?: TagsGetTagsForOperatorParams): TagsGetTagsForOperator$Params {
  if (!params) {
    return {} as TagsGetTagsForOperator$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

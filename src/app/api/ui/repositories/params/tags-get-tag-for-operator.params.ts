import { TagsGetTagForOperator$Params } from '../../../swagger/fn/tags/tags-get-tag-for-operator';

// @ts-ignore
export interface TagsGetTagForOperatorParams {
  id: number;
}

export function tagsGetTagForOperatorAdapter(params?: TagsGetTagForOperatorParams): TagsGetTagForOperator$Params {
  if (!params) {
    return {} as TagsGetTagForOperator$Params;
  }
  return {
      id: params.id,
  };
}

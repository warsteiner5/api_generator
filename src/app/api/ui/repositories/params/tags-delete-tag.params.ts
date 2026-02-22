import { TagsDeleteTag$Params } from '../../../swagger/fn/tags/tags-delete-tag';

// @ts-ignore
export interface TagsDeleteTagParams {
  id: number;
}

export function tagsDeleteTagAdapter(params?: TagsDeleteTagParams): TagsDeleteTag$Params {
  if (!params) {
    return {} as TagsDeleteTag$Params;
  }
  return {
      id: params.id,
  };
}

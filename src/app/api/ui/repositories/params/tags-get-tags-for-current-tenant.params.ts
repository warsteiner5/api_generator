import { TagsGetTagsForCurrentTenant$Params } from '../../../swagger/fn/tags/tags-get-tags-for-current-tenant';

// @ts-ignore
export interface TagsGetTagsForCurrentTenantParams {
}

export function tagsGetTagsForCurrentTenantAdapter(params?: TagsGetTagsForCurrentTenantParams): TagsGetTagsForCurrentTenant$Params {
  if (!params) {
    return {} as TagsGetTagsForCurrentTenant$Params;
  }
  return {
  };
}

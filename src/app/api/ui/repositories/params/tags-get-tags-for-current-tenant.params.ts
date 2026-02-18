import { TagsGetTagsForCurrentTenant$Params } from '../../../swagger/fn/tags/tags-get-tags-for-current-tenant';

export interface TagsGetTagsForCurrentTenantParams {
}

export const tagsGetTagsForCurrentTenantParamsAdapter = {
  adapt(params?: TagsGetTagsForCurrentTenantParams): TagsGetTagsForCurrentTenant$Params {
    if (!params) {
      return {} as TagsGetTagsForCurrentTenant$Params;
    }
    return {
    };
  }
};

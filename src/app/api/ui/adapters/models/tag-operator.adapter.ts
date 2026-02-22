import { ApiTagOperatorDto } from '../../../swagger/models/api-tag-operator-dto';
import { TagOperator } from '../../models/tag-operator.interface';
import { tagObjectEnumAdapter } from '../enums/tag-object-enum.adapter';

export const tagOperatorAdapter = (source?: ApiTagOperatorDto | null): TagOperator => {
  return {
    code: source?.Code,
    description: source?.Description,
    filterText: source?.FilterText,
    hideable: source?.Hideable,
    hintText: source?.HintText,
    id: source?.Id,
    imageGuid: source?.ImageGuid,
    isActive: source?.IsActive,
    isEnabledByDefault: source?.IsEnabledByDefault,
    isTenantsIncluded: source?.IsTenantsIncluded,
    name: source?.Name,
    tagObject: source?.TagObject === null ? undefined : tagObjectEnumAdapter(source?.TagObject),
    tenantIds: source?.TenantIds,
  };
}

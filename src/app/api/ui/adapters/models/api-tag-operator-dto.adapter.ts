import { TagOperator } from '../../models/tag-operator.interface';
import { ApiTagOperatorDto } from '../../../swagger/models/api-tag-operator-dto';
import { apiTagObjectEnumAdapter } from '../enums/api-tag-object-enum.adapter';

export const apiTagOperatorDtoAdapter = (source?: TagOperator | null): ApiTagOperatorDto => {
  return {
    Code: source?.code,
    Description: source?.description,
    FilterText: source?.filterText,
    Hideable: source?.hideable,
    HintText: source?.hintText,
    Id: source?.id,
    ImageGuid: source?.imageGuid,
    IsActive: source?.isActive,
    IsEnabledByDefault: source?.isEnabledByDefault,
    IsTenantsIncluded: source?.isTenantsIncluded,
    Name: source?.name,
    TagObject: source?.tagObject === null ? undefined : apiTagObjectEnumAdapter(source?.tagObject),
    TenantIds: source?.tenantIds,
  };
}

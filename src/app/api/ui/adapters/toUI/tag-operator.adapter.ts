import { ApiTagOperatorDto } from '../../../swagger/models/api-tag-operator-dto';
import { TagOperator } from '../../models/tag-operator.interface';
import { adaptTagObjectEnumToUI } from './tag-object-enum.adapter';

export function adaptTagOperatorToUI(source?: ApiTagOperatorDto | null): TagOperator {
  return {
    code: source?.Code ?? '',
    description: source?.Description ?? '',
    filterText: source?.FilterText ?? '',
    hideable: source?.Hideable ?? false,
    hintText: source?.HintText ?? '',
    id: source?.Id ?? 0,
    imageGuid: source?.ImageGuid ?? '',
    isActive: source?.IsActive ?? false,
    isEnabledByDefault: source?.IsEnabledByDefault ?? false,
    isTenantsIncluded: source?.IsTenantsIncluded ?? false,
    name: source?.Name ?? '',
    tagObject: adaptTagObjectEnumToUI(source?.TagObject),
    tenantIds: source?.TenantIds ?? [],
  };
}

import { ApiWorkGroupDto } from '../../../swagger/models/api-work-group-dto';
import { WorkGroup } from '../../models/work-group.interface';
import { adaptPermissionToUI } from './permission.adapter';

export function adaptWorkGroupToUI(source?: ApiWorkGroupDto | null): WorkGroup {
  return {
    code: source?.Code ?? '',
    id: source?.Id ?? 0,
    isDefault: source?.IsDefault ?? false,
    name: source?.Name ?? '',
    permissions: (source?.Permissions ?? []).map((item) => adaptPermissionToUI(item)),
  };
}

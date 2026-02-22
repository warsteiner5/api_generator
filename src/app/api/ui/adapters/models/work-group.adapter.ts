import { ApiWorkGroupDto } from '../../../swagger/models/api-work-group-dto';
import { WorkGroup } from '../../models/work-group.interface';
import { permissionAdapter } from './permission.adapter';

export const workGroupAdapter = (source?: ApiWorkGroupDto | null): WorkGroup => {
  return {
    code: source?.Code,
    id: source?.Id,
    isDefault: source?.IsDefault,
    name: source?.Name,
    permissions: source?.Permissions?.map((item) => permissionAdapter(item)),
  };
}

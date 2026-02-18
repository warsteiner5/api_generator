import { WorkGroup } from '../../models/work-group.interface';
import { ApiWorkGroupDto } from '../../../swagger/models/api-work-group-dto';
import { adaptApiPermissionDto } from './api-permission-dto.adapter';

export function adaptApiWorkGroupDto(source?: WorkGroup | null): ApiWorkGroupDto {
  return {
    Code: source?.code,
    Id: source?.id,
    IsDefault: source?.isDefault,
    Name: source?.name,
    Permissions: (source?.permissions ?? []).map((item) => adaptApiPermissionDto(item)),
  };
}

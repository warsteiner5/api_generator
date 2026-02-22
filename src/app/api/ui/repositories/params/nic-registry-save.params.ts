import { NicRegistryAddEdit } from '../../models/nic-registry-add-edit.interface';
import { NicRegistrySave$Params } from '../../../swagger/fn/nic-registry/nic-registry-save';
import { apiNicRegistryAddEditDtoAdapter } from '../../adapters/models/api-nic-registry-add-edit-dto.adapter';

// @ts-ignore
export interface NicRegistrySaveParams {
  body?: NicRegistryAddEdit;
}

export function nicRegistrySaveAdapter(params?: NicRegistrySaveParams): NicRegistrySave$Params {
  if (!params) {
    return {} as NicRegistrySave$Params;
  }
  return {
      body: apiNicRegistryAddEditDtoAdapter(params.body),
  };
}

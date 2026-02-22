import { NicRegistriesSave$Params } from '../../../swagger/fn/nic-registries/nic-registries-save';
import { NicRegistryAddEdit } from '../../models/nic-registry-add-edit.interface';
import { apiNicRegistryAddEditDtoAdapter } from '../../adapters/models/api-nic-registry-add-edit-dto.adapter';

// @ts-ignore
export interface NicRegistriesSaveParams {
  body?: NicRegistryAddEdit;
}

export function nicRegistriesSaveAdapter(params?: NicRegistriesSaveParams): NicRegistriesSave$Params {
  if (!params) {
    return {} as NicRegistriesSave$Params;
  }
  return {
      body: apiNicRegistryAddEditDtoAdapter(params.body),
  };
}

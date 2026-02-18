import { NicRegistryAddEdit } from '../../models/nic-registry-add-edit.interface';
import { NicRegistrySave$Params } from '../../../swagger/fn/nic-registry/nic-registry-save';
import { adaptApiNicRegistryAddEditDto } from '../../adapters/toDto/api-nic-registry-add-edit-dto.adapter';

export interface NicRegistrySaveParams {
  body?: NicRegistryAddEdit;
}

export const nicRegistrySaveParamsAdapter = {
  adapt(params?: NicRegistrySaveParams): NicRegistrySave$Params {
    if (!params) {
      return {} as NicRegistrySave$Params;
    }
    return {
      body: adaptApiNicRegistryAddEditDto(params.body),
    };
  }
};

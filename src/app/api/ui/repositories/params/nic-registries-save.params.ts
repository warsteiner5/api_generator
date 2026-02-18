import { NicRegistriesSave$Params } from '../../../swagger/fn/nic-registries/nic-registries-save';
import { NicRegistryAddEdit } from '../../models/nic-registry-add-edit.interface';
import { adaptApiNicRegistryAddEditDto } from '../../adapters/toDto/api-nic-registry-add-edit-dto.adapter';

export interface NicRegistriesSaveParams {
  body?: NicRegistryAddEdit;
}

export const nicRegistriesSaveParamsAdapter = {
  adapt(params?: NicRegistriesSaveParams): NicRegistriesSave$Params {
    if (!params) {
      return {} as NicRegistriesSave$Params;
    }
    return {
      body: adaptApiNicRegistryAddEditDto(params.body),
    };
  }
};

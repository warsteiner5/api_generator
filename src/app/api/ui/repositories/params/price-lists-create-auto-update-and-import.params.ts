import { CreateOrUpdateAutoUpdateRequestAlt } from '../../models/create-or-update-auto-update-request-alt.interface';
import { PriceListsCreateAutoUpdateAndImport$Params } from '../../../swagger/fn/price-lists/price-lists-create-auto-update-and-import';
import { adaptApiCreateOrUpdateAutoUpdateRequestAltDto } from '../../adapters/toDto/api-create-or-update-auto-update-request.adapter';

export interface PriceListsCreateAutoUpdateAndImportParams {
  body?: CreateOrUpdateAutoUpdateRequestAlt;
}

export const priceListsCreateAutoUpdateAndImportParamsAdapter = {
  adapt(params?: PriceListsCreateAutoUpdateAndImportParams): PriceListsCreateAutoUpdateAndImport$Params {
    if (!params) {
      return {} as PriceListsCreateAutoUpdateAndImport$Params;
    }
    return {
      body: adaptApiCreateOrUpdateAutoUpdateRequestAltDto(params.body),
    };
  }
};

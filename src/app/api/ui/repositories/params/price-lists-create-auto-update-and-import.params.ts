import { CreateOrUpdateAutoUpdateRequestAlt } from '../../models/create-or-update-auto-update-request-alt.interface';
import { PriceListsCreateAutoUpdateAndImport$Params } from '../../../swagger/fn/price-lists/price-lists-create-auto-update-and-import';
import { apiCreateOrUpdateAutoUpdateRequestAltDtoAdapter } from '../../adapters/models/api-create-or-update-auto-update-request.adapter';

// @ts-ignore
export interface PriceListsCreateAutoUpdateAndImportParams {
  body?: CreateOrUpdateAutoUpdateRequestAlt;
}

export function priceListsCreateAutoUpdateAndImportAdapter(params?: PriceListsCreateAutoUpdateAndImportParams): PriceListsCreateAutoUpdateAndImport$Params {
  if (!params) {
    return {} as PriceListsCreateAutoUpdateAndImport$Params;
  }
  return {
      body: apiCreateOrUpdateAutoUpdateRequestAltDtoAdapter(params.body),
  };
}

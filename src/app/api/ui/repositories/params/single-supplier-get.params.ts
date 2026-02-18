import { SingleSupplierGet$Params } from '../../../swagger/fn/single-supplier/single-supplier-get';

export interface SingleSupplierGetParams {
  id: number;
}

export const singleSupplierGetParamsAdapter = {
  adapt(params?: SingleSupplierGetParams): SingleSupplierGet$Params {
    if (!params) {
      return {} as SingleSupplierGet$Params;
    }
    return {
      id: params.id,
    };
  }
};

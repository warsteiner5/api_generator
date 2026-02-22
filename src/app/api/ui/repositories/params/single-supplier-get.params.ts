import { SingleSupplierGet$Params } from '../../../swagger/fn/single-supplier/single-supplier-get';

// @ts-ignore
export interface SingleSupplierGetParams {
  id: number;
}

export function singleSupplierGetAdapter(params?: SingleSupplierGetParams): SingleSupplierGet$Params {
  if (!params) {
    return {} as SingleSupplierGet$Params;
  }
  return {
      id: params.id,
  };
}

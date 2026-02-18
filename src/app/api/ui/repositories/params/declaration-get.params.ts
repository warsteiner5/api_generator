import { DeclarationGet$Params } from '../../../swagger/fn/declaration/declaration-get';

export interface DeclarationGetParams {
}

export const declarationGetParamsAdapter = {
  adapt(params?: DeclarationGetParams): DeclarationGet$Params {
    if (!params) {
      return {} as DeclarationGet$Params;
    }
    return {
    };
  }
};

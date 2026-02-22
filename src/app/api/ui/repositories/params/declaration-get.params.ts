import { DeclarationGet$Params } from '../../../swagger/fn/declaration/declaration-get';

// @ts-ignore
export interface DeclarationGetParams {
}

export function declarationGetAdapter(params?: DeclarationGetParams): DeclarationGet$Params {
  if (!params) {
    return {} as DeclarationGet$Params;
  }
  return {
  };
}

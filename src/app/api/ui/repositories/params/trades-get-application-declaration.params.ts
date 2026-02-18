import { TradesGetApplicationDeclaration$Params } from '../../../swagger/fn/trades/trades-get-application-declaration';

export interface TradesGetApplicationDeclarationParams {
}

export const tradesGetApplicationDeclarationParamsAdapter = {
  adapt(params?: TradesGetApplicationDeclarationParams): TradesGetApplicationDeclaration$Params {
    if (!params) {
      return {} as TradesGetApplicationDeclaration$Params;
    }
    return {
    };
  }
};

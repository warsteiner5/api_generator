import { adaptEisDictionaryItemAltToUI } from '../adapters/toUI/eis-dictionary-item-alt.adapter';
import { adaptTradePlan223PositionToUI } from '../adapters/toUI/trade-plan-223-position.adapter';
import { adaptValidationResultAltToUI } from '../adapters/toUI/validation-result-alt.adapter';
import { EisDataApiService } from '../../swagger/services/eis-data-api.service';
import { EisDataGetPlanPositionDetailsParams, eisDataGetPlanPositionDetailsParamsAdapter } from './params/eis-data-get-plan-position-details.params';
import { EisDataSearchProtocolTypesParams, eisDataSearchProtocolTypesParamsAdapter } from './params/eis-data-search-protocol-types.params';
import { EisDataSearchPurchaseMethodsParams, eisDataSearchPurchaseMethodsParamsAdapter } from './params/eis-data-search-purchase-methods.params';
import { EisDataValidateEisPlanParams, eisDataValidateEisPlanParamsAdapter } from './params/eis-data-validate-eis-plan.params';
import { EisDictionaryItemAlt } from '../models/eis-dictionary-item-alt.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TradePlan223Position } from '../models/trade-plan-223-position.interface';
import { ValidationResultAlt } from '../models/validation-result-alt.interface';

@Injectable({ providedIn: 'root' })
export class EisDataRepository {
  private readonly _api = inject(EisDataApiService);

  eisDataGetPlanPositionDetails(params: EisDataGetPlanPositionDetailsParams): Observable<TradePlan223Position> {
    return this._api.eisDataGetPlanPositionDetails(eisDataGetPlanPositionDetailsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradePlan223PositionToUI(res?.data))
    );
  }

  eisDataSearchProtocolTypes(params: EisDataSearchProtocolTypesParams): Observable<EisDictionaryItemAlt[]> {
    return this._api.eisDataSearchProtocolTypes(eisDataSearchProtocolTypesParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptEisDictionaryItemAltToUI(item)))
    );
  }

  eisDataSearchPurchaseMethods(params: EisDataSearchPurchaseMethodsParams): Observable<EisDictionaryItemAlt[]> {
    return this._api.eisDataSearchPurchaseMethods(eisDataSearchPurchaseMethodsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptEisDictionaryItemAltToUI(item)))
    );
  }

  eisDataValidateEisPlan(params: EisDataValidateEisPlanParams): Observable<ValidationResultAlt> {
    return this._api.eisDataValidateEisPlan(eisDataValidateEisPlanParamsAdapter.adapt(params)).pipe(
      map((res) => adaptValidationResultAltToUI(res?.data))
    );
  }

}

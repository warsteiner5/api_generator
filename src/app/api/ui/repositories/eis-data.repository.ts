import { EisDataApiService } from '../../swagger/services/eis-data-api.service';
import { EisDataGetPlanPositionDetailsParams, eisDataGetPlanPositionDetailsAdapter } from './params/eis-data-get-plan-position-details.params';
import { EisDataSearchProtocolTypesParams, eisDataSearchProtocolTypesAdapter } from './params/eis-data-search-protocol-types.params';
import { EisDataSearchPurchaseMethodsParams, eisDataSearchPurchaseMethodsAdapter } from './params/eis-data-search-purchase-methods.params';
import { EisDataValidateEisPlanParams, eisDataValidateEisPlanAdapter } from './params/eis-data-validate-eis-plan.params';
import { EisDictionaryItemAlt } from '../models/eis-dictionary-item-alt.interface';
import { eisDictionaryItemAltAdapter } from '../adapters/models/eis-dictionary-item-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TradePlan223Position } from '../models/trade-plan-223-position.interface';
import { tradePlan223PositionAdapter } from '../adapters/models/trade-plan-223-position.adapter';
import { ValidationResultAlt } from '../models/validation-result-alt.interface';
import { validationResultAltAdapter } from '../adapters/models/validation-result-alt.adapter';

@Injectable({ providedIn: 'root' })
export class EisDataRepository {
  private readonly _api = inject(EisDataApiService);

  eisDataGetPlanPositionDetails(params: EisDataGetPlanPositionDetailsParams): Observable<TradePlan223Position> {
    return this._api.eisDataGetPlanPositionDetails(eisDataGetPlanPositionDetailsAdapter(params)).pipe(
      map((res) => tradePlan223PositionAdapter(res?.data))
    );
  }

  eisDataSearchProtocolTypes(params: EisDataSearchProtocolTypesParams): Observable<EisDictionaryItemAlt[]> {
    return this._api.eisDataSearchProtocolTypes(eisDataSearchProtocolTypesAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => eisDictionaryItemAltAdapter(item)))
    );
  }

  eisDataSearchPurchaseMethods(params: EisDataSearchPurchaseMethodsParams): Observable<EisDictionaryItemAlt[]> {
    return this._api.eisDataSearchPurchaseMethods(eisDataSearchPurchaseMethodsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => eisDictionaryItemAltAdapter(item)))
    );
  }

  eisDataValidateEisPlan(params: EisDataValidateEisPlanParams): Observable<ValidationResultAlt> {
    return this._api.eisDataValidateEisPlan(eisDataValidateEisPlanAdapter(params)).pipe(
      map((res) => validationResultAltAdapter(res?.data))
    );
  }

}

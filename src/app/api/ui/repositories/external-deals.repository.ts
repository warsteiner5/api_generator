import { adaptApiResultAltToUI } from '../adapters/toUI/api-result-alt.adapter';
import { adaptApiResultOfInteger2AltToUI } from '../adapters/toUI/api-result-of-integer-2-alt.adapter';
import { adaptExternalDealToUI } from '../adapters/toUI/external-deal.adapter';
import { adaptExternalDealTradeInfoToUI } from '../adapters/toUI/external-deal-trade-info.adapter';
import { ApiResultAlt } from '../models/api-result-alt.interface';
import { ApiResultOfInteger2Alt } from '../models/api-result-of-integer-2-alt.interface';
import { ExternalDeal } from '../models/external-deal.interface';
import { ExternalDealsApiService } from '../../swagger/services/external-deals-api.service';
import { ExternalDealsCreateExternalDealParams, externalDealsCreateExternalDealParamsAdapter } from './params/external-deals-create-external-deal.params';
import { ExternalDealsDeleteExternalDealParams, externalDealsDeleteExternalDealParamsAdapter } from './params/external-deals-delete-external-deal.params';
import { ExternalDealsGetExternalDealParams, externalDealsGetExternalDealParamsAdapter } from './params/external-deals-get-external-deal.params';
import { ExternalDealsGetExternalDealTradeParams, externalDealsGetExternalDealTradeParamsAdapter } from './params/external-deals-get-external-deal-trade.params';
import { ExternalDealsPublish2Params, externalDealsPublish2ParamsAdapter } from './params/external-deals-publish-2.params';
import { ExternalDealsPublishParams, externalDealsPublishParamsAdapter } from './params/external-deals-publish.params';
import { ExternalDealsReplaceParams, externalDealsReplaceParamsAdapter } from './params/external-deals-replace.params';
import { ExternalDealTradeInfo } from '../models/external-deal-trade-info.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExternalDealsRepository {
  private readonly _api = inject(ExternalDealsApiService);

  externalDealsCreateExternalDeal(params?: ExternalDealsCreateExternalDealParams): Observable<ApiResultOfInteger2Alt> {
    return this._api.externalDealsCreateExternalDeal(externalDealsCreateExternalDealParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiResultOfInteger2AltToUI(res))
    );
  }

  externalDealsDeleteExternalDeal(params: ExternalDealsDeleteExternalDealParams): Observable<Blob> {
    return this._api.externalDealsDeleteExternalDeal(externalDealsDeleteExternalDealParamsAdapter.adapt(params));
  }

  externalDealsGetExternalDeal(params: ExternalDealsGetExternalDealParams): Observable<ExternalDeal> {
    return this._api.externalDealsGetExternalDeal(externalDealsGetExternalDealParamsAdapter.adapt(params)).pipe(
      map((res) => adaptExternalDealToUI(res))
    );
  }

  externalDealsGetExternalDealTrade(params: ExternalDealsGetExternalDealTradeParams): Observable<ExternalDealTradeInfo> {
    return this._api.externalDealsGetExternalDealTrade(externalDealsGetExternalDealTradeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptExternalDealTradeInfoToUI(res))
    );
  }

  externalDealsPublish(params?: ExternalDealsPublishParams): Observable<ApiResultOfInteger2Alt> {
    return this._api.externalDealsPublish(externalDealsPublishParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiResultOfInteger2AltToUI(res))
    );
  }

  externalDealsPublish2(params: ExternalDealsPublish2Params): Observable<ApiResultAlt> {
    return this._api.externalDealsPublish2(externalDealsPublish2ParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiResultAltToUI(res))
    );
  }

  externalDealsReplace(params: ExternalDealsReplaceParams): Observable<ApiResultAlt> {
    return this._api.externalDealsReplace(externalDealsReplaceParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiResultAltToUI(res))
    );
  }

}

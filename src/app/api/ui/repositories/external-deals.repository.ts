import { ApiResultAlt } from '../models/api-result-alt.interface';
import { apiResultAltAdapter } from '../adapters/models/api-result-alt.adapter';
import { ApiResultOfInteger2Alt } from '../models/api-result-of-integer-2-alt.interface';
import { apiResultOfInteger2AltAdapter } from '../adapters/models/api-result-of-integer-2-alt.adapter';
import { ExternalDeal } from '../models/external-deal.interface';
import { externalDealAdapter } from '../adapters/models/external-deal.adapter';
import { ExternalDealsApiService } from '../../swagger/services/external-deals-api.service';
import { ExternalDealsCreateExternalDealParams, externalDealsCreateExternalDealAdapter } from './params/external-deals-create-external-deal.params';
import { ExternalDealsDeleteExternalDealParams, externalDealsDeleteExternalDealAdapter } from './params/external-deals-delete-external-deal.params';
import { ExternalDealsGetExternalDealParams, externalDealsGetExternalDealAdapter } from './params/external-deals-get-external-deal.params';
import { ExternalDealsGetExternalDealTradeParams, externalDealsGetExternalDealTradeAdapter } from './params/external-deals-get-external-deal-trade.params';
import { ExternalDealsPublish2Params, externalDealsPublish2Adapter } from './params/external-deals-publish-2.params';
import { ExternalDealsPublishParams, externalDealsPublishAdapter } from './params/external-deals-publish.params';
import { ExternalDealsReplaceParams, externalDealsReplaceAdapter } from './params/external-deals-replace.params';
import { ExternalDealTradeInfo } from '../models/external-deal-trade-info.interface';
import { externalDealTradeInfoAdapter } from '../adapters/models/external-deal-trade-info.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExternalDealsRepository {
  private readonly _api = inject(ExternalDealsApiService);

  externalDealsCreateExternalDeal(params?: ExternalDealsCreateExternalDealParams): Observable<ApiResultOfInteger2Alt> {
    return this._api.externalDealsCreateExternalDeal(externalDealsCreateExternalDealAdapter(params)).pipe(
      map((res) => apiResultOfInteger2AltAdapter(res))
    );
  }

  externalDealsDeleteExternalDeal(params: ExternalDealsDeleteExternalDealParams): Observable<Blob> {
    return this._api.externalDealsDeleteExternalDeal(externalDealsDeleteExternalDealAdapter(params));
  }

  externalDealsGetExternalDeal(params: ExternalDealsGetExternalDealParams): Observable<ExternalDeal> {
    return this._api.externalDealsGetExternalDeal(externalDealsGetExternalDealAdapter(params)).pipe(
      map((res) => externalDealAdapter(res))
    );
  }

  externalDealsGetExternalDealTrade(params: ExternalDealsGetExternalDealTradeParams): Observable<ExternalDealTradeInfo> {
    return this._api.externalDealsGetExternalDealTrade(externalDealsGetExternalDealTradeAdapter(params)).pipe(
      map((res) => externalDealTradeInfoAdapter(res))
    );
  }

  externalDealsPublish(params?: ExternalDealsPublishParams): Observable<ApiResultOfInteger2Alt> {
    return this._api.externalDealsPublish(externalDealsPublishAdapter(params)).pipe(
      map((res) => apiResultOfInteger2AltAdapter(res))
    );
  }

  externalDealsPublish2(params: ExternalDealsPublish2Params): Observable<ApiResultAlt> {
    return this._api.externalDealsPublish2(externalDealsPublish2Adapter(params)).pipe(
      map((res) => apiResultAltAdapter(res))
    );
  }

  externalDealsReplace(params: ExternalDealsReplaceParams): Observable<ApiResultAlt> {
    return this._api.externalDealsReplace(externalDealsReplaceAdapter(params)).pipe(
      map((res) => apiResultAltAdapter(res))
    );
  }

}

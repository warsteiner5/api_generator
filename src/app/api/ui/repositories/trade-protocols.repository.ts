import { adaptDiscussionItemToUI } from '../adapters/toUI/discussion-item.adapter';
import { adaptIDiscussionHistoryToUI } from '../adapters/toUI/i-discussion-history.adapter';
import { DiscussionItem } from '../models/discussion-item.interface';
import { IDiscussionHistory } from '../models/i-discussion-history.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TradeProtocolsApiService } from '../../swagger/services/trade-protocols-api.service';
import { TradeProtocolsGetAutoProtocolParams, tradeProtocolsGetAutoProtocolParamsAdapter } from './params/trade-protocols-get-auto-protocol.params';
import { TradeProtocolsGetDiscussionHistoryParams, tradeProtocolsGetDiscussionHistoryParamsAdapter } from './params/trade-protocols-get-discussion-history.params';
import { TradeProtocolsGetProtocolsHistoryParams, tradeProtocolsGetProtocolsHistoryParamsAdapter } from './params/trade-protocols-get-protocols-history.params';

@Injectable({ providedIn: 'root' })
export class TradeProtocolsRepository {
  private readonly _api = inject(TradeProtocolsApiService);

  tradeProtocolsGetAutoProtocol(params: TradeProtocolsGetAutoProtocolParams): Observable<string> {
    return this._api.tradeProtocolsGetAutoProtocol(tradeProtocolsGetAutoProtocolParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  tradeProtocolsGetDiscussionHistory(params: TradeProtocolsGetDiscussionHistoryParams): Observable<IDiscussionHistory[]> {
    return this._api.tradeProtocolsGetDiscussionHistory(tradeProtocolsGetDiscussionHistoryParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptIDiscussionHistoryToUI(item)))
    );
  }

  tradeProtocolsGetProtocolsHistory(params: TradeProtocolsGetProtocolsHistoryParams): Observable<DiscussionItem[]> {
    return this._api.tradeProtocolsGetProtocolsHistory(tradeProtocolsGetProtocolsHistoryParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDiscussionItemToUI(item)))
    );
  }

}

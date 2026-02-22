import { DiscussionItem } from '../models/discussion-item.interface';
import { discussionItemAdapter } from '../adapters/models/discussion-item.adapter';
import { IDiscussionHistory } from '../models/i-discussion-history.interface';
import { iDiscussionHistoryAdapter } from '../adapters/models/i-discussion-history.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TradeProtocolsApiService } from '../../swagger/services/trade-protocols-api.service';
import { TradeProtocolsGetAutoProtocolParams, tradeProtocolsGetAutoProtocolAdapter } from './params/trade-protocols-get-auto-protocol.params';
import { TradeProtocolsGetDiscussionHistoryParams, tradeProtocolsGetDiscussionHistoryAdapter } from './params/trade-protocols-get-discussion-history.params';
import { TradeProtocolsGetProtocolsHistoryParams, tradeProtocolsGetProtocolsHistoryAdapter } from './params/trade-protocols-get-protocols-history.params';

@Injectable({ providedIn: 'root' })
export class TradeProtocolsRepository {
  private readonly _api = inject(TradeProtocolsApiService);

  tradeProtocolsGetAutoProtocol(params: TradeProtocolsGetAutoProtocolParams): Observable<string> {
    return this._api.tradeProtocolsGetAutoProtocol(tradeProtocolsGetAutoProtocolAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  tradeProtocolsGetDiscussionHistory(params: TradeProtocolsGetDiscussionHistoryParams): Observable<IDiscussionHistory[]> {
    return this._api.tradeProtocolsGetDiscussionHistory(tradeProtocolsGetDiscussionHistoryAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => iDiscussionHistoryAdapter(item)))
    );
  }

  tradeProtocolsGetProtocolsHistory(params: TradeProtocolsGetProtocolsHistoryParams): Observable<DiscussionItem[]> {
    return this._api.tradeProtocolsGetProtocolsHistory(tradeProtocolsGetProtocolsHistoryAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => discussionItemAdapter(item)))
    );
  }

}

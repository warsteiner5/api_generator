import { ApplicationAvailableOperation } from '../models/application-available-operation.interface';
import { applicationAvailableOperationAdapter } from '../adapters/models/application-available-operation.adapter';
import { AvailableOperationsApiService } from '../../swagger/services/available-operations-api.service';
import { AvailableOperationsGetByApplication2Params, availableOperationsGetByApplication2Adapter } from './params/available-operations-get-by-application-2.params';
import { AvailableOperationsGetByApplicationParams, availableOperationsGetByApplicationAdapter } from './params/available-operations-get-by-application.params';
import { AvailableOperationsGetByDealParams, availableOperationsGetByDealAdapter } from './params/available-operations-get-by-deal.params';
import { AvailableOperationsGetByOrderParams, availableOperationsGetByOrderAdapter } from './params/available-operations-get-by-order.params';
import { AvailableOperationsGetByQuotationSessionParams, availableOperationsGetByQuotationSessionAdapter } from './params/available-operations-get-by-quotation-session.params';
import { AvailableOperationsGetByTradeParams, availableOperationsGetByTradeAdapter } from './params/available-operations-get-by-trade.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrderAvailableOperations } from '../models/order-available-operations.interface';
import { orderAvailableOperationsAdapter } from '../adapters/models/order-available-operations.adapter';
import { QuotationSessionAvailableOperation } from '../models/quotation-session-available-operation.interface';
import { quotationSessionAvailableOperationAdapter } from '../adapters/models/quotation-session-available-operation.adapter';
import { TradeAvailableOperations } from '../models/trade-available-operations.interface';
import { tradeAvailableOperationsAdapter } from '../adapters/models/trade-available-operations.adapter';

@Injectable({ providedIn: 'root' })
export class AvailableOperationsRepository {
  private readonly _api = inject(AvailableOperationsApiService);

  availableOperationsGetByApplication(params: AvailableOperationsGetByApplicationParams): Observable<ApplicationAvailableOperation> {
    return this._api.availableOperationsGetByApplication(availableOperationsGetByApplicationAdapter(params)).pipe(
      map((res) => applicationAvailableOperationAdapter(res?.data))
    );
  }

  availableOperationsGetByApplication2(params: AvailableOperationsGetByApplication2Params): Observable<ApplicationAvailableOperation> {
    return this._api.availableOperationsGetByApplication2(availableOperationsGetByApplication2Adapter(params)).pipe(
      map((res) => applicationAvailableOperationAdapter(res?.data))
    );
  }

  availableOperationsGetByDeal(params: AvailableOperationsGetByDealParams): Observable<ApplicationAvailableOperation> {
    return this._api.availableOperationsGetByDeal(availableOperationsGetByDealAdapter(params)).pipe(
      map((res) => applicationAvailableOperationAdapter(res?.data))
    );
  }

  availableOperationsGetByOrder(params: AvailableOperationsGetByOrderParams): Observable<OrderAvailableOperations> {
    return this._api.availableOperationsGetByOrder(availableOperationsGetByOrderAdapter(params)).pipe(
      map((res) => orderAvailableOperationsAdapter(res?.data))
    );
  }

  availableOperationsGetByQuotationSession(params: AvailableOperationsGetByQuotationSessionParams): Observable<QuotationSessionAvailableOperation> {
    return this._api.availableOperationsGetByQuotationSession(availableOperationsGetByQuotationSessionAdapter(params)).pipe(
      map((res) => quotationSessionAvailableOperationAdapter(res?.data))
    );
  }

  availableOperationsGetByTrade(params: AvailableOperationsGetByTradeParams): Observable<TradeAvailableOperations> {
    return this._api.availableOperationsGetByTrade(availableOperationsGetByTradeAdapter(params)).pipe(
      map((res) => tradeAvailableOperationsAdapter(res?.data))
    );
  }

}

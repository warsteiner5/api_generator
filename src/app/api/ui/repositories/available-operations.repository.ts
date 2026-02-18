import { adaptApplicationAvailableOperationToUI } from '../adapters/toUI/application-available-operation.adapter';
import { adaptOrderAvailableOperationsToUI } from '../adapters/toUI/order-available-operations.adapter';
import { adaptQuotationSessionAvailableOperationToUI } from '../adapters/toUI/quotation-session-available-operation.adapter';
import { adaptTradeAvailableOperationsToUI } from '../adapters/toUI/trade-available-operations.adapter';
import { ApplicationAvailableOperation } from '../models/application-available-operation.interface';
import { AvailableOperationsApiService } from '../../swagger/services/available-operations-api.service';
import { AvailableOperationsGetByApplication2Params, availableOperationsGetByApplication2ParamsAdapter } from './params/available-operations-get-by-application-2.params';
import { AvailableOperationsGetByApplicationParams, availableOperationsGetByApplicationParamsAdapter } from './params/available-operations-get-by-application.params';
import { AvailableOperationsGetByDealParams, availableOperationsGetByDealParamsAdapter } from './params/available-operations-get-by-deal.params';
import { AvailableOperationsGetByOrderParams, availableOperationsGetByOrderParamsAdapter } from './params/available-operations-get-by-order.params';
import { AvailableOperationsGetByQuotationSessionParams, availableOperationsGetByQuotationSessionParamsAdapter } from './params/available-operations-get-by-quotation-session.params';
import { AvailableOperationsGetByTradeParams, availableOperationsGetByTradeParamsAdapter } from './params/available-operations-get-by-trade.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrderAvailableOperations } from '../models/order-available-operations.interface';
import { QuotationSessionAvailableOperation } from '../models/quotation-session-available-operation.interface';
import { TradeAvailableOperations } from '../models/trade-available-operations.interface';

@Injectable({ providedIn: 'root' })
export class AvailableOperationsRepository {
  private readonly _api = inject(AvailableOperationsApiService);

  availableOperationsGetByApplication(params: AvailableOperationsGetByApplicationParams): Observable<ApplicationAvailableOperation> {
    return this._api.availableOperationsGetByApplication(availableOperationsGetByApplicationParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApplicationAvailableOperationToUI(res?.data))
    );
  }

  availableOperationsGetByApplication2(params: AvailableOperationsGetByApplication2Params): Observable<ApplicationAvailableOperation> {
    return this._api.availableOperationsGetByApplication2(availableOperationsGetByApplication2ParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApplicationAvailableOperationToUI(res?.data))
    );
  }

  availableOperationsGetByDeal(params: AvailableOperationsGetByDealParams): Observable<ApplicationAvailableOperation> {
    return this._api.availableOperationsGetByDeal(availableOperationsGetByDealParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApplicationAvailableOperationToUI(res?.data))
    );
  }

  availableOperationsGetByOrder(params: AvailableOperationsGetByOrderParams): Observable<OrderAvailableOperations> {
    return this._api.availableOperationsGetByOrder(availableOperationsGetByOrderParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOrderAvailableOperationsToUI(res?.data))
    );
  }

  availableOperationsGetByQuotationSession(params: AvailableOperationsGetByQuotationSessionParams): Observable<QuotationSessionAvailableOperation> {
    return this._api.availableOperationsGetByQuotationSession(availableOperationsGetByQuotationSessionParamsAdapter.adapt(params)).pipe(
      map((res) => adaptQuotationSessionAvailableOperationToUI(res?.data))
    );
  }

  availableOperationsGetByTrade(params: AvailableOperationsGetByTradeParams): Observable<TradeAvailableOperations> {
    return this._api.availableOperationsGetByTrade(availableOperationsGetByTradeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradeAvailableOperationsToUI(res?.data))
    );
  }

}

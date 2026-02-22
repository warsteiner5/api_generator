import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketOrderAgreementHistory } from '../models/market-order-agreement-history.interface';
import { marketOrderAgreementHistoryAdapter } from '../adapters/models/market-order-agreement-history.adapter';
import { MarketOrderView } from '../models/market-order-view.interface';
import { marketOrderViewAdapter } from '../adapters/models/market-order-view.adapter';
import { Observable } from 'rxjs';
import { OrderFromCartCreatedInfoAlt } from '../models/order-from-cart-created-info-alt.interface';
import { orderFromCartCreatedInfoAltAdapter } from '../adapters/models/order-from-cart-created-info-alt.adapter';
import { OrdersAddAgreementByCustomerParams, ordersAddAgreementByCustomerAdapter } from './params/orders-add-agreement-by-customer.params';
import { OrdersAddAgreementByParticipantParams, ordersAddAgreementByParticipantAdapter } from './params/orders-add-agreement-by-participant.params';
import { OrdersApiService } from '../../swagger/services/orders-api.service';
import { OrdersApproveAgreementByCustomerParams, ordersApproveAgreementByCustomerAdapter } from './params/orders-approve-agreement-by-customer.params';
import { OrdersApproveAgreementByParticipantParams, ordersApproveAgreementByParticipantAdapter } from './params/orders-approve-agreement-by-participant.params';
import { OrdersCancelParams, ordersCancelAdapter } from './params/orders-cancel.params';
import { OrdersCreateAgreementAndDiscussionParams, ordersCreateAgreementAndDiscussionAdapter } from './params/orders-create-agreement-and-discussion.params';
import { OrdersCreateAndConcludeDealNonElectronicFormParams, ordersCreateAndConcludeDealNonElectronicFormAdapter } from './params/orders-create-and-conclude-deal-non-electronic-form.params';
import { OrdersCreateByExternalSystemParams, ordersCreateByExternalSystemAdapter } from './params/orders-create-by-external-system.params';
import { OrdersCreateFromCartParams, ordersCreateFromCartAdapter } from './params/orders-create-from-cart.params';
import { OrdersCreateParams, ordersCreateAdapter } from './params/orders-create.params';
import { OrdersGetAgreementHistoryParams, ordersGetAgreementHistoryAdapter } from './params/orders-get-agreement-history.params';
import { OrdersGetByIdParams, ordersGetByIdAdapter } from './params/orders-get-by-id.params';
import { OrdersGetLastAgreementHistoryParams, ordersGetLastAgreementHistoryAdapter } from './params/orders-get-last-agreement-history.params';
import { OrdersRejectAgreementByCustomerParams, ordersRejectAgreementByCustomerAdapter } from './params/orders-reject-agreement-by-customer.params';
import { OrdersRejectAgreementByParticipantParams, ordersRejectAgreementByParticipantAdapter } from './params/orders-reject-agreement-by-participant.params';
import { PublishApplicationResultAlt } from '../models/publish-application-result-alt.interface';
import { publishApplicationResultAltAdapter } from '../adapters/models/publish-application-result-alt.adapter';

@Injectable({ providedIn: 'root' })
export class OrdersRepository {
  private readonly _api = inject(OrdersApiService);

  ordersAddAgreementByCustomer(params: OrdersAddAgreementByCustomerParams): Observable<number> {
    return this._api.ordersAddAgreementByCustomer(ordersAddAgreementByCustomerAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersAddAgreementByParticipant(params: OrdersAddAgreementByParticipantParams): Observable<number> {
    return this._api.ordersAddAgreementByParticipant(ordersAddAgreementByParticipantAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersApproveAgreementByCustomer(params: OrdersApproveAgreementByCustomerParams): Observable<number> {
    return this._api.ordersApproveAgreementByCustomer(ordersApproveAgreementByCustomerAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersApproveAgreementByParticipant(params?: OrdersApproveAgreementByParticipantParams): Observable<PublishApplicationResultAlt> {
    return this._api.ordersApproveAgreementByParticipant(ordersApproveAgreementByParticipantAdapter(params)).pipe(
      map((res) => publishApplicationResultAltAdapter(res?.data))
    );
  }

  ordersCancel(params: OrdersCancelParams): Observable<number> {
    return this._api.ordersCancel(ordersCancelAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersCreate(params?: OrdersCreateParams): Observable<number> {
    return this._api.ordersCreate(ordersCreateAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersCreateAgreementAndDiscussion(params: OrdersCreateAgreementAndDiscussionParams): Observable<number> {
    return this._api.ordersCreateAgreementAndDiscussion(ordersCreateAgreementAndDiscussionAdapter(params));
  }

  ordersCreateAndConcludeDealNonElectronicForm(params?: OrdersCreateAndConcludeDealNonElectronicFormParams): Observable<Blob> {
    return this._api.ordersCreateAndConcludeDealNonElectronicForm(ordersCreateAndConcludeDealNonElectronicFormAdapter(params));
  }

  ordersCreateByExternalSystem(params?: OrdersCreateByExternalSystemParams): Observable<number> {
    return this._api.ordersCreateByExternalSystem(ordersCreateByExternalSystemAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersCreateFromCart(params?: OrdersCreateFromCartParams): Observable<OrderFromCartCreatedInfoAlt> {
    return this._api.ordersCreateFromCart(ordersCreateFromCartAdapter(params)).pipe(
      map((res) => orderFromCartCreatedInfoAltAdapter(res?.data))
    );
  }

  ordersGetAgreementHistory(params: OrdersGetAgreementHistoryParams): Observable<MarketOrderAgreementHistory[]> {
    return this._api.ordersGetAgreementHistory(ordersGetAgreementHistoryAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => marketOrderAgreementHistoryAdapter(item)))
    );
  }

  ordersGetById(params: OrdersGetByIdParams): Observable<MarketOrderView> {
    return this._api.ordersGetById(ordersGetByIdAdapter(params)).pipe(
      map((res) => marketOrderViewAdapter(res?.data))
    );
  }

  ordersGetLastAgreementHistory(params: OrdersGetLastAgreementHistoryParams): Observable<MarketOrderAgreementHistory> {
    return this._api.ordersGetLastAgreementHistory(ordersGetLastAgreementHistoryAdapter(params)).pipe(
      map((res) => marketOrderAgreementHistoryAdapter(res?.data))
    );
  }

  ordersRejectAgreementByCustomer(params: OrdersRejectAgreementByCustomerParams): Observable<number> {
    return this._api.ordersRejectAgreementByCustomer(ordersRejectAgreementByCustomerAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersRejectAgreementByParticipant(params: OrdersRejectAgreementByParticipantParams): Observable<number> {
    return this._api.ordersRejectAgreementByParticipant(ordersRejectAgreementByParticipantAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}

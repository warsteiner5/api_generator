import { adaptMarketOrderAgreementHistoryToUI } from '../adapters/toUI/market-order-agreement-history.adapter';
import { adaptMarketOrderViewToUI } from '../adapters/toUI/market-order-view.adapter';
import { adaptOrderFromCartCreatedInfoAltToUI } from '../adapters/toUI/order-from-cart-created-info-alt.adapter';
import { adaptPublishApplicationResultAltToUI } from '../adapters/toUI/publish-application-result-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketOrderAgreementHistory } from '../models/market-order-agreement-history.interface';
import { MarketOrderView } from '../models/market-order-view.interface';
import { Observable } from 'rxjs';
import { OrderFromCartCreatedInfoAlt } from '../models/order-from-cart-created-info-alt.interface';
import { OrdersAddAgreementByCustomerParams, ordersAddAgreementByCustomerParamsAdapter } from './params/orders-add-agreement-by-customer.params';
import { OrdersAddAgreementByParticipantParams, ordersAddAgreementByParticipantParamsAdapter } from './params/orders-add-agreement-by-participant.params';
import { OrdersApiService } from '../../swagger/services/orders-api.service';
import { OrdersApproveAgreementByCustomerParams, ordersApproveAgreementByCustomerParamsAdapter } from './params/orders-approve-agreement-by-customer.params';
import { OrdersApproveAgreementByParticipantParams, ordersApproveAgreementByParticipantParamsAdapter } from './params/orders-approve-agreement-by-participant.params';
import { OrdersCancelParams, ordersCancelParamsAdapter } from './params/orders-cancel.params';
import { OrdersCreateAgreementAndDiscussionParams, ordersCreateAgreementAndDiscussionParamsAdapter } from './params/orders-create-agreement-and-discussion.params';
import { OrdersCreateAndConcludeDealNonElectronicFormParams, ordersCreateAndConcludeDealNonElectronicFormParamsAdapter } from './params/orders-create-and-conclude-deal-non-electronic-form.params';
import { OrdersCreateByExternalSystemParams, ordersCreateByExternalSystemParamsAdapter } from './params/orders-create-by-external-system.params';
import { OrdersCreateFromCartParams, ordersCreateFromCartParamsAdapter } from './params/orders-create-from-cart.params';
import { OrdersCreateParams, ordersCreateParamsAdapter } from './params/orders-create.params';
import { OrdersGetAgreementHistoryParams, ordersGetAgreementHistoryParamsAdapter } from './params/orders-get-agreement-history.params';
import { OrdersGetByIdParams, ordersGetByIdParamsAdapter } from './params/orders-get-by-id.params';
import { OrdersGetLastAgreementHistoryParams, ordersGetLastAgreementHistoryParamsAdapter } from './params/orders-get-last-agreement-history.params';
import { OrdersRejectAgreementByCustomerParams, ordersRejectAgreementByCustomerParamsAdapter } from './params/orders-reject-agreement-by-customer.params';
import { OrdersRejectAgreementByParticipantParams, ordersRejectAgreementByParticipantParamsAdapter } from './params/orders-reject-agreement-by-participant.params';
import { PublishApplicationResultAlt } from '../models/publish-application-result-alt.interface';

@Injectable({ providedIn: 'root' })
export class OrdersRepository {
  private readonly _api = inject(OrdersApiService);

  ordersAddAgreementByCustomer(params: OrdersAddAgreementByCustomerParams): Observable<number> {
    return this._api.ordersAddAgreementByCustomer(ordersAddAgreementByCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersAddAgreementByParticipant(params: OrdersAddAgreementByParticipantParams): Observable<number> {
    return this._api.ordersAddAgreementByParticipant(ordersAddAgreementByParticipantParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersApproveAgreementByCustomer(params: OrdersApproveAgreementByCustomerParams): Observable<number> {
    return this._api.ordersApproveAgreementByCustomer(ordersApproveAgreementByCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersApproveAgreementByParticipant(params?: OrdersApproveAgreementByParticipantParams): Observable<PublishApplicationResultAlt> {
    return this._api.ordersApproveAgreementByParticipant(ordersApproveAgreementByParticipantParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPublishApplicationResultAltToUI(res?.data))
    );
  }

  ordersCancel(params: OrdersCancelParams): Observable<number> {
    return this._api.ordersCancel(ordersCancelParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersCreate(params?: OrdersCreateParams): Observable<number> {
    return this._api.ordersCreate(ordersCreateParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersCreateAgreementAndDiscussion(params: OrdersCreateAgreementAndDiscussionParams): Observable<number> {
    return this._api.ordersCreateAgreementAndDiscussion(ordersCreateAgreementAndDiscussionParamsAdapter.adapt(params));
  }

  ordersCreateAndConcludeDealNonElectronicForm(params?: OrdersCreateAndConcludeDealNonElectronicFormParams): Observable<Blob> {
    return this._api.ordersCreateAndConcludeDealNonElectronicForm(ordersCreateAndConcludeDealNonElectronicFormParamsAdapter.adapt(params));
  }

  ordersCreateByExternalSystem(params?: OrdersCreateByExternalSystemParams): Observable<number> {
    return this._api.ordersCreateByExternalSystem(ordersCreateByExternalSystemParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersCreateFromCart(params?: OrdersCreateFromCartParams): Observable<OrderFromCartCreatedInfoAlt> {
    return this._api.ordersCreateFromCart(ordersCreateFromCartParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOrderFromCartCreatedInfoAltToUI(res?.data))
    );
  }

  ordersGetAgreementHistory(params: OrdersGetAgreementHistoryParams): Observable<MarketOrderAgreementHistory[]> {
    return this._api.ordersGetAgreementHistory(ordersGetAgreementHistoryParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMarketOrderAgreementHistoryToUI(item)))
    );
  }

  ordersGetById(params: OrdersGetByIdParams): Observable<MarketOrderView> {
    return this._api.ordersGetById(ordersGetByIdParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketOrderViewToUI(res?.data))
    );
  }

  ordersGetLastAgreementHistory(params: OrdersGetLastAgreementHistoryParams): Observable<MarketOrderAgreementHistory> {
    return this._api.ordersGetLastAgreementHistory(ordersGetLastAgreementHistoryParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketOrderAgreementHistoryToUI(res?.data))
    );
  }

  ordersRejectAgreementByCustomer(params: OrdersRejectAgreementByCustomerParams): Observable<number> {
    return this._api.ordersRejectAgreementByCustomer(ordersRejectAgreementByCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  ordersRejectAgreementByParticipant(params: OrdersRejectAgreementByParticipantParams): Observable<number> {
    return this._api.ordersRejectAgreementByParticipant(ordersRejectAgreementByParticipantParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}

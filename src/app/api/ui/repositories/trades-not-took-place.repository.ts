import { adaptCanCreateChildTradeValidationResultAltToUI } from '../adapters/toUI/can-create-child-trade-validation-result-alt.adapter';
import { adaptNotTookPlaceLinkValidationResultAltToUI } from '../adapters/toUI/not-took-place-link-validation-result-alt.adapter';
import { adaptTradePublishResultAltToUI } from '../adapters/toUI/trade-publish-result-alt.adapter';
import { CanCreateChildTradeValidationResultAlt } from '../models/can-create-child-trade-validation-result-alt.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { NotTookPlaceLinkValidationResultAlt } from '../models/not-took-place-link-validation-result-alt.interface';
import { Observable } from 'rxjs';
import { TradePublishResultAlt } from '../models/trade-publish-result-alt.interface';
import { TradesNotTookPlaceApiService } from '../../swagger/services/trades-not-took-place-api.service';
import { TradesNotTookPlaceLinkNotTookPlaceTradeParams, tradesNotTookPlaceLinkNotTookPlaceTradeParamsAdapter } from './params/trades-not-took-place-link-not-took-place-trade.params';
import { TradesNotTookPlaceRepublishParams, tradesNotTookPlaceRepublishParamsAdapter } from './params/trades-not-took-place-republish.params';
import { TradesNotTookPlaceSetLapsedParams, tradesNotTookPlaceSetLapsedParamsAdapter } from './params/trades-not-took-place-set-lapsed.params';
import { TradesNotTookPlaceValidateCanCreateChildTradeParams, tradesNotTookPlaceValidateCanCreateChildTradeParamsAdapter } from './params/trades-not-took-place-validate-can-create-child-trade.params';
import { TradesNotTookPlaceValidateCartCanCreateChildTradeParams, tradesNotTookPlaceValidateCartCanCreateChildTradeParamsAdapter } from './params/trades-not-took-place-validate-cart-can-create-child-trade.params';
import { TradesNotTookPlaceValidatePossibilityToLinkParams, tradesNotTookPlaceValidatePossibilityToLinkParamsAdapter } from './params/trades-not-took-place-validate-possibility-to-link.params';

@Injectable({ providedIn: 'root' })
export class TradesNotTookPlaceRepository {
  private readonly _api = inject(TradesNotTookPlaceApiService);

  tradesNotTookPlaceLinkNotTookPlaceTrade(params: TradesNotTookPlaceLinkNotTookPlaceTradeParams): Observable<boolean> {
    return this._api.tradesNotTookPlaceLinkNotTookPlaceTrade(tradesNotTookPlaceLinkNotTookPlaceTradeParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesNotTookPlaceRepublish(params: TradesNotTookPlaceRepublishParams): Observable<TradePublishResultAlt> {
    return this._api.tradesNotTookPlaceRepublish(tradesNotTookPlaceRepublishParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradePublishResultAltToUI(res?.data))
    );
  }

  tradesNotTookPlaceSetLapsed(params: TradesNotTookPlaceSetLapsedParams): Observable<void> {
    return this._api.tradesNotTookPlaceSetLapsed(tradesNotTookPlaceSetLapsedParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesNotTookPlaceValidateCanCreateChildTrade(params?: TradesNotTookPlaceValidateCanCreateChildTradeParams): Observable<CanCreateChildTradeValidationResultAlt> {
    return this._api.tradesNotTookPlaceValidateCanCreateChildTrade(tradesNotTookPlaceValidateCanCreateChildTradeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCanCreateChildTradeValidationResultAltToUI(res?.data))
    );
  }

  tradesNotTookPlaceValidateCartCanCreateChildTrade(params?: TradesNotTookPlaceValidateCartCanCreateChildTradeParams): Observable<CanCreateChildTradeValidationResultAlt> {
    return this._api.tradesNotTookPlaceValidateCartCanCreateChildTrade(tradesNotTookPlaceValidateCartCanCreateChildTradeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCanCreateChildTradeValidationResultAltToUI(res?.data))
    );
  }

  tradesNotTookPlaceValidatePossibilityToLink(params: TradesNotTookPlaceValidatePossibilityToLinkParams): Observable<NotTookPlaceLinkValidationResultAlt> {
    return this._api.tradesNotTookPlaceValidatePossibilityToLink(tradesNotTookPlaceValidatePossibilityToLinkParamsAdapter.adapt(params)).pipe(
      map((res) => adaptNotTookPlaceLinkValidationResultAltToUI(res?.data))
    );
  }

}

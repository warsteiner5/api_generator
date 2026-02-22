import { CanCreateChildTradeValidationResultAlt } from '../models/can-create-child-trade-validation-result-alt.interface';
import { canCreateChildTradeValidationResultAltAdapter } from '../adapters/models/can-create-child-trade-validation-result-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { NotTookPlaceLinkValidationResultAlt } from '../models/not-took-place-link-validation-result-alt.interface';
import { notTookPlaceLinkValidationResultAltAdapter } from '../adapters/models/not-took-place-link-validation-result-alt.adapter';
import { Observable } from 'rxjs';
import { TradePublishResultAlt } from '../models/trade-publish-result-alt.interface';
import { tradePublishResultAltAdapter } from '../adapters/models/trade-publish-result-alt.adapter';
import { TradesNotTookPlaceApiService } from '../../swagger/services/trades-not-took-place-api.service';
import { TradesNotTookPlaceLinkNotTookPlaceTradeParams, tradesNotTookPlaceLinkNotTookPlaceTradeAdapter } from './params/trades-not-took-place-link-not-took-place-trade.params';
import { TradesNotTookPlaceRepublishParams, tradesNotTookPlaceRepublishAdapter } from './params/trades-not-took-place-republish.params';
import { TradesNotTookPlaceSetLapsedParams, tradesNotTookPlaceSetLapsedAdapter } from './params/trades-not-took-place-set-lapsed.params';
import { TradesNotTookPlaceValidateCanCreateChildTradeParams, tradesNotTookPlaceValidateCanCreateChildTradeAdapter } from './params/trades-not-took-place-validate-can-create-child-trade.params';
import { TradesNotTookPlaceValidateCartCanCreateChildTradeParams, tradesNotTookPlaceValidateCartCanCreateChildTradeAdapter } from './params/trades-not-took-place-validate-cart-can-create-child-trade.params';
import { TradesNotTookPlaceValidatePossibilityToLinkParams, tradesNotTookPlaceValidatePossibilityToLinkAdapter } from './params/trades-not-took-place-validate-possibility-to-link.params';

@Injectable({ providedIn: 'root' })
export class TradesNotTookPlaceRepository {
  private readonly _api = inject(TradesNotTookPlaceApiService);

  tradesNotTookPlaceLinkNotTookPlaceTrade(params: TradesNotTookPlaceLinkNotTookPlaceTradeParams): Observable<boolean> {
    return this._api.tradesNotTookPlaceLinkNotTookPlaceTrade(tradesNotTookPlaceLinkNotTookPlaceTradeAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesNotTookPlaceRepublish(params: TradesNotTookPlaceRepublishParams): Observable<TradePublishResultAlt> {
    return this._api.tradesNotTookPlaceRepublish(tradesNotTookPlaceRepublishAdapter(params)).pipe(
      map((res) => tradePublishResultAltAdapter(res?.data))
    );
  }

  tradesNotTookPlaceSetLapsed(params: TradesNotTookPlaceSetLapsedParams): Observable<void> {
    return this._api.tradesNotTookPlaceSetLapsed(tradesNotTookPlaceSetLapsedAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesNotTookPlaceValidateCanCreateChildTrade(params?: TradesNotTookPlaceValidateCanCreateChildTradeParams): Observable<CanCreateChildTradeValidationResultAlt> {
    return this._api.tradesNotTookPlaceValidateCanCreateChildTrade(tradesNotTookPlaceValidateCanCreateChildTradeAdapter(params)).pipe(
      map((res) => canCreateChildTradeValidationResultAltAdapter(res?.data))
    );
  }

  tradesNotTookPlaceValidateCartCanCreateChildTrade(params?: TradesNotTookPlaceValidateCartCanCreateChildTradeParams): Observable<CanCreateChildTradeValidationResultAlt> {
    return this._api.tradesNotTookPlaceValidateCartCanCreateChildTrade(tradesNotTookPlaceValidateCartCanCreateChildTradeAdapter(params)).pipe(
      map((res) => canCreateChildTradeValidationResultAltAdapter(res?.data))
    );
  }

  tradesNotTookPlaceValidatePossibilityToLink(params: TradesNotTookPlaceValidatePossibilityToLinkParams): Observable<NotTookPlaceLinkValidationResultAlt> {
    return this._api.tradesNotTookPlaceValidatePossibilityToLink(tradesNotTookPlaceValidatePossibilityToLinkAdapter(params)).pipe(
      map((res) => notTookPlaceLinkValidationResultAltAdapter(res?.data))
    );
  }

}

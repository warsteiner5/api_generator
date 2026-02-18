import { adaptBidInfoAltToUI } from '../adapters/toUI/bid-info-alt.adapter';
import { adaptSignBidResponseAltToUI } from '../adapters/toUI/sign-bid-response-alt.adapter';
import { BidApiService } from '../../swagger/services/bid-api.service';
import { BidCreateParams, bidCreateParamsAdapter } from './params/bid-create.params';
import { BidGetBidsParams, bidGetBidsParamsAdapter } from './params/bid-get-bids.params';
import { BidInfoAlt } from '../models/bid-info-alt.interface';
import { BidSignParams, bidSignParamsAdapter } from './params/bid-sign.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SignBidResponseAlt } from '../models/sign-bid-response-alt.interface';

@Injectable({ providedIn: 'root' })
export class BidRepository {
  private readonly _api = inject(BidApiService);

  bidCreate(params?: BidCreateParams): Observable<Blob> {
    return this._api.bidCreate(bidCreateParamsAdapter.adapt(params));
  }

  bidGetBids(params: BidGetBidsParams): Observable<BidInfoAlt[]> {
    return this._api.bidGetBids(bidGetBidsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptBidInfoAltToUI(item)))
    );
  }

  bidSign(params?: BidSignParams): Observable<SignBidResponseAlt> {
    return this._api.bidSign(bidSignParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSignBidResponseAltToUI(res?.data))
    );
  }

}

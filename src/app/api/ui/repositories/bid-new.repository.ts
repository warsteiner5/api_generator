import { adaptBidInfoAltToUI } from '../adapters/toUI/bid-info-alt.adapter';
import { adaptSignBidResponseAltToUI } from '../adapters/toUI/sign-bid-response-alt.adapter';
import { BidInfoAlt } from '../models/bid-info-alt.interface';
import { BidNewApiService } from '../../swagger/services/bid-new-api.service';
import { BidNewCreateParams, bidNewCreateParamsAdapter } from './params/bid-new-create.params';
import { BidNewGetBidsParams, bidNewGetBidsParamsAdapter } from './params/bid-new-get-bids.params';
import { BidNewSignParams, bidNewSignParamsAdapter } from './params/bid-new-sign.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SignBidResponseAlt } from '../models/sign-bid-response-alt.interface';

@Injectable({ providedIn: 'root' })
export class BidNewRepository {
  private readonly _api = inject(BidNewApiService);

  bidNewCreate(params?: BidNewCreateParams): Observable<Blob> {
    return this._api.bidNewCreate(bidNewCreateParamsAdapter.adapt(params));
  }

  bidNewGetBids(params: BidNewGetBidsParams): Observable<BidInfoAlt[]> {
    return this._api.bidNewGetBids(bidNewGetBidsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptBidInfoAltToUI(item)))
    );
  }

  bidNewSign(params?: BidNewSignParams): Observable<SignBidResponseAlt> {
    return this._api.bidNewSign(bidNewSignParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSignBidResponseAltToUI(res?.data))
    );
  }

}

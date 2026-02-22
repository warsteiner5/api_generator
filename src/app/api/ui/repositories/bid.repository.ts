import { BidApiService } from '../../swagger/services/bid-api.service';
import { BidCreateParams, bidCreateAdapter } from './params/bid-create.params';
import { BidGetBidsParams, bidGetBidsAdapter } from './params/bid-get-bids.params';
import { BidInfoAlt } from '../models/bid-info-alt.interface';
import { bidInfoAltAdapter } from '../adapters/models/bid-info-alt.adapter';
import { BidSignParams, bidSignAdapter } from './params/bid-sign.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SignBidResponseAlt } from '../models/sign-bid-response-alt.interface';
import { signBidResponseAltAdapter } from '../adapters/models/sign-bid-response-alt.adapter';

@Injectable({ providedIn: 'root' })
export class BidRepository {
  private readonly _api = inject(BidApiService);

  bidCreate(params?: BidCreateParams): Observable<Blob> {
    return this._api.bidCreate(bidCreateAdapter(params));
  }

  bidGetBids(params: BidGetBidsParams): Observable<BidInfoAlt[]> {
    return this._api.bidGetBids(bidGetBidsAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => bidInfoAltAdapter(item)))
    );
  }

  bidSign(params?: BidSignParams): Observable<SignBidResponseAlt> {
    return this._api.bidSign(bidSignAdapter(params)).pipe(
      map((res) => signBidResponseAltAdapter(res?.data))
    );
  }

}

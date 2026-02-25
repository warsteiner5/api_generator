import { BidInfoAlt } from '../models/bid-info-alt.interface';
import { BidNewApiService } from '../../swagger/services/bid-new-api.service';
import { BidNewCreateParams, bidNewCreateAdapter } from './params/bid-new-create.params';
import { BidNewGetBidsParams, bidNewGetBidsAdapter } from './params/bid-new-get-bids.params';
import { BidNewSignParams, bidNewSignAdapter } from './params/bid-new-sign.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfBidInfoOfAltAdapter } from '../adapters/models/market-pagination-result-of-bid-info-of-alt.adapter';
import { Observable } from 'rxjs';
import { SignBidResponseAlt } from '../models/sign-bid-response-alt.interface';
import { signBidResponseAltAdapter } from '../adapters/models/sign-bid-response-alt.adapter';

@Injectable({ providedIn: 'root' })
export class BidNewRepository {
  private readonly _api = inject(BidNewApiService);

  bidNewCreate(params?: BidNewCreateParams): Observable<Blob> {
    return this._api.bidNewCreate(bidNewCreateAdapter(params));
  }

  bidNewGetBids(params: BidNewGetBidsParams): Observable<MarketPaginationResult<BidInfoAlt[]>> {
    return this._api.bidNewGetBids(bidNewGetBidsAdapter(params)).pipe(
      map((res) => marketPaginationResultOfBidInfoOfAltAdapter(res?.data))
    );
  }

  bidNewSign(params?: BidNewSignParams): Observable<SignBidResponseAlt> {
    return this._api.bidNewSign(bidNewSignAdapter(params)).pipe(
      map((res) => signBidResponseAltAdapter(res?.data))
    );
  }

}

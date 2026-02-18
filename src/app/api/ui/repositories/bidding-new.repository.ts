import { adaptBiddingInfoAltToUI } from '../adapters/toUI/bidding-info-alt.adapter';
import { BiddingInfoAlt } from '../models/bidding-info-alt.interface';
import { BiddingNewApiService } from '../../swagger/services/bidding-new-api.service';
import { BiddingNewGetInfoParams, biddingNewGetInfoParamsAdapter } from './params/bidding-new-get-info.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BiddingNewRepository {
  private readonly _api = inject(BiddingNewApiService);

  biddingNewGetInfo(params: BiddingNewGetInfoParams): Observable<BiddingInfoAlt> {
    return this._api.biddingNewGetInfo(biddingNewGetInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptBiddingInfoAltToUI(res?.data))
    );
  }

}

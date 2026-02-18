import { adaptCompletedBiddingInfoAltToUI } from '../adapters/toUI/completed-bidding-info-alt.adapter';
import { BiddingDataNewApiService } from '../../swagger/services/bidding-data-new-api.service';
import { BiddingDataNewGetInfoParams, biddingDataNewGetInfoParamsAdapter } from './params/bidding-data-new-get-info.params';
import { CompletedBiddingInfoAlt } from '../models/completed-bidding-info-alt.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BiddingDataNewRepository {
  private readonly _api = inject(BiddingDataNewApiService);

  biddingDataNewGetInfo(params: BiddingDataNewGetInfoParams): Observable<CompletedBiddingInfoAlt> {
    return this._api.biddingDataNewGetInfo(biddingDataNewGetInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCompletedBiddingInfoAltToUI(res?.data))
    );
  }

}

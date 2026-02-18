import { adaptCompletedBiddingInfoAltToUI } from '../adapters/toUI/completed-bidding-info-alt.adapter';
import { BiddingDataApiService } from '../../swagger/services/bidding-data-api.service';
import { BiddingDataGetInfoParams, biddingDataGetInfoParamsAdapter } from './params/bidding-data-get-info.params';
import { CompletedBiddingInfoAlt } from '../models/completed-bidding-info-alt.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BiddingDataRepository {
  private readonly _api = inject(BiddingDataApiService);

  biddingDataGetInfo(params: BiddingDataGetInfoParams): Observable<CompletedBiddingInfoAlt> {
    return this._api.biddingDataGetInfo(biddingDataGetInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCompletedBiddingInfoAltToUI(res?.data))
    );
  }

}

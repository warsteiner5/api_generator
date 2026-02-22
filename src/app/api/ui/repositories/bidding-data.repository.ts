import { BiddingDataApiService } from '../../swagger/services/bidding-data-api.service';
import { BiddingDataGetInfoParams, biddingDataGetInfoAdapter } from './params/bidding-data-get-info.params';
import { CompletedBiddingInfoAlt } from '../models/completed-bidding-info-alt.interface';
import { completedBiddingInfoAltAdapter } from '../adapters/models/completed-bidding-info-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BiddingDataRepository {
  private readonly _api = inject(BiddingDataApiService);

  biddingDataGetInfo(params: BiddingDataGetInfoParams): Observable<CompletedBiddingInfoAlt> {
    return this._api.biddingDataGetInfo(biddingDataGetInfoAdapter(params)).pipe(
      map((res) => completedBiddingInfoAltAdapter(res?.data))
    );
  }

}

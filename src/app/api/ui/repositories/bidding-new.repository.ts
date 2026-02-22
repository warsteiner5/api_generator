import { BiddingInfoAlt } from '../models/bidding-info-alt.interface';
import { biddingInfoAltAdapter } from '../adapters/models/bidding-info-alt.adapter';
import { BiddingNewApiService } from '../../swagger/services/bidding-new-api.service';
import { BiddingNewGetInfoParams, biddingNewGetInfoAdapter } from './params/bidding-new-get-info.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BiddingNewRepository {
  private readonly _api = inject(BiddingNewApiService);

  biddingNewGetInfo(params: BiddingNewGetInfoParams): Observable<BiddingInfoAlt> {
    return this._api.biddingNewGetInfo(biddingNewGetInfoAdapter(params)).pipe(
      map((res) => biddingInfoAltAdapter(res?.data))
    );
  }

}

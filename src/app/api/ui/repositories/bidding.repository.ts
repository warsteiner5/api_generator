import { adaptBiddingInfoAltToUI } from '../adapters/toUI/bidding-info-alt.adapter';
import { BiddingApiService } from '../../swagger/services/bidding-api.service';
import { BiddingGetInfoParams, biddingGetInfoParamsAdapter } from './params/bidding-get-info.params';
import { BiddingInfoAlt } from '../models/bidding-info-alt.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BiddingRepository {
  private readonly _api = inject(BiddingApiService);

  biddingGetInfo(params: BiddingGetInfoParams): Observable<BiddingInfoAlt> {
    return this._api.biddingGetInfo(biddingGetInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptBiddingInfoAltToUI(res?.data))
    );
  }

}

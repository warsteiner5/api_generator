import { Injectable, inject } from '@angular/core';
import { MovingProApiService } from '../../swagger/services/moving-pro-api.service';
import { MovingProTransitionToMovingProParams, movingProTransitionToMovingProAdapter } from './params/moving-pro-transition-to-moving-pro.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovingProRepository {
  private readonly _api = inject(MovingProApiService);

  movingProTransitionToMovingPro(params?: MovingProTransitionToMovingProParams): Observable<Blob> {
    return this._api.movingProTransitionToMovingPro(movingProTransitionToMovingProAdapter(params));
  }

}

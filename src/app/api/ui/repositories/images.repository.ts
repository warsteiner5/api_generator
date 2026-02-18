import { ImagesApiService } from '../../swagger/services/images-api.service';
import { ImagesCompressImagesParams, imagesCompressImagesParamsAdapter } from './params/images-compress-images.params';
import { ImagesGetFaviconParams, imagesGetFaviconParamsAdapter } from './params/images-get-favicon.params';
import { ImagesUploadParams, imagesUploadParamsAdapter } from './params/images-upload.params';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ImagesRepository {
  private readonly _api = inject(ImagesApiService);

  imagesCompressImages(params?: ImagesCompressImagesParams): Observable<Blob> {
    return this._api.imagesCompressImages(imagesCompressImagesParamsAdapter.adapt(params));
  }

  imagesGetFavicon(params?: ImagesGetFaviconParams): Observable<Blob> {
    return this._api.imagesGetFavicon(imagesGetFaviconParamsAdapter.adapt(params));
  }

  imagesUpload(params?: ImagesUploadParams): Observable<any> {
    return this._api.imagesUpload(imagesUploadParamsAdapter.adapt(params));
  }

}

import { ImagesApiService } from '../../swagger/services/images-api.service';
import { ImagesCompressImagesParams, imagesCompressImagesAdapter } from './params/images-compress-images.params';
import { ImagesGetFaviconParams, imagesGetFaviconAdapter } from './params/images-get-favicon.params';
import { ImagesUploadParams, imagesUploadAdapter } from './params/images-upload.params';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ImagesRepository {
  private readonly _api = inject(ImagesApiService);

  imagesCompressImages(params?: ImagesCompressImagesParams): Observable<Blob> {
    return this._api.imagesCompressImages(imagesCompressImagesAdapter(params));
  }

  imagesGetFavicon(params?: ImagesGetFaviconParams): Observable<Blob> {
    return this._api.imagesGetFavicon(imagesGetFaviconAdapter(params));
  }

  imagesUpload(params?: ImagesUploadParams): Observable<any> {
    return this._api.imagesUpload(imagesUploadAdapter(params));
  }

}

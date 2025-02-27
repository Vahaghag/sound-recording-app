import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = "https://corsproxy.io/?https://api.deezer.com/chart/0";

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {
  #http = inject(HttpClient);

  constructor() {}

  public getPlaylist(): Observable<any> {
    return this.#http.get(API_URL);
  }
}

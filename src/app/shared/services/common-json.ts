import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonJson {
  jsonPath = '/assets/json_data/container.json';
  http = inject(HttpClient);
  getContainers() {
    return this.http.get<any>(this.jsonPath).pipe(
      map(response => response.containers)
    );
  }
}

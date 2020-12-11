import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnapiService {

  private baseUrl = 'https://test.spaceflightnewsapi.net/api/v2';

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<SnapiArticle[]>(`${this.baseUrl}/articles`);
  }

}

export interface SnapiArticle {
  events: SnapiArticleLLIntegration[];
  featured: boolean;
  id: string;
  imageUrl: string;
  launches: SnapiArticleLLIntegration[];
  newsSite: string;
  publishedAt: Date;
  summary: string;
  title: string;
  updatedAt: Date;
  url: string;
}

export interface SnapiArticleLLIntegration {
  id: string;
  provider: string;
}

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SnapiArticle, SnapiService } from '../snapi.service';

@Component({
  selector: 'app-article-feed',
  templateUrl: './article-feed.component.html',
  styleUrls: ['./article-feed.component.scss']
})
export class ArticleFeedComponent implements OnInit {

  public articles: SnapiArticle[] | null = null;

  constructor(private snapiService: SnapiService) { }

  ngOnInit(): void {
    this.snapiService.getArticles()
      .subscribe(res => this.articles = res);
  }

}

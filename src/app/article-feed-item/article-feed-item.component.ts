import { Component, Input } from '@angular/core';
import { SnapiArticle } from '../snapi.service';

@Component({
  selector: 'app-article-feed-item',
  templateUrl: './article-feed-item.component.html',
  styleUrls: ['./article-feed-item.component.scss']
})
export class ArticleFeedItemComponent {

  @Input() article: SnapiArticle | null = null;

}

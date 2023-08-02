import { makeAutoObservable } from "mobx";
import * as types from "./types";
import * as services from "./services";
import { News as NewsService } from "./services";

class News {
    constructor() {
        makeAutoObservable(this);
      }
      public readonly getAllNews = NewsService.AllNews; 
      public readonly getTopHeadlines = NewsService.TopHeadlines;
      public readonly getSources = NewsService.Sources;
}

export class Store {
    public readonly news = new News();
    
    constructor() {
        makeAutoObservable(this);
      }
}
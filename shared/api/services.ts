import { AxiosResponse } from 'axios';
import { $theNewsAPI_api_public } from './instances';
import * as types from './types';
import * as urls from './urls';

export class News {
    static async AllNews(
        {
         language, 
         q,
         from,
         to,
         sortBy,
         pageSize,
         page,

        }:types.ParamsAllNews): Promise<AxiosResponse<types.NewsResponseList<types.NewsItem>>> {
        return await $theNewsAPI_api_public.get<types.NewsResponseList<types.NewsItem>>(urls.news.getAllNews(), {
            params: {
                language, 
                q,
                from,
                to,
                sortBy,
                pageSize,
                page,
            }
        });
    }
    static async TopHeadlines(
        {
            q,
            country,
            category,
            pageSize,
            page,
            language
        }:types.ParamsTopHeadlines): Promise<AxiosResponse<types.NewsResponseList<types.NewsItem>>> {
        return await $theNewsAPI_api_public.get<types.NewsResponseList<types.NewsItem>>(urls.news.getTopHeadlines(), {
            params: {
                q,
                country,
                category,
                pageSize,
                page,
                language 
            }
        });
    }
    static async Sources(
        {
            country,
            category,
            language
        }:types.ParamsSources): Promise<AxiosResponse<types.NewsSourcesResponse>> {
        return await $theNewsAPI_api_public.get<types.NewsSourcesResponse>(urls.news.getSources(), {
            params: {
                country,
                category,
                language  
            }
        });
    }
}
import type { ComponentType } from 'react';

export interface IPost {
    id: string;
    title: string;
}

export interface IPostMetadata {
    title: string;
    description: string;
    section: string;
    last_updated_date: string;
    flags: {
        showCodeNotice: boolean;
    };
}

export interface IPostData extends IPostMetadata {
    Content: ComponentType;
}

export type IPosts = IPost[];

export interface ISection {
    description: string;
    posts: IPosts;
}

export interface IPostsConfig {
    [sectionId: string]: ISection;
}

export interface IAuthor {
  name: string;
  nickname: string;
  links: {
      github: string;
      linkedin: string;
  };
}

export type IAuthors = IAuthor[];

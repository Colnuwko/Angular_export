export interface Сoment {
  user: string,
  comment: string
}
export interface NewsInt {
  id: number,
  img: string,
  text: string,
  author: string,
  authorImg: string,
  datapublich: string,
  coments: Сoment[],
  likes: number,
  views: number
}

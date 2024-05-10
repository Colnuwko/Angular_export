export interface coment{
  text: string
}
export interface NewsInt {
  id: number,
  img: string,
  text: string,
  author: string,
  authorImg: string,
  datapublich: string,
  coments: coment[],
  likes: number
}

export interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
export interface IGenre {
  id: number;
  name: string;
  // other fields related to category
}
export interface IAccount {
  id: number;
  user: string;
  image_url: string;
  mobile_no: string;
  address: string;
  amount: number;
}
export interface IUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_superuser: boolean;
}
export interface IBook {
  id: number;
  isbn: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  genre: number;
  author: number;
  rating: number;
  reviews_count: number;
}
export interface IAuthor {
  id: number;
  name: string;
  bio: string;
  image: string;
  email: string;
  nationality: string;
  gender: string;
}
export interface IBorrow {
  id: number;
  borrower: number;
  book: number;
  borrow_status: string;
  created_on: string;
  balance_after_borrow: number;
  balance_after_return: number;
}
export interface IReview {
  id: number;
  title: string;
  body: string;
  reviewer: number;
  menu: number;
  rating: number;
  created: string;
}

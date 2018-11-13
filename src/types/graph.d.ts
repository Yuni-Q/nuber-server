export const typeDefs = ["type Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  address: String!\n  isFav: Boolean!\n  createAt: String!\n  updateAt: String\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  pickUpAddress: String!\n  pickUpLat: Float!\n  pickUpLng: Float!\n  dropOfAddress: String!\n  dropOfLat: Float!\n  dropOfLng: Float!\n  price: Float!\n  distance: String!\n  duration: String!\n  createAt: String!\n  updateAt: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  firstName: String!\n  lastName: String!\n  age: Int\n  password: String\n  phoneNumber: String\n  verifiedphoneNumber: Boolean!\n  profilePhoto: String\n  fullName: String\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float!\n  lastLat: Float!\n  lastOrientation: Float\n  createAt: String!\n  updateAt: String\n}\n\ntype Query {\n  user: User\n}\n\ntype Verification {\n  id: Int!\n  targer: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createAt: String!\n  updateAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  email: string | null;
  verifiedEmail: boolean;
  firstName: string;
  lastName: string;
  age: number | null;
  password: string | null;
  phoneNumber: string | null;
  verifiedphoneNumber: boolean;
  profilePhoto: string | null;
  fullName: string | null;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLng: number;
  lastLat: number;
  lastOrientation: number | null;
  createAt: string;
  updateAt: string | null;
}

export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  isFav: boolean;
  createAt: string;
  updateAt: string | null;
}

export interface Ride {
  id: number;
  status: string;
  pickUpAddress: string;
  pickUpLat: number;
  pickUpLng: number;
  dropOfAddress: string;
  dropOfLat: number;
  dropOfLng: number;
  price: number;
  distance: string;
  duration: string;
  createAt: string;
  updateAt: string | null;
}

export interface Verification {
  id: number;
  targer: string;
  payload: string;
  key: string;
  used: boolean;
  createAt: string;
  updateAt: string | null;
}

export const typeDefs = ["type Chat {\n  id: Int!\n  messages: [Message]!\n  paricipants: [User]!\n  createAt: String!\n  updateAt: String\n}\n\ntype Message {\n  id: Int!\n  text: String!\n  chat: Chat!\n  user: User!\n  createAt: String!\n  updateAt: String\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  address: String!\n  isFav: Boolean!\n  createAt: String!\n  updateAt: String\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  pickUpAddress: String!\n  pickUpLat: Float!\n  pickUpLng: Float!\n  dropOfAddress: String!\n  dropOfLat: Float!\n  dropOfLng: Float!\n  price: Float!\n  distance: String!\n  duration: String!\n  passenger: User!\n  driver: User!\n  createAt: String!\n  updateAt: String\n}\n\ntype CompleteVerificationResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  CompleteVerification(phoneNumber: String!, key: String!): CompleteVerificationResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(firstName: String!, lastName: String!, email: String!, password: String!, profilePhoto: String!, age: Int!, phoneNumber: String!): EmailSignUpResponse!\n  FacebookConnect(firstName: String!, lastName: String!, email: String, fbId: String!): FacebookConnectResponse!\n  StratPhoneVerification(phoneNumber: String!): StratPhoneVerificationResponse!\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype Query {\n  GetMyProfile: GetMyProfileResponse!\n}\n\ntype User {\n  id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  firstName: String!\n  lastName: String!\n  age: Int\n  password: String\n  phoneNumber: String\n  verifiedPhoneNumber: Boolean!\n  fbId: String\n  profilePhoto: String\n  fullName: String\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float!\n  lastLat: Float!\n  lastOrientation: Float\n  chat: Chat\n  messages: [Message]\n  ridesAsPassenger: [Ride]\n  ridesAsDriver: [Ride]\n  createAt: String!\n  updateAt: String\n}\n\ntype StratPhoneVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  Verified: Boolean!\n  createAt: String!\n  updateAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetMyProfile: GetMyProfileResponse;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
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
  verifiedPhoneNumber: boolean;
  fbId: string | null;
  profilePhoto: string | null;
  fullName: string | null;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLng: number;
  lastLat: number;
  lastOrientation: number | null;
  chat: Chat | null;
  messages: Array<Message> | null;
  ridesAsPassenger: Array<Ride> | null;
  ridesAsDriver: Array<Ride> | null;
  createAt: string;
  updateAt: string | null;
}

export interface Chat {
  id: number;
  messages: Array<Message>;
  paricipants: Array<User>;
  createAt: string;
  updateAt: string | null;
}

export interface Message {
  id: number;
  text: string;
  chat: Chat;
  user: User;
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
  passenger: User;
  driver: User;
  createAt: string;
  updateAt: string | null;
}

export interface Mutation {
  CompleteVerification: CompleteVerificationResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse;
  StratPhoneVerification: StratPhoneVerificationResponse;
}

export interface CompleteVerificationMutationArgs {
  phoneNumber: string;
  key: string;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePhoto: string;
  age: number;
  phoneNumber: string;
}

export interface FacebookConnectMutationArgs {
  firstName: string;
  lastName: string;
  email: string | null;
  fbId: string;
}

export interface StratPhoneVerificationMutationArgs {
  phoneNumber: string;
}

export interface CompleteVerificationResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface FacebookConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface StratPhoneVerificationResponse {
  ok: boolean;
  error: string | null;
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

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  Verified: boolean;
  createAt: string;
  updateAt: string | null;
}

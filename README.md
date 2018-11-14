# nuber-server

Sever for the (N)Uber Clone Course on Nomad Academy. GraphQL, Typescript, NodeJS<br>

## yarn install
```bash
yarn add typescript ts-node nodemon --dev
```

## 설명
### tsconfig
typescript를 설정하기 위한 파일<br>

### tslint
typescript linter를 설정하기 위한 파일<br>

## yarn install
```bash
yarn add tslint-config-prettier --dev
```
## DefinitelyType
Type를 정의 (Node도 버전별로 존재합니다.)
```bash
yarn add @types/node --dev
```

## GraphQLYoga
graphql로 개발환경을 만들어주는 것(create-react-app과 비슷)<br>
```bash
yarn add graphql-yoga
```

## 미들웨어
앱의 연걸이나 요청들을 다루는 방식을 수정하는 것<br>
```bash
yarn add helmet morgan cors
yarn add @types/cors @types/helmet @types/morgan --dev
```
> helmet : 보안을 위한 미들웨어

## DB

```bash
yarn add pg
psql
CREATE DATABASE nuber;
```

## 중간 확인
인터넷  
localhost:4000/playground
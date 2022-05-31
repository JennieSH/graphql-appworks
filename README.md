# GraphQL - Demo Code

## Summary

> Related Note : [GraphQL - Graph Query Language](https://hackmd.io/s8cRdtcYQdWOTtL24LXAHg?view)

可依照練習的需求，選擇想要的專案～

<br>

**Q1：** 只想使用 `GraphiQL` 練習寫 query

只需要起 server 即可，[步驟參考下方](#Server)，`GraphiQL` 會 run 在 http://localhost:4000/graphql

**Q2：** 只想練習前端接 GraphQL

需要同時起 server 和 client，[步驟參考下方](#Getting-Started)，另外，[feature/template](https://github.com/JennieSH/graphql-appworks/tree/feature/template) 有提供切好的版，但尚未串接 GraphQL (`client-js`)，可以單純練習前端 GraphQL 串接

**Q3：** 可以改接自己 DB 嗎？

可以，自行在 `app.js` 檔案中，更換自己的 MongoDB，或者直接使用別的 DB，但如果要同時使用前端的檔案，要注意 Schema 需照目前設計

### client 差別

|           | framework          | GraphQL Client                                                                                                              |
| --------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| client-js | React + JavaScript | [Apollo Client](https://www.apollographql.com/docs/)                                                                        |
| client-ts | React + TypeScript | [graphql-request](https://github.com/prisma-labs/graphql-request) + [react-query](https://react-query.tanstack.com/graphql) |

### Server

目前是使用 nodejs + MongoDB

## Getting Started

### Server

#### Installation

```shell
cd server-js
```

```shell
yarn
```

:bulb: 記得在 `.env` 補上 `DB_PASSWORD` (提示: school wifi password)

```shell
node app
# 有安裝 nodemon 可改用:
nodemon app
```

`GraphQL` server running at http://localhost:4000
`GraphiQL` IDE running at http://localhost:4000/graphql

### Client

#### Installation

```shell
cd client-js
# or
cd client-ts
```

```shell
yarn
```

```shell
yarn dev
```

Website start on http://localhost:3000

## Todo

- [ ] client 新增 vue3 + typescript 版本
- [ ] server 新增 typescript 版本

## 參考範例

- [TheNetNinja - GraphQL Tutorial](https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f)

const schema = `

type Query {
  product(id: Int!): Product
  products: [Product]
}

type Mutation{
  createProduct(name: String!, price: Int!, categoryId: Int!): Product
  updateProduct(id: Int!, name: String, price: Int, categoryId: Int): Product
  deleteProduct(id: Int!): Product
}

type Category {
  id: Int!
  name: String!
  products: [Product]
}

type Product{
  id: Int!
  name: String!
  price: Int!
  categoryId: Int!
}

`

export default schema;
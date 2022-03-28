const schema = `

type Query {
  user(aadharNumber: String!): User
  sms: String
  otpverify(otp:Int!): Boolean
  schemes: [Scheme]
}

type Mutation{
  createUser(name: String!, fatherName: String, address:String!, aadharNumber:String!,pincode: Int!, phoneNumber:String!, gender:String!,dateOfBirth: String!): User
  createScheme(name :String!):Scheme
}


type Scheme{
  id:Int!
  name:String!
}

type User{
  id: Int!
  name: String!
  fatherName: String
  address: String!
  aadharNumber: String!
  pincode: Int!
  phoneNumber: String!
  gender: String!
  dateOfBirth:String!
}

`




export default schema;
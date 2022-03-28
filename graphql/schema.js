const schema = `

type Scheme{
  id:Int!
  name:String!
}

input SchemeInput{
  id:Int!
  name:String!
}


type Query {
  user(aadharNumber: String!): User
  sms: String
  otpverify(otp:Int!): Boolean
  schemes: [Scheme]
}

type Mutation{
  createUser(name: String!, fatherName: String, address:String!, aadharNumber:String!,pincode: Int!, phoneNumber:String!, gender:String!,dateOfBirth: String!): User
  createScheme(name :String!):Scheme
  updateUser(aadharNumber: String!, scheme:[SchemeInput!]):User
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
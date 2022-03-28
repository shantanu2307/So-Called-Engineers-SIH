import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
import LocalStorage from 'node-localstorage'

const localStorage = new LocalStorage.LocalStorage('./scratch');

//dotenv
import dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
import Client from 'twilio';
const client = new Client(accountSid, authToken);


const resolvers = {
  Query: {
    user: async (_, obj) => {
      const { aadharNumber } = obj;
      const user = await prisma.user.findUnique({
        where: {
          aadharNumber: aadharNumber
        }
      });
      localStorage.setItem('phoneNumber', user.phoneNumber);
      return user;
    },
    sms: async (_, obj) => {
      const phoneNumber = localStorage.getItem("phoneNumber");
      // We will store OTP in local storage
      const otp = Math.floor(Math.random() * 9000) + 1000;
      await client.messages
        .create({
          body: 'Your OTP is ' + otp, from: '+15419200427', to: '+919599739926'
        })
        .then(message => console.log(message.sid));
      console.log(otp);
      localStorage.setItem('otp', otp);
      return "OTP IS SENT!";
    },
    otpverify: async (_, obj) => {
      const { otp } = obj;
      const OTP = localStorage.getItem('otp');
      if (Number(otp) == Number(OTP)) {
        return true;
      }
      return false;
    }
  },
  Mutation: {
    createUser: async (_, data) => {
      const user = await prisma.user.create({
        data: data
      });
      return user;
    }
  }
};
export default resolvers;
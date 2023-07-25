import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    name: "Adarsh",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Dushyant",
    email: "dushyant@gmail.com",
    password: "dushyant",
    address: "1524 Block-D, Gurugram,Haryana, 122001, India",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

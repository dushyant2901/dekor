export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const adress1 = {
  _id: Math.random() * 100,
  adress: "H.no-12,ashok vihar ph-3,gurgaon,haryana",
};
export const adress2 = {
  _id: Math.random() * 100,
  adress: "H.no-112,palam vihar ph-25,gurgaon,haryana",
};

export const guestLoginDetails = {
  email: "dushyant@gmail.com",
  password: "dushyant",
};
export const guestSignupDetails = {
  email: `rajat${parseInt(Math.random() * 1000)}@gmail.com`,
  username: `rajat${parseInt(Math.random() * 1000)}`,
  password: "12345",
  firstname: "Rajat",
  lastname: "Sharma",
  confirmPassword: "12345",
  hideIcon: { password: true, confirmPassword: true },
};

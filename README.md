## Table of contents

- [Overview](#overview)
- [User Stories](#user-stories)
- [Links](#links)
- [Built with](#built-with)
- [What I Explored](#what-i-explored)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)

### Overview

The challenge is to build an e-commerce platform using modern full-stack technologies.

### User Stories

- Build Front-end and Back-end using MERN technology.

**General**

- [x] Separate page for displaying all products and all categories.
- [x] Users should be able to add products to the cart if they are not logged in.
- [x] User should be able to see all the products and also the details of the products.
- [x] User should be able to see products categorically.
- [x] User should be able to see limited products and pagination at the bottom.
- [x] User should be able to filter based on price and category. Categories can be selected more than one.

**User**

- [x] User should be able to sign up and log in through different pages.
- [x] User should be able to reset their password if they forget and there should be a security question in order to reset it.
- [x] Users can continue to the order page if they are logged in.
- [x] User can manage their profile and orders through the Dashboard page.

**Admin**

- [x] Admin can create, update or delete products and categories.
- [x] Admin can check all the orders and update the status of the orders.
- [] Admin can see all the users and manage them.
- [x] Admin should be able to update their profile.

**Optional**

- [x] Implement a payment integration.
- [x] Use any CSS framework.

### Links

- Server Side Github Link: [https://github.com/zillur-rgb/e-com-server](https://github.com/zillur-rgb/e-com-server)
- Client Side Github Link: [https://github.com/zillur-rgb/e-com-client](https://github.com/zillur-rgb/e-com-client)
- Live URL: [https://e-com-iota-two.vercel.app/](https://e-com-iota-two.vercel.app/)

### Built with

- JavaScript
- Reactjs
- Context API
- Nodejs
- Expressjs
- Mongoose
- JSON Web Token
- Bcrypt
- Braintree Payment
- Bootstrap 5
- CSS 3

### What I Explored

- It was cool working with Braintree payment, it is a great way to implement Paypal and card in the same payment model.
- There are some states that needed to be maintained. I went with the Context API. The app is not that complex and I think no state management libraries are required for this project.

### Continued development

I will implement the user management section for admin. And also, I can make a lot of things reusable. Besides, I am thinking of using React-hook-form for form management. Paypal is also not working properly because I did not add my developer account.

### Useful resources

- Braintree Documentation
- Stackoverflow

### Author

- GitHub- [Github Link](https://github.com/zillur-rgb)
- LinkedIn - [LinkedIn Link](https://linkedin.com/in/zillur-rgb)
- Portfolio - [Portfolio Website](https://zillurdev.netlify.app)

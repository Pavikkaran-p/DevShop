# DevShop

Devshop is an e-commerce site


## Run Locally

Clone the project

```bash
  git clone https://github.com/Pavikkaran-p/DevShop
```

Go to the project directory

### Frontend

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Run frontend

```bash
  npm run dev
```
### Backend

Start the server

```bash
  cd backend
```

```bash
  npm run dev
```




# Using Docker
```
cd backend
docker build . -t devshop-backend
docker run -p 3000:3000 devshop-backend
```


## Tech Stack

**Frontend:** React, Redux, TailwindCSS

**Backend:** Node, Express

**DataBase:** Mongodb




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URL`
`RAZORPAY_KEY_ID`
`RAZORPAY_KEY_SECRET`
`JWT_SECRET_KEY`
`PORT`


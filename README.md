# Budgeting App

A budgeting app built with React that allows users to manage their transactions.

## Features

- View all transactions
- View details of a single transaction
- Add a new transaction
- Edit an existing transaction
- Delete a transaction

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/budgeting-app.git
   ```

### Navigate to the project directory:

- cd budgeting-app

### Install the dependencies:

- npm install

### Start the development server:

- npm start

## Usage

Navigate to the homepage (/) to view the summary and statistics of your transactions.
Click on "Transactions" in the navigation bar to view all transactions.
Click on a transaction to view its details.
Click on "Edit" to modify a transaction's details.
Click on "Delete" to remove a transaction.
Click on "New Transaction" to add a new transaction.

## Technologies Used

React
React Router Dom
Axios
Uuid
Moment

## API

The app communicates with a RESTful API to fetch and modify transaction data. The API endpoints used are:

GET /transactions - Fetch all transactions
GET /transactions/:id - Fetch a single transaction by ID
POST /transactions - Create a new transaction
PUT /transactions/:id - Update an existing transaction
DELETE /transactions/:id - Delete a transaction

## Deployments

Render: https://dashboard.render.com/web/srv-cik1o9mnqql0l1v30jug/deploys/dep-cik1oa6nqql0l1v30n50
Netlify: https://main--warm-sunflower-0b38c9.netlify.app/

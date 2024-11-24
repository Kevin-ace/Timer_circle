# TaskCircle

TaskCircle is a task management application that features a circular timer and a simple task list. Built with React, D3.js for data visualization, and Node.js for the backend, this application allows users to manage their tasks efficiently.

## Table of Contents

- [TaskCircle](#taskcircle)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [Example of a POST request:](#example-of-a-post-request)
  - [Contributing](#contributing)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB (for the backend)

### Technologies Used

- **Frontend**: React, D3.js, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **State Management**: Redux
- **Routing**: React Router

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/taskcircle.git
   cd taskcircle
   ```

2. **Install frontend dependencies**:
   ```bash
   cd taskcircle
   npm install
   ```

3. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   ```

4. **Set up MongoDB**:
   Make sure MongoDB is running on your local machine. You can use MongoDB Atlas for a cloud solution.

5. **Start the backend server**:
   ```bash
   cd backend
   node server.js
   ```

6. **Start the frontend application**:
   ```bash
   cd taskcircle
   npm start
   ```

7. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- **Circular Timer**: Visualize time management with a circular timer that represents hours in a day.
- **Task List**: Add tasks with a specific time and description. The tasks will be displayed in a list format.

## API Endpoints

- **GET /tasks**: Retrieve all tasks from the database.
- **POST /tasks**: Add a new task to the database. The request body should include `time` and `description`.

### Example of a POST request:

```json
{
  "time": "12:00",
  "description": "Lunch Break"
}
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
This is an ongoing project so i welcome any contributions.

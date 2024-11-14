
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Report",
        taskDate: "2024-11-12",
        taskDescription: "Compile the monthly report for the marketing team.",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDate: "2024-11-10",
        taskDescription: "Attend a meeting with client regarding project updates.",
        category: "Meetings"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Presentation",
        taskDate: "2024-11-14",
        taskDescription: "Present project progress to the team.",
        category: "Presentations"
      }
    ],
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 0 }
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDate: "2024-11-09",
        taskDescription: "Review the latest pull requests.",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDate: "2024-11-13",
        taskDescription: "Fix bugs reported in the QA phase.",
        category: "Debugging"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Documentation Update",
        taskDate: "2024-11-10",
        taskDescription: "Update project documentation.",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDate: "2024-11-11",
        taskDescription: "Integrate third-party APIs.",
        category: "Integration"
      }
    ],
    taskSummary: { active: 1, newTask: 1, completed: 2, failed: 1 }
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDate: "2024-11-15",
        taskDescription: "Conduct research on competitors.",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Feedback",
        taskDate: "2024-11-08",
        taskDescription: "Gather feedback from recent clients.",
        category: "Feedback"
      }
    ],
    taskSummary: { active: 1, newTask: 0, completed: 1, failed: 0 }
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Social Media Campaign",
        taskDate: "2024-11-14",
        taskDescription: "Launch new social media campaign.",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Website Maintenance",
        taskDate: "2024-11-09",
        taskDescription: "Perform scheduled maintenance on the website.",
        category: "IT Support"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Budget Analysis",
        taskDate: "2024-11-12",
        taskDescription: "Analyze the quarterly budget.",
        category: "Finance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Product Testing",
        taskDate: "2024-11-16",
        taskDescription: "Test the new product prototype.",
        category: "Quality Assurance"
      }
    ],
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 1 }
  }
];

  
  const admin = [
    {
      "id": 1,
      "email": "admin@me.com",
      "password": "123",
    }
  ];

  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage=()=>{
    const empolyees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return{employees,admin}
  }

  
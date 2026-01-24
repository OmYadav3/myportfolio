export const projects = [
    {
        id: 1,
        title: "CareerHunting",
        description:
            "CareerHunting is a full-stack job hunting and career management web application built with a modern MERN (MongoDB, Express, React, Node.js) stack. It helps users explore careers, track opportunities, and manage their job search process efficiently.",
        image: "", // Add a demo screenshot here if you have one
        category: "Full Stack",
        technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "Shadcn"],
        metrics:
            "• Frontend with interactive UI • Backend REST API • MongoDB for data persistence • Responsive design",
        demoUrl: "", // Add your deployed demo link
        githubUrl: "https://github.com/OmYadav3/CareerHunting",
    },
    {
        id: 2,
        title: "YouTube Backend",
        description:
            "YouTube Backend is a scalable and feature-rich RESTful API server designed to power a YouTube-style video hosting platform. Built with Node.js, Express.js, and MongoDB, it supports user authentication, video upload/streaming, likes/dislikes, comments, playlists, subscriptions, and more — all secured with JWT and integrated with Cloudinary for media uploads. ",
        image: "", // Add a backend architecture diagram or API workflow image here
        category: "Backend API",
        technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Cloudinary",
            "Multer",
        ],
        metrics:
            "• JWT Authentication • Video upload/stream endpoints • Comment & like system • Playlist & subscription support • Pagination & MVC structure",
        demoUrl: "", // Optional: You can link to API docs or a Postman collection
        githubUrl: "https://github.com/OmYadav3/youtube-backend",
    },
    {
        id: 3,
        title: "FivePages",
        description:
            "FivePages is a full-stack web application for book lovers and readers, allowing users to browse and read novels, explore trending and new releases, and engage with others. The project uses Next.js for the frontend and Node.js/Express with MongoDB for the backend, complete with authentication and reading features.",
        image: "", // Add a homepage or key UI screenshot here if available
        category: "Full Stack Web App",
        technologies: [
            "Next.js",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "JWT",
        ],
        metrics:
            "• Full-featured reading platform • User authentication & profiles • Novel browsing and search • Community discussions & comment support • Admin dashboard for content management",
        demoUrl: "https://five-pages-delta.vercel.app",
        githubUrl: "https://github.com/OmYadav3/FivePages",
    },
    {
        id: 4,
        title: "Recipe Page",
        description:
            "Recipe Page is a responsive static web page built as part of a Frontend Mentor challenge. It showcases a clean and modern recipe layout with sections for ingredients, instructions, preparation time, and nutrition information, focusing on semantic HTML and well-structured CSS.",
        image: "", // Add a screenshot of the recipe page UI
        category: "Frontend",
        technologies: ["HTML5", "CSS3", "Flexbox", "Responsive Design"],
        metrics:
            "• Semantic HTML structure • Mobile-first responsive layout • Clean typography & spacing • Pixel-perfect UI based on design specs",
        demoUrl: "", // Optional: GitHub Pages link if deployed
        githubUrl:
            "https://github.com/OmYadav3/frontend_mentor_projects/tree/main/Recipe-page",
    },
    {
        id: 5,
        title: "Resume Builder",
        description:
            "Resume Builder is a frontend web application that allows users to create professional resumes by filling in structured form data and generating a clean, well-formatted resume layout. The project focuses on user-friendly design, real-time preview, and clean UI for easy resume creation.",
        image: "", // Add a screenshot showing the resume editor or preview
        category: "Frontend",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        metrics:
            "• Dynamic resume generation • Real-time preview updates • Clean and professional layout • Responsive design for multiple devices",
        demoUrl: "https://op-resume-builder.netlify.app/",
        githubUrl: "https://github.com/Sweet-Combat/op-resume-builder",
    },
];


export const categories = ['All', 'Web Apps', 'UI Components', 'Full Stack'];

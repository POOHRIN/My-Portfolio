export interface Project {
  title: string
  description: string
  demoLink?: string
  repoLink: string
}

export const projects: Project[] = [
    {
    title: "CSTU Facility Booking Website",
    description: "A Facility Booking Website for Computer Scienece staff and student of Thammasat University using Vue and Firebase.(No demo because using TUAPI as authenticator)",
    demoLink: "",
    repoLink: "https://github.com/POOHRIN/CSTU-FACILITY-BOOKING-WEBSITE"
  },
  {
    title: "Task Manager Website (To Do List)",
    description: "A task manager app built with Vue and Firebase.",
    demoLink: "https://poohrin.github.io/Task-Manager-Website",
    repoLink: "https://github.com/POOHRIN/Task-Manager-Website"
  },
  {
    title: "My Portfolio Website",
    description: "A portfolio website using Vue and TailwindCSS. (This Website)",
    demoLink: "",
    repoLink: "https://github.com/POOHRIN/My-Portfolio"
  },
]

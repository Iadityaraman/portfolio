/**
 * Aditya Raman's Learning Journey Data
 * 
 * TO ADD A NEW DAY:
 * Simply add a new object to the top of this list!
 * Follow the format shown below.
 */

const JOURNEY_ENTRIES = [
  {
    day: "Day 28",
    date: "November 2026",
    title: "Version Control Mastery & Remote Collaboration",
    category: "Git & GitHub",
    summary: "Deep dive into branching strategies, managing merge conflicts without panic, and structuring clean git commits with meaningful commit messages.",
    tags: ["git branch", "merge conflicts", "github remotes"],
    badge: "Milestone"
  },
  {
    day: "Day 24",
    date: "Late October 2026",
    title: "Object-Oriented Thinking in Python",
    category: "Python",
    summary: "Moved beyond basic scripting into classes, objects, and encapsulation. Built a lightweight CLI task-tracker prototype to apply OOP concepts in practice.",
    tags: ["OOP", "Classes", "CLI tool"],
    badge: "Code"
  },
  {
    day: "Day 19",
    date: "Mid October 2026",
    title: "Command-Line Power Tools & Navigation",
    category: "Terminal",
    summary: "Comfortable navigating the file system blindly using only the shell. Practiced pipes, grep, sed basics, file redirection, and environment variables.",
    tags: ["bash", "grep", "pipes", "posix"],
    badge: "Core"
  },
  {
    day: "Day 14",
    date: "Early October 2026",
    title: "Algorithmic Logic & Data Structures in Python",
    category: "Python",
    summary: "Focused on lists, dictionaries, tuples, and sets. Solved fundamental algorithm challenges around string manipulation, two-pointer search, and basic recursion.",
    tags: ["data structures", "algorithms", "problem-solving"],
    badge: "Practice"
  },
  {
    day: "Day 07",
    date: "September 2026",
    title: "First Steps with Git & Repository Anatomy",
    category: "Git & GitHub",
    summary: "Initialized my very first git repository. Understood the 3 stages of git: working directory, staging area, and commit tree. Created my GitHub profile.",
    tags: ["git init", "staging", "commits"],
    badge: "First Step"
  },
  {
    day: "Day 01",
    date: "September 2026",
    title: "The Beginning: First-Year CSE & The 1% Rule",
    category: "CS Foundations",
    summary: "Started my Computer Science degree journey. Set up VS Code, configured zsh terminal, installed Python 3. Committed to coding every single day with the 1% philosophy.",
    tags: ["setup", "python3", "mindset"],
    badge: "Origin"
  }
];

// Project showcase data
const PROJECTS_DATA = [
  {
    title: "CLI Dev Note Keeper",
    status: "Active Project",
    category: "Python • Terminal",
    description: "A fast, minimalist command-line note-taking utility written in Python. Allows creating, searching, and tagging markdown notes directly from the shell without opening heavy GUI apps.",
    highlights: ["Argparse CLI interface", "JSON/Markdown persistence", "Interactive fuzzy search"],
    githubUrl: "https://github.com/iadityaraman",
    stars: "v0.2.0"
  },
  {
    title: "Number Systems & Base Converter",
    status: "Completed",
    category: "Python • CS Foundations",
    description: "An educational CLI application that visualizes binary, octal, decimal, and hexadecimal conversions step-by-step with IEEE-754 floating point and 2's complement explanations.",
    highlights: ["Step-by-step math breakdown", "Bitwise visualization", "Input validation"],
    githubUrl: "https://github.com/iadityaraman",
    stars: "v1.0.0"
  },
  {
    title: "Git Workflow Cheat Sheet & Scripter",
    status: "Building",
    category: "Bash • Git",
    description: "A lightweight terminal helper that assists beginners with safe Git recipes: undoing commits, stashing work cleanly, generating branch conventions, and inspecting commit trees.",
    highlights: ["Custom bash aliases", "Interactive branch cleaner", "Safe reset safeguards"],
    githubUrl: "https://github.com/iadityaraman",
    stars: "In Progress"
  }
];

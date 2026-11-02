export interface SkillNode {
  id: string;
  name: string;
  icon: string;
  category: string;
  status: 'CURRENTLY LEARNING' | 'EXPLORING' | 'COMPLETED';
  description: string;
  focus: string;
  progressPercent: number;
}

export interface ProjectEntry {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  status: string;
}

export interface TerminalCommand {
  cmd: string;
  output: string;
  timestamp: string;
}


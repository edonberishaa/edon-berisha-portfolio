import repos from '../data/repos.json';

export interface Project {
    title: string;
    date?: string;
    description: string[];
    github: string;
    technologies?: string[];
    status?: string;
}

export function getProjects(): Project[] {
    return repos.map((repo) => ({
        title: repo.name,
        github: repo.url,
        description: [repo.description || "No description provided."],
        technologies: [], // You can enrich manually later
        status: "Published"
    }));
}


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
    return repos.map((repo) => {
        // Special handling for the advanced churn pipeline project
        if (repo.name === 'advanced-churn-pipeline') {
            return {
                title: 'Advanced Churn ETL Pipeline',
                date: 'June 2025',
                github: repo.url,
                description: [repo.description || "No description provided."],
                technologies: ['Apache Airflow', 'Python', 'Scikit-learn', 'Docker'],
                status: "Developed"
            };
        }
        
        return {
            title: repo.name,
            github: repo.url,
            description: [repo.description || "No description provided."],
            technologies: [], // You can enrich manually later
            status: "Published"
        };
    });
}

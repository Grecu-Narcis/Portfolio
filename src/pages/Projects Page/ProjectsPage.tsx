import Layout from '../../components/Layout/Layout';
import Project from '../../components/Project/Project';
import projects from './projects';

import './ProjectsPage.css';

export default function ProjectsPage() {
    return (
        <Layout>
            <div id='projects-list'>
                {projects.map((project, index) => (
                    <Project {...project} key={index} />
                ))}
            </div>
        </Layout>
    );
}

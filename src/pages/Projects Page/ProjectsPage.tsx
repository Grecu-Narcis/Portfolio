import Layout from '../../components/Layout/Layout';
import Project from '../../components/Project/Project';
import projects from './projects';

import './ProjectsPage.css';

export default function ProjectsPage() {
    return (
        <Layout>
            <div id='projects-header'>
                <div id='projects-header-title'>Coding Around</div>
                <div id='projects-header-description'>
                    Here’s a collection of projects that highlight my journey in tech, showcasing creativity, code, and impactful solutions.
                </div>
            </div>

            <div id='border' />

            <div id='projects-list'>
                {projects.map((project, index) => (
                    <Project {...project} key={index} />
                ))}
            </div>
        </Layout>
    );
}

import React, { useEffect, useReducer } from 'react';
import projectsFixture from './../fixtures/projects';
import projectsReducer from './../reducers/projects';
import ProjectList from './../components/ProjectList';
import ProjectsContext from '../context/projects-context';

const ProjectsPage = () => {
    const [projects, dispatch] = useReducer(projectsReducer, []);

    useEffect(() => {
        const projects = projectsFixture;
        dispatch({ type: 'POPULATE_PROJECTS', projects});
    }, []);

    return (
        <ProjectsContext.Provider value={{ projects, dispatch }}>
            <div id="projects" className="spacer">
                <div className="page-header__main">
                    <div className="content-container">
                        <h1 className="page-header__title">Projects</h1>
                        <p>Click on the boxes below to learn more about each project</p>
                    </div>
                </div>
                <div className="content-container">
                    <ProjectList/>
                </div>
            </div>
        </ProjectsContext.Provider>
    )
};

export default ProjectsPage;
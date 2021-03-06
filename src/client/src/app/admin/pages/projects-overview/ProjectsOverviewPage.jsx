import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { ContentLayout } from '../../layouts';

import ProjectTablePage from '../projects-table';
import ProjectFormPage from '../project-form';

const tabs = [
	{ id: 'List', 'link': '/admin/projects' },
	{ id: 'Create new Project', 'link': '/admin/projects/create' },
];

class ProjectsOverviewPage extends Component {
	render() {
		const { children } = this.props;

		return (
			<ContentLayout title='Projects Overview' tabs={tabs}>
				{ children }
				<Route exact path="/admin/projects" component={ProjectTablePage}></Route>
				<Route path="/admin/projects/create" component={ ProjectFormPage }></Route>
        		<Route path="/admin/projects/:id/edit" component={ ProjectFormPage }></Route>
			</ContentLayout>
		)
	}
}

export default (ProjectsOverviewPage);

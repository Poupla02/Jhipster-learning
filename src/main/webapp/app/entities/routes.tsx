import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Blog from './blog';
import Post from './post';
import Tag from './tag';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default ({ match }) => {
  return (
    <div>
      <Switch>
        {/* prettier-ignore */}
        <ErrorBoundaryRoute path={`${match.url}blog`} component={Blog} />
        <ErrorBoundaryRoute path={`${match.url}post`} component={Post} />
        <ErrorBoundaryRoute path={`${match.url}tag`} component={Tag} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </Switch>
    </div>
  );
};

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import SettingsNav from '../components/UserSettings/SettingsNav';
import Basic from '../components/UserSettings/Basic';
import About from '../components/UserSettings/About';
import Photos from '../components/UserSettings/Photos';
import Account from '../components/UserSettings/Account';

function Settings() {
  return (
    <Grid>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic' />
          <Route path='/settings/basic' component={Basic} />
          <Route path='/settings/about' component={About} />
          <Route path='/settings/photos' component={Photos} />
          <Route path='/settings/account' component={Account} />
        </Switch>
      </Grid.Column>
    </Grid>
  );
}

export default Settings;

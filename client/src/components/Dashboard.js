import React, { Component } from 'react'
import { Grid, Button, Rail, Segment, Sticky } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import _ from 'lodash'

class Dashboard extends Component {

  state = {}
  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    return (
      <Grid centered columns={3}>
        <Grid.Column color="red">
          <div ref={this.handleContextRef}>
             <Segment basic>

              Dashboard

              <Rail position='right'>
                <Sticky context={contextRef} offset={10}>

                <Link to="/surveys/new" className="btn-floating btn-large red">
                  <Button circular icon='add'></Button>
                </Link>

                </Sticky>
              </Rail>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
};

export default Dashboard;

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';


export default class DevDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
        <div>
          <RaisedButton
              label="View Devs"
              onClick={this.handleToggle}
          />
          <Drawer
              docked={false}
              width={300}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
          >
            <AppBar title="Our Dev Team" />
            <List>
              <MenuItem onClick={this.handleClose}>
                <ListItem
                    disabled={true}
                    leftAvatar={
                      <Avatar src="https://lh5.googleusercontent.com/-noFALijmnT4/AAAAAAAAAAI/AAAAAAAABQo/JAu3e6ba2dU/photo.jpg" />
                    }

                >
                  Ryan Wilson
                </ListItem>
              </MenuItem>
              <MenuItem onClick={this.handleClose}><ListItem
                  disabled={true}
                  leftAvatar={
                    <Avatar src="https://lh5.googleusercontent.com/-q9RtYOIs0Oo/AAAAAAAAAAI/AAAAAAAAAAo/hgjTY29Gbr0/photo.jpg" />
                  }

              >
                Andrew Peterson
              </ListItem></MenuItem>
              <MenuItem onClick={this.handleClose}><ListItem
                  disabled={true}
                  leftAvatar={
                    <Avatar src="https://lh5.googleusercontent.com/-fKDAjdknR9g/AAAAAAAAAAI/AAAAAAAADWU/Pn62DCqc7wA/photo.jpg" />
                  }

              >
                Robert Mills
              </ListItem></MenuItem>
              <MenuItem onClick={this.handleClose}><ListItem
                  disabled={true}
                  leftAvatar={
                    <Avatar src="https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/14192720_1314769675230557_7586313640534335197_n.jpg?oh=2306105934dec1996b39254c5d46045f&oe=5A556D7B" />
                  }

              >
                Ryan Apalategui
              </ListItem></MenuItem>
              <MenuItem onClick={this.handleClose}><ListItem
                  disabled={true}
                  leftAvatar={
                    <Avatar src="https://lh6.googleusercontent.com/-c1Rv1vcFVAM/AAAAAAAAAAI/AAAAAAAAF0g/AP2YtEeju5U/photo.jpg" />
                  }

              >
                Sabrina Green
              </ListItem></MenuItem>
            </List>
          </Drawer>
        </div>
    );
  }
}

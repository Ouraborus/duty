import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}

class SideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      left: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer (side, open) {
    this.setState({
      [side]: open
    })
  };

  render () {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <List>Lista 1</List>
        <Divider />
        <List>Lista 2</List>
      </div>
    )

    return (
      <div>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}
          ref={(open) => { this.toogleDrawer('left', open) }}
        >
          <div
            tabIndex={0}
            role='button'
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SideBar)

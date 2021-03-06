import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import MiniPalette from '../MiniPalette/MiniPalette';

import styles from './PaletteList.styles';

const PaletteList = ({ palettes, classes, deletePalette }) => (
  <div className={classes.root}>

    <div className={classes.container}>

      <nav className={classes.nav}>
        <h1>React Colors</h1>
        <Link to="/palette/new">Create Palette</Link>
      </nav>

      <div className={classes.palettes}>
        {
          palettes.map(palette => (
            <MiniPalette key={palette.id} palette={palette} handleDelete={deletePalette} />
          ))
        }
      </div>

    </div>

  </div>
);

export default withStyles(styles)(PaletteList);
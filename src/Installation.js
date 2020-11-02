import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

const NPM_INSTALL_SCRIPTS=`# Use npm
$ npm install @ffmpeg/ffmpeg
# Use yarn
$ yarn add @ffmpeg/ffmpeg`;

const CDN_INSTALL_SCRIPTS=`
<script src='https://unpkg.com/@ffmpeg/ffmpeg@0.8.3/dist/ffmpeg.min.js'></script>
`;

const useStyles = makeStyles({
  root: {
    margin: '48px 0px 48px 0px',
  },
  para: {
    margin: '24px 0px 24px 0px',
  },
});

function ReadOnlyEditor(props) {
  return (
    <Highlight {...defaultProps} theme={vsDark} {...props}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre style={{fontSize: 18}}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

function Installation() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="column" >
      <Typography align="center" variant="h4">
        Installation
      </Typography>
      <Typography className={classes.para} variant="h6">
        Install ffmpeg.wasm using npm:
      </Typography>
      <ReadOnlyEditor
        language="bash"
        code={NPM_INSTALL_SCRIPTS}
      />
      <Typography className={classes.para} variant="h6">
        Or use a CDN
      </Typography>
      <ReadOnlyEditor
        language="html"
        code={CDN_INSTALL_SCRIPTS}
      />
    </Grid>
  );
}

export default Installation;
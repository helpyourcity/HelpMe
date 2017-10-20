const MARKER_SIZE = 20;

const markerStyle = {
  // !important!
  position: 'absolute',
  width: MARKER_SIZE,
  height: MARKER_SIZE,
  left: -MARKER_SIZE / 2,
  right: -MARKER_SIZE / 2,

  border: '4px solid white',
  borderRadius: MARKER_SIZE,
  backgroundColor: 'green',
  cursor: 'pointer'
};

const markerStyleHover = {
  ...markerStyle,
  backgroundColor: 'red'
};

export {markerStyle, markerStyleHover, MARKER_SIZE};
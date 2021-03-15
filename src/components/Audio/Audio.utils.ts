const getProgressColorHex = (progressColor, colors) => {
  if (progressColor === 'green') {
    return colors.HIGHLIGHT_GREEN;
  } else if (progressColor === 'blue') {
    return colors.HIGHLIGHT_BLUE;
  }

  return colors.HIGHLIGHT_ORANGE;
};

export { getProgressColorHex };

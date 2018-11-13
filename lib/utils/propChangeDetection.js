export const boundsChanged = (currentBounds, nextBounds) => {
  if (currentBounds !== nextBounds) return true;
  else if (typeof nextBounds === 'object' && typeof currentBounds === 'object') {
    return Object.keys(currentBounds).length !== Object.keys(nextBounds).length
    || Object.keys(nextBounds).some(k => nextBounds[k] !== currentBounds[k]);
  }
  return false;
};

export const positionChanged = (currentPosition, nextPosition) => {
  if (!currentPosition && nextPosition) return true;
  else if ((currentPosition && currentPosition.x) !== (nextPosition && nextPosition.x)) return true;
  else if ((currentPosition && currentPosition.y) !== (nextPosition && nextPosition.y)) return true;
  return false;
};
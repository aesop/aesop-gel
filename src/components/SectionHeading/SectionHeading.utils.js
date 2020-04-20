export const getHeadingLevel = (eyebrow, isPageHeading) =>
  eyebrow ? (isPageHeading ? '2' : '3') : isPageHeading ? '1' : '2';

export const getSubHeadingLevel = (eyebrow, heading, isPageHeading) => {
  if (eyebrow) {
    if (heading) {
      return isPageHeading ? '3' : '4';
    }

    return isPageHeading ? '2' : '3';
  }

  if (heading) {
    return isPageHeading ? '2' : '3';
  }

  return isPageHeading ? '1' : '2';
};

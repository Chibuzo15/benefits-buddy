/**
 * add up html element classes
 */

export const addClassNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

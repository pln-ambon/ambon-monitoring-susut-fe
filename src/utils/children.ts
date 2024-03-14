import React from "react";
import { Children, isValidElement } from "react";

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 * @link https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/children.ts#L9
 */
export function getValidChildren(children: React.ReactNode) {
  return Children.toArray(children).filter((child) =>
    isValidElement(child),
  ) as React.ReactElement[];
}

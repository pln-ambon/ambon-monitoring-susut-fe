"use client";
import * as React from "react";
import { cn } from "@/utils/classnames-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { getValidChildren } from "@/utils/children";

const inputGroupVariant = cva(
  "flex item-center justify-left relative isolate",
  {
    variants: {
      size: { sm: "", md: "", lg: "" },
    },
  },
);

const inputElementVariant = cva(
  "flex items-center justify-center absolute text-muted-foreground",
  {
    variants: {
      position: {
        left: "top-0 left-0 ml-2 pointer-events-none",
        right: "top-0 right-0 mr-2",
      },
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-14 w-14",
      },
    },
    compoundVariants: [
      {
        position: "left",
        size: "sm",
        className: "ml-1",
      },
      {
        position: "right",
        size: "sm",
        className: "mr-1",
      },
    ],
  },
);

const inputVariants = cva(
  "w-full border bg-white appearance-none outline-none border text-base ring-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-input focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "ps-4 pe-4",
        leftElement: "ps-12 pe-3",
        rightElement: "ps-3 pe-12",
        leftRightElement: "ps-12 pe-12",
      },
      dimension: {
        sm: "h-8 rounded-sm text-sm",
        md: "h-10 rounded-md text-base",
        lg: "h-14 rounded-lg text-lg",
      },
    },
    compoundVariants: [
      {
        variant: "leftElement",
        dimension: "sm",
        className: "ps-8",
      },
      {
        variant: "leftRightElement",
        dimension: "sm",
        className: "ps-8 pe-8",
      },
    ],
    defaultVariants: {
      variant: "default",
      dimension: "md",
    },
  },
);

type InputGroupStyleContextProps = VariantProps<typeof inputGroupVariant> & {
  isLeftSide?: boolean;
  isRightSide?: boolean;
};
const InputGroupStyleContext = React.createContext<InputGroupStyleContextProps>(
  {
    size: "md",
    isLeftSide: false,
    isRightSide: false,
  },
);

export interface InputGroupProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariant> {
  width?: string;
  height?: string;
}
const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, children, size, width, height, ...props }, ref) => {
    const inputGroupRef = React.useRef<InputGroupStyleContextProps>({
      size: size ?? "md",
      isLeftSide: false,
      isRightSide: false,
    });
    const validChildren = getValidChildren(children);

    validChildren.forEach((child) => {
      if (
        (child.props as VariantProps<typeof inputElementVariant>).position ===
        "left"
      )
        inputGroupRef.current.isLeftSide = true;

      if (
        (child.props as VariantProps<typeof inputElementVariant>).position ===
        "right"
      )
        inputGroupRef.current.isRightSide = true;
    });

    return (
      <div
        ref={ref}
        className={cn(
          height ? `h-[${height}]` : ``,
          width ? `w-[${width}]` : `w-full`,
          inputGroupVariant({ size, className }),
        )}
        {...props}
      >
        <InputGroupStyleContext.Provider value={{ ...inputGroupRef.current }}>
          {children}
        </InputGroupStyleContext.Provider>
      </div>
    );
  },
);
InputGroup.displayName = "InputGroup";

export interface InputElementProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputElementVariant> {}

const InputElement = React.forwardRef<HTMLDivElement, InputElementProps>(
  ({ className, children, position, size, ...props }, ref) => {
    const context = React.useContext(InputGroupStyleContext);
    const currSize = context.size ? context.size : size;
    return (
      <div
        ref={ref}
        className={cn(
          inputElementVariant({ position, size: currSize, className }),
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
InputElement.displayName = "InputElement";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, dimension, ...props }, ref) => {
    const context = React.useContext(InputGroupStyleContext);
    const currVariant =
      context.isLeftSide && context.isRightSide
        ? "leftRightElement"
        : context.isLeftSide
          ? "leftElement"
          : context.isRightSide
            ? "rightElement"
            : "default";
    const currSize = context.size ? context.size : dimension;

    return (
      <input
        type={type}
        className={cn(
          inputVariants({
            variant: currVariant,
            dimension: currSize,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { InputGroup, InputElement, Input };

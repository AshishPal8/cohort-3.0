interface ButtonProps {
  varient: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick: () => void;
}

const VariantStyles = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-blue-200 text-blue-600",
};

const sizeVariant = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

const defaultVariant = "rounded-md px-5 py-2 flex gap-2";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${VariantStyles[props.varient]} ${
        sizeVariant[props.size]
      } ${defaultVariant}`}
    >
      {props.startIcon ? props.startIcon : null}
      {props.text}
    </button>
  );
};

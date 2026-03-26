// Reusable Button component.
// Renders as a <Link> when `href` is provided, otherwise as a <button>.
// Variants: gold (amber CTA), glass (liquid-glass-strong), outline (subtle glass), ghost (text only).

import Link from "next/link";

type ButtonVariant = "gold" | "glass" | "outline" | "outline-white" | "ghost" | "primary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  // Deep blue fill — main CTA
  gold:           "bg-brand-deep text-white hover:bg-brand-blue",
  // Liquid-glass strong — secondary CTA on light glass sections
  glass:          "liquid-glass-strong text-brand-deep hover:bg-brand-mist/30",
  // Subtle glass — tertiary / outline style
  outline:        "liquid-glass text-brand-deep hover:bg-brand-mist/30",
  // Alias of outline for backward-compat
  "outline-white":"liquid-glass text-brand-deep hover:bg-brand-mist/30",
  // Solid deep-blue (no glass)
  primary:        "bg-brand-deep text-white hover:bg-brand-blue",
  // Ghost — text only
  ghost:          "bg-transparent text-brand-slate hover:text-brand-deep",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "glass",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-body font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue`;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

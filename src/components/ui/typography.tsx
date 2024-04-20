import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import React from 'react';

const textVariants = cva('font-sans antialiased tracking-normal', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    variant: {
      normal: 'text-slate-500 dark:text-slate-400',
      muted: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    size: 'sm',
    variant: 'normal',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}
const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';
    return (
      <Comp
        className={cn(textVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text };

import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

import { Spinner } from '../Spinner';

const buttonVariants = cva(
	'flex items-center text-foreground gap-2 justify-center w-fit rounded-md px-3 py-1.5 text-sm font-semibold leading-6 disabled:opacity-50 disabled:cursor-not-allowed transition-all',
	{
		variants: {
			variant: {
				default:
					'bg-indigo-900 text-primary-foreground hover:bg-indigo-900/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all ease-in-out duration-300',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				outline:
					'border border-indigo-900 bg-transparent text-white shadow-sm hover:bg-indigo-900/50 ',
				ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground',
				nav: 'bg-nav text-nav-foreground hover:opacity-50 ring-1 ring-nav-foreground',
				// outline: "ring-1 ring-border hover:bg-accent text-foreground"
			},
			size: {
				sm: '!h-8 !text-xs ',
				default: 'h-9',
				iconSm: 'h-8 w-8',
				icon: '!h-9 !w-9 !p-0',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

type ButtonProps = VariantProps<typeof buttonVariants> &
	ComponentProps<'button'> & {
		isLoading?: boolean;
	};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, isLoading, disabled, size, children, variant, ...props },
		ref
	) => {
		return (
			<button
				type='button'
				{...props}
				ref={ref}
				disabled={disabled ?? isLoading}
				className={buttonVariants({
					variant,
					size,
					className,
				})}
			>
				{isLoading && <Spinner className='h-6 w-6 fill-muted' />}
				{!isLoading && children}
			</button>
		);
	}
);

Button.displayName = 'Button';

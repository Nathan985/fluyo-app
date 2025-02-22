import { ComponentProps, ComponentType, forwardRef } from 'react';

import { Input as InputComp } from '../@composition/Input';
import { cn } from 'src/@shared/utils';

type InputProps = ComponentProps<'input'> & {
	label?: string;
	icon?: ComponentType;
	iconClassName?: string;
	error?: string;
	containerClassName?: string;
	helper?: string;
	allowFloat?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			error,
			containerClassName,
			icon,
			iconClassName,
			allowFloat = false,
			step = 0.01,
			helper,
			...props
		},
		ref
	) => {
		return (
			<>
				<InputComp.Root className={containerClassName}>
					{label && (
						<InputComp.Label htmlFor={props.id ?? props.name}>
							{label}
						</InputComp.Label>
					)}
					<InputComp.Group>
						{icon !== undefined && (
							<InputComp.AddOn
								iconClassName={iconClassName}
								Icon={icon as any}
							/>
						)}
						<InputComp.Field
							{...props}
							id={props.id ?? props.name}
							className={cn(
								props.readOnly &&
									'pointer-events-none cursor-not-allowed opacity-50 outline-none'
							)}
							step={props.type === 'number' && !allowFloat ? 1 : step}
							ref={ref}
						/>
					</InputComp.Group>
					<InputComp.Error show={error !== undefined}>{error}</InputComp.Error>
					{helper && <InputComp.Helper>{helper}</InputComp.Helper>}
				</InputComp.Root>
			</>
		);
	}
);

Input.displayName = 'Input';

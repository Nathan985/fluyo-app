import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import React, {
	ComponentProps,
	ComponentType,
	HTMLAttributes,
	LabelHTMLAttributes,
	ReactNode,
	useContext,
	useEffect,
} from 'react';
import InputMask, { Props, ReactInputMask } from 'react-input-mask';

import { InputContext, InputProvider } from './context/InputContext';
import { useInput } from './useInput';
import { cn } from 'src/@shared/utils';

export type ChildrenProps = {
	children: ReactNode;
};

type RootProps = HTMLAttributes<HTMLDivElement> & ChildrenProps;

const Root: React.FC<RootProps> = ({ children, className, ...props }) => {
	return (
		<InputProvider>
			<div
				className={cn(
					'relative flex h-fit w-full flex-col items-start gap-1',
					className
				)}
				{...props}
			>
				{children}
			</div>
		</InputProvider>
	);
};

type LabelProps = ChildrenProps & LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<LabelProps> = ({ children, className, ...props }) => {
	return (
		<label
			className={cn('text-sm font-medium text-gray-300', className)}
			{...props}
		>
			{children}
		</label>
	);
};

type GroupProps = HTMLAttributes<HTMLDivElement> & ChildrenProps;

const Group: React.FC<GroupProps> = ({ children, className }) => {
	const { classNameSetter } = useContext(InputContext);
	const { groupClass } = useInput();
	return (
		<div className={cn(groupClass({ side: classNameSetter }), className)}>
			{children}
		</div>
	);
};

type FieldMaskProps = Props;

const FieldMask = React.forwardRef<ReactInputMask, FieldMaskProps>(
	({ className, ...props }, ref) => {
		const { classNameSetter } = useContext(InputContext);
		const { visibleError, inputError, inputClass, errorIcon } = useInput();

		return (
			<>
				<InputMask
					className={cn(
						inputClass({ side: classNameSetter }),
						inputError,
						className
					)}
					{...props}
					ref={ref}
				/>
				<div className={cn(errorIcon({ side: classNameSetter }), visibleError)}>
					<ExclamationCircleIcon
						className='h-5 w-5 text-destructive'
						aria-hidden='true'
					/>
				</div>
			</>
		);
	}
);

const Field = React.forwardRef<HTMLInputElement, ComponentProps<'input'>>(
	({ className, ...props }, ref) => {
		const { classNameSetter } = useContext(InputContext);
		const { visibleError, inputError, inputClass, errorIcon } = useInput();
		return (
			<>
				<input
					ref={ref}
					className={cn(
						inputClass({ side: classNameSetter }),
						inputError,
						className
					)}
					{...props}
				/>
				<div className={cn(errorIcon({ side: classNameSetter }), visibleError)}>
					<ExclamationCircleIcon
						className='h-5 w-5 text-destructive'
						aria-hidden='true'
					/>
				</div>
			</>
		);
	}
);

type AddOnProps = React.HTMLAttributes<HTMLDivElement> & {
	Icon?: ComponentType<any>;
	side?: 'left' | 'right';
	children?: ReactNode;
	className?: string;
	iconClassName?: string;
};
const AddOn = ({
	Icon,
	side = 'left',
	children,
	className,
	iconClassName,
	...props
}: AddOnProps) => {
	const { setPositionIcon, setAddOnIsIcon, classNameSetter, setUseAddIcon } =
		useContext(InputContext);
	const { iconClass, defaultAddOn } = useInput();

	useEffect(() => {
		setUseAddIcon(Icon === undefined);
		return () => {
			setUseAddIcon(false);
		};
	}, [Icon]);

	useEffect(() => {
		setPositionIcon(side);
		return () => {
			setPositionIcon('left');
		};
	}, [side]);

	useEffect(() => {
		setAddOnIsIcon(Icon !== undefined);
		return () => {
			setAddOnIsIcon(false);
		};
	}, [Icon]);

	if (children) {
		return (
			<div
				className={cn(defaultAddOn({ side: classNameSetter }), className)}
				{...props}
			>
				{children}
			</div>
		);
	}

	return (
		<div
			className={cn(iconClass({ side: classNameSetter }), className)}
			{...props}
		>
			{Icon && (
				<Icon className={cn('h-5 w-5 fill-muted-foreground', iconClassName)} />
			)}
		</div>
	);
};

const Helper: React.FC<ChildrenProps> = ({ children }) => {
	const { showError } = useContext(InputContext);

	return (
		<div
			className={cn(
				'bottom-[-1.1rem] text-xs font-normal text-muted-foreground',
				showError ? 'hidden' : 'absolute'
			)}
		>
			{children}
		</div>
	);
};

type ErrorProps = ChildrenProps & {
	show?: boolean;
};

const Error = ({ children, show = false }: ErrorProps) => {
	const { setShowError } = useContext(InputContext);
	const { visibleError } = useInput();

	useEffect(() => {
		setShowError(show);
	}, [show]);

	return (
		<span
			className={cn(
				'absolute bottom-[-1.3rem] h-5 text-xs text-destructive',
				visibleError
			)}
		>
			{children}
		</span>
	);
};

export const Input = {
	Root,
	Label,
	Group,
	Field,
	Helper,
	AddOn,
	Error,
	FieldMask,
};

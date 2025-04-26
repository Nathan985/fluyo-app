import * as Primitive from "@radix-ui/react-collapsible"
import { cn } from "src/@shared/utils" 
import React from "react"

const Disclosure = Primitive.Root

const DisclosureTrigger = React.forwardRef<
	React.ElementRef<typeof Primitive.CollapsibleTrigger>,
	React.ComponentPropsWithoutRef<typeof Primitive.CollapsibleTrigger>
>(({ className, children, ...rest }, ref) => (
	<Primitive.CollapsibleTrigger
		ref={ref}
		className={cn(
			"inline-flex w-full group items-center justify-center gap-2 rounded-md border border-border bg-accent p-2 text-sm text-accent-foreground shadow-sm transition-all hover:opacity-80 [&[data-state=open]>svg]:rotate-180",
			className
		)}
		{...rest}
	>
		{children}
	</Primitive.CollapsibleTrigger>
))

DisclosureTrigger.displayName = "DisclosureTrigger"

const DisclosureContent = React.forwardRef<
	React.ElementRef<typeof Primitive.CollapsibleContent>,
	React.ComponentPropsWithoutRef<typeof Primitive.CollapsibleContent>
>(({ className, ...rest }, ref) => (
	<Primitive.CollapsibleContent
		ref={ref}
		className={cn(
			" py-2 pb-4 text-foreground",
			className
		)}
		{...rest}
	/>
))

DisclosureContent.displayName = "DisclosureContent"

export { Disclosure, DisclosureTrigger, DisclosureContent }

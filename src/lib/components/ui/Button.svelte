<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
	type ButtonSize = 'sm' | 'md' | 'lg';

	interface Props extends HTMLButtonAttributes {
		variant?: ButtonVariant;
		size?: ButtonSize;
		children: Snippet;
		class?: string;
	}

	let {
		variant = 'primary',
		size = 'md',
		children,
		class: className = '',
		...restProps
	}: Props = $props();

	const baseClasses =
		'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-budo-red focus:ring-offset-2';

	const variantClasses: Record<ButtonVariant, string> = {
		primary: 'bg-budo-red text-white hover:bg-red-700',
		secondary: 'bg-midnight text-white hover:bg-gray-800',
		outline:
			'bg-transparent border-2 border-budo-red text-budo-red hover:bg-budo-red hover:text-white',
		ghost: 'bg-transparent text-midnight hover:bg-slate-light'
	};

	const sizeClasses: Record<ButtonSize, string> = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-sm',
		lg: 'px-6 py-3 text-base'
	};

	const classes = $derived(
		`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()
	);
</script>

<button class={classes} {...restProps}>
	{@render children()}
</button>

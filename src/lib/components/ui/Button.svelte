<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
	type ButtonSize = 'sm' | 'md' | 'lg';

	interface Props {
		variant?: ButtonVariant;
		size?: ButtonSize;
		children: Snippet;
		class?: string;
		href?: string;
	}

	let {
		variant = 'primary',
		size = 'md',
		children,
		class: className = '',
		href,
		...restProps
	}: Props = $props();

	const baseClasses =
		'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

	const variantClasses: Record<ButtonVariant, string> = {
		primary:
			'bg-budo-red-600 text-white hover:bg-budo-red-400 hover:text-dogi-100 focus:ring-budo-red-500 active:bg-budo-red-700',
		secondary:
			'bg-midnight-300 text-white hover:bg-midnight-700 focus:ring-midnight-800 active:bg-midnight-900',
		outline:
			'bg-transparent border-2 border-budo-red-500 text-budo-red-500 hover:bg-budo-red-500 hover:text-white focus:ring-budo-red-500 active:bg-budo-red-600',
		ghost:
			'bg-transparent text-midnight-800 hover:bg-slate-100 focus:ring-slate-400 active:bg-slate-200',
		gold: 'bg-gold-500 text-midnight-900 hover:bg-gold-300 focus:ring-gold-300 active:bg-gold-400'
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

{#if href}
	<a class={classes} {href} {...restProps}>
		{@render children()}
	</a>
{:else}
	<button class={classes} {...restProps as HTMLButtonAttributes}>
		{@render children()}
	</button>
{/if}

<script lang="ts">
	import type { Snippet } from 'svelte';

	type BadgeVariant = 'default' | 'secondary' | 'outline';

	interface Props {
		variant?: BadgeVariant;
		children: Snippet;
		class?: string;
	}

	let { variant = 'default', children, class: className = '' }: Props = $props();

	const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

	const variantClasses: Record<BadgeVariant, string> = {
		default: 'bg-budo-red-500 text-white',
		secondary: 'bg-slate-200 text-midnight-800',
		outline: 'bg-transparent border border-budo-red-500 text-budo-red-500'
	};

	const classes = $derived(`${baseClasses} ${variantClasses[variant]} ${className}`.trim());
</script>

<span class={classes}>
	{@render children()}
</span>

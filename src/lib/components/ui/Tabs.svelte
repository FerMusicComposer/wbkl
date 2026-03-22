<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Tab {
		id: string;
		label: string;
	}

	interface Props {
		tabs: Tab[];
		activeTab: string;
		onTabChange: (tabId: string) => void;
		children: Snippet<[string]>;
	}

	let { tabs, activeTab, onTabChange, children }: Props = $props();
</script>

<div>
	<!-- Tab List -->
	<div class="mb-6 border-b border-slate-200">
		<div class="flex gap-6">
			{#each tabs as tab (tab.id)}
				<button
					onclick={() => onTabChange(tab.id)}
					class="px-1 pb-3 text-sm font-medium transition-colors duration-200 {activeTab === tab.id
						? 'border-budo-red-500 text-budo-red-500 border-b-2'
						: 'text-slate-500 hover:text-slate-700'}"
				>
					{tab.label}
				</button>
			{/each}
		</div>
	</div>

	<!-- Tab Content -->
	<div>
		{@render children(activeTab)}
	</div>
</div>

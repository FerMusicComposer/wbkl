<script lang="ts">
	import { documents } from '$lib/data/content';
	import { FileText, Download } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const rulesDocs = documents.filter((d) => d.category === 'rules');
	const techniquesDocs = documents.filter((d) => d.category === 'techniques');
	const certificationsDocs = documents.filter((d) => d.category === 'certifications');
	const administrativeDocs = documents.filter((d) => d.category === 'administrative');

	function getCategoryColor(category: string): string {
		switch (category) {
			case 'rules':
				return 'bg-budo-red-500 text-white';
			case 'techniques':
				return 'bg-gold-500 text-midnight-900';
			case 'certifications':
				return 'bg-midnight-800 text-white';
			case 'administrative':
				return 'bg-slate-600 text-white';
			default:
				return 'bg-slate-500 text-white';
		}
	}
</script>

<svelte:head>
	<title>Documentos - World Budo Karate League</title>
	<meta
		name="description"
		content="Descarga documentos oficiales de la WBKL: reglamentos, guías técnicas, formularios y certificaciones."
	/>
</svelte:head>

<!-- Page Header -->
<section
	class="from-midnight-900 via-midnight-800 to-midnight-900 relative flex min-h-150 items-center overflow-hidden bg-linear-to-br py-20 sm:py-28"
>
	<div class="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
		<img
			src="/images/kanji.svg"
			alt=""
			class="h-full w-full max-w-4xl object-contain opacity-5 invert"
		/>
	</div>
	<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-2xl">
			<h1 class="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
				Documentos <span class="text-gold-500">Oficiales</span>
			</h1>
			<p class="text-xl text-slate-300">
				Accede a reglamentos, guías técnicas, formularios y documentos de certificación de la WBKL.
			</p>
		</div>
	</div>
</section>

<!-- Rules Section -->
<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8">
			<h2 class="text-midnight-900 mb-2 text-2xl font-bold">Reglamentos</h2>
			<p class="text-slate-600">Documentos oficiales de regulación y normas de la organización.</p>
		</div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each rulesDocs as doc (doc.id)}
				<article
					class="hover:border-budo-red-200 flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:shadow-lg"
				>
					<div
						class="bg-budo-red-50 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
					>
						<FileText class="text-budo-red-500 h-6 w-6" />
					</div>
					<div class="min-w-0 flex-1">
						<div class="mb-1 flex items-center gap-2">
							<h3 class="text-midnight-900 font-semibold">{doc.title}</h3>
							<span
								class="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium {getCategoryColor(
									doc.category
								)}"
							>
								{doc.fileType}
							</span>
						</div>
						<p class="mb-3 line-clamp-2 text-sm text-slate-600">{doc.description}</p>
						<div class="flex items-center gap-4">
							{#if doc.fileSize}
								<span class="text-xs text-slate-500">{doc.fileSize}</span>
							{/if}
							<Button variant="outline" size="sm">
								<Download class="mr-1.5 h-4 w-4" />
								Descargar
							</Button>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Techniques Section -->
<section class="bg-dogi py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8">
			<h2 class="text-midnight-900 mb-2 text-2xl font-bold">Técnicas</h2>
			<p class="text-slate-600">Guías y programas técnicos para el entrenamiento de Kyokushin.</p>
		</div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each techniquesDocs as doc (doc.id)}
				<article
					class="hover:border-gold-200 flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:shadow-lg"
				>
					<div class="bg-gold-100 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
						<FileText class="text-gold-600 h-6 w-6" />
					</div>
					<div class="min-w-0 flex-1">
						<div class="mb-1 flex items-center gap-2">
							<h3 class="text-midnight-900 font-semibold">{doc.title}</h3>
							<span
								class="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium {getCategoryColor(
									doc.category
								)}"
							>
								{doc.fileType}
							</span>
						</div>
						<p class="mb-3 line-clamp-2 text-sm text-slate-600">{doc.description}</p>
						<div class="flex items-center gap-4">
							{#if doc.fileSize}
								<span class="text-xs text-slate-500">{doc.fileSize}</span>
							{/if}
							<Button variant="outline" size="sm">
								<Download class="mr-1.5 h-4 w-4" />
								Descargar
							</Button>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Certifications Section -->
<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8">
			<h2 class="text-midnight-900 mb-2 text-2xl font-bold">Certificaciones</h2>
			<p class="text-slate-600">Manuales y requisitos para certificaciones oficiales de la WBKL.</p>
		</div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each certificationsDocs as doc (doc.id)}
				<article
					class="hover:border-midnight-300 flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:shadow-lg"
				>
					<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100">
						<FileText class="text-midnight-600 h-6 w-6" />
					</div>
					<div class="min-w-0 flex-1">
						<div class="mb-1 flex items-center gap-2">
							<h3 class="text-midnight-900 font-semibold">{doc.title}</h3>
							<span
								class="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium {getCategoryColor(
									doc.category
								)}"
							>
								{doc.fileType}
							</span>
						</div>
						<p class="mb-3 line-clamp-2 text-sm text-slate-600">{doc.description}</p>
						<div class="flex items-center gap-4">
							{#if doc.fileSize}
								<span class="text-xs text-slate-500">{doc.fileSize}</span>
							{/if}
							<Button variant="outline" size="sm">
								<Download class="mr-1.5 h-4 w-4" />
								Descargar
							</Button>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Administrative Section -->
<section class="bg-dogi py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8">
			<h2 class="text-midnight-900 mb-2 text-2xl font-bold">Administrativos</h2>
			<p class="text-slate-600">
				Formularios y documentos administrativos para afiliaciones y trámites.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each administrativeDocs as doc (doc.id)}
				<article
					class="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-slate-300 hover:shadow-lg"
				>
					<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100">
						<FileText class="h-6 w-6 text-slate-600" />
					</div>
					<div class="min-w-0 flex-1">
						<div class="mb-1 flex items-center gap-2">
							<h3 class="text-midnight-900 font-semibold">{doc.title}</h3>
							<span
								class="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium {getCategoryColor(
									doc.category
								)}"
							>
								{doc.fileType}
							</span>
						</div>
						<p class="mb-3 line-clamp-2 text-sm text-slate-600">{doc.description}</p>
						<div class="flex items-center gap-4">
							{#if doc.fileSize}
								<span class="text-xs text-slate-500">{doc.fileSize}</span>
							{/if}
							<Button variant="outline" size="sm">
								<Download class="mr-1.5 h-4 w-4" />
								Descargar
							</Button>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

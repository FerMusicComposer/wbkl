<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { Calendar, MapPin, ChevronLeft, ChevronRight, Newspaper } from 'lucide-svelte';

	interface Slide {
		id: string;
		type: 'event' | 'news';
		badge?: string;
		title: string;
		subtitle?: string;
		description: string;
		date?: string;
		location?: string;
		image?: string;
		primaryAction?: { label: string; href: string };
		secondaryAction?: { label: string; href: string };
	}

	const slides: Slide[] = [
		{
			id: 'world-championship-2025',
			type: 'event',
			badge: 'Próximo Evento',
			title: 'Campeonato Mundial de Kyokushin',
			subtitle: 'WBKL 2025',
			description:
				'La máxima competición de Karate Kyokushin a nivel mundial. Atletas de más de 80 países se reunirán para demostrar su espíritu, técnica y determinación.',
			date: '15 - 20 Julio, 2025',
			location: 'Tokyo, Japón',
			image: '/images/tournament1.jpg',
			primaryAction: { label: 'Registrarse Ahora', href: '/events/world-championship-2025' },
			secondaryAction: { label: 'Ver Detalles', href: '/events/world-championship-2025' }
		},
		{
			id: 'european-cup-2025',
			type: 'event',
			badge: 'Próximo Evento',
			title: 'Copa Europea WBKL',
			subtitle: 'Madrid 2025',
			description:
				'El campeonato europeo más importante del año. Participa o asiste a este evento que reúne a los mejores atletas del continente.',
			date: '8 - 10 Marzo, 2025',
			location: 'Madrid, España',
			image: '/images/tournament2.jpg',
			primaryAction: { label: 'Inscripciones Abiertas', href: '/events/european-cup-2025' },
			secondaryAction: { label: 'Más Información', href: '/events/european-cup-2025' }
		},
		{
			id: 'news-instructor-certification',
			type: 'news',
			badge: 'Noticia',
			title: 'Nuevo Programa de Certificación',
			subtitle: 'Para Instructores',
			description:
				'La WBKL lanza su nuevo programa de certificación internacional para instructores. Obtén reconocimiento oficial y mejora tus credenciales profesionales.',
			primaryAction: { label: 'Conocer Programa', href: '/programs/instructor-certification' },
			secondaryAction: { label: 'Ver Noticias', href: '/news' }
		},
		{
			id: 'seminar-osaka',
			type: 'event',
			badge: 'Clínica',
			title: 'Seminario con Kancho',
			subtitle: 'Osaka, Japón',
			description:
				'Aprende directamente del Kancho en este seminario exclusivo. Técnicas avanzadas, filosofía budo y entrenamiento intensivo.',
			date: '5 - 7 Abril, 2025',
			location: 'Osaka, Japón',
			primaryAction: { label: 'Reservar Lugar', href: '/events/seminar-osaka' },
			secondaryAction: { label: 'Ver Clínicas', href: '/events?type=clinic' }
		}
	];

	let currentSlide = $state(0);
	let autoplayInterval: ReturnType<typeof setInterval>;

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}

	function goToSlide(index: number) {
		currentSlide = index;
		resetAutoplay();
	}

	function resetAutoplay() {
		clearInterval(autoplayInterval);
		autoplayInterval = setInterval(nextSlide, 4000);
	}

	$effect(() => {
		autoplayInterval = setInterval(nextSlide, 4000);
		return () => clearInterval(autoplayInterval);
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<section
	class="relative flex min-h-150 items-center overflow-hidden"
	onmouseenter={() => clearInterval(autoplayInterval)}
	onmouseleave={() => resetAutoplay()}
>
	<!-- Background Layer -->
	<div class="absolute inset-0">
		{#each slides as slide, index (slide.id)}
			<div
				class="absolute inset-0 transition-opacity duration-700 {index === currentSlide
					? 'z-10 opacity-100'
					: 'z-0 opacity-0'}"
			>
				{#if slide.image}
					<img src={slide.image} alt="" class="h-full w-full object-cover" />
					<div
						class="from-midnight-900/95 via-midnight-900/80 to-midnight-900/60 absolute inset-0 bg-linear-to-r"
					></div>
				{:else}
					<!-- Default Kanji Background -->
					<div
						class="from-midnight-900 via-midnight-800 to-midnight-900 absolute inset-0 bg-linear-to-br"
					></div>
					<div class="absolute inset-0 flex items-center justify-center">
						<img
							src="/images/kanji.svg"
							alt=""
							class="h-full w-full max-w-4xl object-contain opacity-5 invert"
						/>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<!-- Slides Container -->
	<div class="relative z-20 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
		{#each slides as slide, index (slide.id)}
			<div
				class="{index === currentSlide
					? 'translate-x-0 opacity-100'
					: 'pointer-events-none absolute inset-0 translate-x-8 opacity-0'} transition-all duration-500"
			>
				{#if index === currentSlide}
					<div class="max-w-3xl">
						<!-- Badge -->
						<div
							class="bg-dogi-700/60 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-white"
						>
							{#if slide.type === 'event'}
								<Calendar class="h-4 w-4" />
							{:else}
								<Newspaper class="h-4 w-4" />
							{/if}
							<span class="text-sm font-medium">
								{slide.badge || (slide.type === 'event' ? 'Evento' : 'Noticia')}
							</span>
						</div>

						<!-- Main Headline -->
						<h1 class="mb-4 text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
							{slide.title}
							{#if slide.subtitle}
								<span class="text-gold-500 mt-2 block">{slide.subtitle}</span>
							{/if}
						</h1>

						<!-- Description -->
						<p class="mb-8 max-w-2xl text-lg text-gray-300">{slide.description}</p>

						<!-- Event Details -->
						{#if slide.type === 'event' && (slide.date || slide.location)}
							<div class="mb-10 flex flex-wrap gap-6 text-gray-300">
								{#if slide.date}
									<div class="flex items-center gap-2">
										<Calendar class="text-budo-red-400 h-5 w-5" />
										<span>{slide.date}</span>
									</div>
								{/if}
								{#if slide.location}
									<div class="flex items-center gap-2">
										<MapPin class="text-budo-red-400 h-5 w-5" />
										<span>{slide.location}</span>
									</div>
								{/if}
							</div>
						{/if}

						<!-- CTA Buttons -->
						<div class="flex flex-wrap gap-4">
							{#if slide.primaryAction}
								<Button variant="primary" size="lg">
									{slide.primaryAction.label}
								</Button>
							{/if}
							{#if slide.secondaryAction}
								<Button
									variant="secondary"
									size="lg"
									class="hover:border-gold-300! hover:bg-gold-300! hover:text-midnight-700! text-white"
								>
									{slide.secondaryAction.label}
								</Button>
							{/if}
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<!-- Navigation Arrows -->
	<button
		onclick={() => {
			prevSlide();
			resetAutoplay();
		}}
		class="absolute top-1/2 left-4 z-30 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
		aria-label="Slide anterior"
	>
		<ChevronLeft class="h-6 w-6" />
	</button>
	<button
		onclick={() => {
			nextSlide();
			resetAutoplay();
		}}
		class="absolute top-1/2 right-4 z-30 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
		aria-label="Siguiente slide"
	>
		<ChevronRight class="h-6 w-6" />
	</button>

	<!-- Slide Indicators -->
	<div class="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
		{#each slides as slide, index (slide.id)}
			<button
				onclick={() => goToSlide(index)}
				class="{index === currentSlide
					? 'bg-budo-red-400 w-6'
					: 'bg-white/50 hover:bg-white/75'} h-2 w-2 rounded-full transition-all duration-200"
				aria-label="Ir al slide {index + 1}"
			></button>
		{/each}
	</div>

	<!-- Bottom Gradient Fade -->
	<div class="from-dogi absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t to-transparent"></div>
</section>

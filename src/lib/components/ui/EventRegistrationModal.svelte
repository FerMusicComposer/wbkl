<script lang="ts">
	import Modal from './Modal.svelte';
	import Button from './Button.svelte';
	import { Calendar, MapPin, User, Mail, Phone, Building, Hash } from 'lucide-svelte';
	import type { Event } from '$lib/api/types';

	interface Props {
		open: boolean;
		onClose: () => void;
		event: Event | undefined;
		lang?: string;
	}

	let { open, onClose, event, lang = 'es' }: Props = $props();

	let formData = $state({
		fullName: '',
		email: '',
		phone: '',
		dojo: '',
		belt: '',
		category: ''
	});

	let isSubmitting = $state(false);
	let submitted = $state(false);

	function getTypeLabel(type: string): string {
		if (lang === 'en') {
			switch (type) {
				case 'championship':
					return 'Championship';
				case 'clinic':
					return 'Clinic';
				case 'seminar':
					return 'Seminar';
				default:
					return 'Event';
			}
		}
		switch (type) {
			case 'championship':
				return 'Campeonato';
			case 'clinic':
				return 'Clínica';
			case 'seminar':
				return 'Seminario';
			default:
				return 'Evento';
		}
	}

	function getTypeColor(type: string): string {
		switch (type) {
			case 'championship':
				return 'bg-budo-red-500 text-white';
			case 'clinic':
				return 'bg-gold-500 text-midnight-900';
			case 'seminar':
				return 'bg-midnight-800 text-white';
			default:
				return 'bg-budo-red-500 text-white';
		}
	}

	function formatDate(dateStr: string): string {
		try {
			const date = new Date(dateStr);
			return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			});
		} catch {
			return dateStr;
		}
	}

	function getCategories(event: Event): string[] {
		if (event.categories && Array.isArray(event.categories)) {
			return event.categories as string[];
		}
		return [];
	}

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		isSubmitting = true;
		await new Promise((resolve) => setTimeout(resolve, 1000));
		isSubmitting = false;
		submitted = true;
	}

	function handleClose() {
		submitted = false;
		formData = {
			fullName: '',
			email: '',
			phone: '',
			dojo: '',
			belt: '',
			category: ''
		};
		onClose();
	}
</script>

<Modal {open} onClose={handleClose} size="lg">
	{#if event}
		{#if submitted}
			<div class="py-8 text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
				>
					<svg
						class="h-8 w-8 text-green-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
				<h3 class="text-midnight-900 mb-2 text-xl font-semibold">
					{lang === 'en' ? 'Registration Received!' : '¡Inscripción Recibida!'}
				</h3>
				<p class="mb-6 text-slate-600">
					{lang === 'en'
						? `We have received your registration for ${event.name}. We will contact you soon with more details.`
						: `Hemos recibido tu solicitud de inscripción para ${event.name}. Te contactaremos pronto con más detalles.`}
				</p>
				<Button variant="primary" onclick={handleClose}>
					{lang === 'en' ? 'Close' : 'Cerrar'}
				</Button>
			</div>
		{:else}
			<!-- Event Info Header -->
			<div class="mb-6 border-b border-slate-200 pb-6">
				<span
					class="mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium {getTypeColor(
						event.eventType
					)}"
				>
					{getTypeLabel(event.eventType)}
				</span>
				<h2 class="text-midnight-900 mb-2 text-xl font-semibold">{event.name}</h2>
				<div class="flex flex-wrap gap-4 text-sm text-slate-600">
					<div class="flex items-center gap-1.5">
						<Calendar class="text-budo-red-500 h-4 w-4" />
						<span>{formatDate(event.startDate)}</span>
					</div>
					{#if event.location}
						<div class="flex items-center gap-1.5">
							<MapPin class="text-budo-red-500 h-4 w-4" />
							<span>{event.location}</span>
						</div>
					{/if}
				</div>
			</div>

			<!-- Registration Form -->
			<form onsubmit={handleSubmit}>
				<h3 class="text-midnight-900 mb-4 font-semibold">
					{lang === 'en' ? 'Participant Information' : 'Datos del Participante'}
				</h3>

				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div>
						<label for="fullName" class="mb-1.5 block text-sm font-medium text-slate-700">
							{lang === 'en' ? 'Full Name' : 'Nombre Completo'} *
						</label>
						<div class="relative">
							<User class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
							<input
								type="text"
								id="fullName"
								bind:value={formData.fullName}
								required
								class="focus:border-budo-red-500 focus:ring-budo-red-500 w-full rounded-lg border border-slate-300 py-2.5 pr-3 pl-10 text-sm focus:ring-1 focus:outline-none"
								placeholder={lang === 'en' ? 'Your full name' : 'Tu nombre completo'}
							/>
						</div>
					</div>

					<div>
						<label for="email" class="mb-1.5 block text-sm font-medium text-slate-700">
							{lang === 'en' ? 'Email' : 'Correo Electrónico'} *
						</label>
						<div class="relative">
							<Mail class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								class="focus:border-budo-red-500 focus:ring-budo-red-500 w-full rounded-lg border border-slate-300 py-2.5 pr-3 pl-10 text-sm focus:ring-1 focus:outline-none"
								placeholder="tu@email.com"
							/>
						</div>
					</div>

					<div>
						<label for="phone" class="mb-1.5 block text-sm font-medium text-slate-700">
							{lang === 'en' ? 'Phone' : 'Teléfono'} *
						</label>
						<div class="relative">
							<Phone class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
							<input
								type="tel"
								id="phone"
								bind:value={formData.phone}
								required
								class="focus:border-budo-red-500 focus:ring-budo-red-500 w-full rounded-lg border border-slate-300 py-2.5 pr-3 pl-10 text-sm focus:ring-1 focus:outline-none"
								placeholder="+52 123 456 7890"
							/>
						</div>
					</div>

					<div>
						<label for="dojo" class="mb-1.5 block text-sm font-medium text-slate-700">
							{lang === 'en' ? 'Dojo / Organization' : 'Dojo / Organización'} *
						</label>
						<div class="relative">
							<Building class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
							<input
								type="text"
								id="dojo"
								bind:value={formData.dojo}
								required
								class="focus:border-budo-red-500 focus:ring-budo-red-500 w-full rounded-lg border border-slate-300 py-2.5 pr-3 pl-10 text-sm focus:ring-1 focus:outline-none"
								placeholder={lang === 'en' ? 'Dojo name' : 'Nombre del dojo'}
							/>
						</div>
					</div>

					<div>
						<label for="belt" class="mb-1.5 block text-sm font-medium text-slate-700">
							{lang === 'en' ? 'Belt / Rank' : 'Grado / Cinturón'} *
						</label>
						<div class="relative">
							<Hash class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
							<select
								id="belt"
								bind:value={formData.belt}
								required
								class="focus:border-budo-red-500 focus:ring-budo-red-500 w-full appearance-none rounded-lg border border-slate-300 py-2.5 pr-3 pl-10 text-sm focus:ring-1 focus:outline-none"
							>
								<option value="">{lang === 'en' ? 'Select' : 'Seleccionar'}</option>
								<option value="white">{lang === 'en' ? 'White Belt' : 'Cinturón Blanco'}</option>
								<option value="orange">{lang === 'en' ? 'Orange Belt' : 'Cinturón Naranja'}</option>
								<option value="blue">{lang === 'en' ? 'Blue Belt' : 'Cinturón Azul'}</option>
								<option value="yellow">{lang === 'en' ? 'Yellow Belt' : 'Cinturón Amarillo'}</option
								>
								<option value="green">{lang === 'en' ? 'Green Belt' : 'Cinturón Verde'}</option>
								<option value="brown">{lang === 'en' ? 'Brown Belt' : 'Cinturón Marrón'}</option>
								<option value="shodan">Shodan (1er Dan)</option>
								<option value="nidan">Nidan (2do Dan)</option>
								<option value="sandan">Sandan (3er Dan)</option>
								<option value="yondan">Yondan (4to Dan)</option>
								<option value="godan">Godan (5to Dan)</option>
							</select>
						</div>
					</div>

					{#if event.eventType === 'championship' && getCategories(event).length > 0}
						<div>
							<label for="category" class="mb-1.5 block text-sm font-medium text-slate-700">
								{lang === 'en' ? 'Competition Category' : 'Categoría de Competencia'} *
							</label>
							<select
								id="category"
								bind:value={formData.category}
								required
								class="focus:border-budo-red-500 focus:ring-budo-red-500 w-full appearance-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-1 focus:outline-none"
							>
								<option value="">{lang === 'en' ? 'Select' : 'Seleccionar'}</option>
								{#each getCategories(event) as category, i (i)}
									<option value={category}>{category}</option>
								{/each}
							</select>
						</div>
					{/if}
				</div>

				<div class="mt-6 flex gap-3">
					<Button variant="outline" onclick={handleClose} class="flex-1">
						{lang === 'en' ? 'Cancel' : 'Cancelar'}
					</Button>
					<Button variant="primary" class="flex-1" disabled={isSubmitting}>
						{isSubmitting
							? lang === 'en'
								? 'Submitting...'
								: 'Enviando...'
							: lang === 'en'
								? 'Register'
								: 'Inscribirse'}
					</Button>
				</div>
			</form>
		{/if}
	{/if}
</Modal>

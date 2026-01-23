<script lang="ts">
	import '../app.css';
	let { children } = $props();

    // Simple state for mobile menu
	let isMenuOpen = $state(false); 

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Sobre WBKL', href: '/about' },
        { name: 'Dojos', href: '/branches' },
        { name: 'Noticias', href: '/news' },
        { name: 'Programas', href: '/programmes' },
        { name: 'Documentos', href: '/documents' },
    ];
</script>

<div class="min-h-screen flex flex-col bg-dogi text-midnight font-sans">
	
    <nav class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-light">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-20">
				
                <div class="shrink-0 flex items-center gap-3">
                    <img src='images/logo (1).svg' alt="wbkl logo" class="w-10 h-10" />
					<span class="font-bold text-xl tracking-tight uppercase">World Budo Karate League</span>
				</div>

				<div class="hidden md:flex space-x-8">
                    {#each navLinks as link}
					    <a href={link.href} class="text-sm uppercase tracking-wider font-medium hover:text-budo-red transition-colors duration-200">
                            {link.name}
                        </a>
                    {/each}
				</div>

                <button onclick={() => isMenuOpen = !isMenuOpen} class="md:hidden text-midnight focus:outline-none">
                    <span class="text-2xl">☰</span>
                </button>
			</div>
		</div>

        {#if isMenuOpen}
            <div class="md:hidden bg-white border-b border-slate-light p-4 flex flex-col space-y-4">
                {#each navLinks as link}
                    <a href={link.href} onclick={() => isMenuOpen = false} class="block text-sm uppercase font-medium hover:text-budo-red">
                        {link.name}
                    </a>
                {/each}
            </div>
        {/if}
	</nav>

	<main class="grow">
		{@render children()}
	</main>

	<footer class="bg-midnight text-white py-12">
		<div class="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
			<div>
				<h3 class="text-lg font-bold uppercase mb-4">World Budo Karate League</h3>
				<p class="text-gray-400 text-sm">Fortaleciendo el cuerpo, la mente y el espíritu a través del camino del Kyokushin.</p>
			</div>
            <div>
                <h3 class="text-lg font-bold uppercase mb-4">Enlaces Rápidos</h3>
                <ul class="text-gray-400 text-sm space-y-2">
                    <li><a href="/branches" class="hover:text-white">Buscar un Dojo</a></li>
                    <li><a href="/resources" class="hover:text-white">Reglamento de Torneo</a></li>
                    <li><a href="/contact" class="hover:text-white">Contacto</a></li>
                </ul>
            </div>
			<div class="text-right flex flex-col items-end">
                <span class="text-6xl font-serif opacity-20">押忍</span>
				<p class="text-xs text-gray-500 mt-2">&copy; {new Date().getFullYear()} WBKL. Todos los derechos reservados.</p>
			</div>
		</div>
	</footer>
</div>
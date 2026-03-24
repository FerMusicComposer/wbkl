export interface NewsArticle {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	category: 'news' | 'event' | 'result';
	image?: string;
	content: string;
}

export interface Event {
	slug: string;
	title: string;
	description: string;
	date: string;
	location: string;
	eventType: 'championship' | 'clinic' | 'seminar';
	image?: string;
	featured?: boolean;
	details: {
		schedule: string;
		requirements: string[];
		categories: string[];
		venue: string;
	};
}

export interface Director {
	id: string;
	name: string;
	title: string;
	role: string;
	country?: string;
	countryFlag?: string;
	image?: string;
}

export interface Member {
	id: string;
	name: string;
	title: string;
	dan: string;
	country: string;
}

export const members: Record<string, Member[]> = {
	brazil: [
		{
			id: 'marilucio-alvez',
			name: 'Shihan Marilucio Alvez de Andrade',
			title: 'Shihan',
			dan: '6to. Dan',
			country: 'brazil'
		},
		{
			id: 'walter-bravin',
			name: 'Shihan Walter Bravin Dos Santos',
			title: 'Shihan',
			dan: '6to. Dan',
			country: 'brazil'
		},
		{
			id: 'cristiano-goncalves',
			name: 'Sensei Cristiano Goncalves Dias',
			title: 'Sensei',
			dan: '2do. Dan',
			country: 'brazil'
		},
		{
			id: 'ronaldo-pacheco',
			name: 'Shihan Ronaldo Rodrígues Pacheco',
			title: 'Shihan',
			dan: '7mo. Dan',
			country: 'brazil'
		},
		{
			id: 'charles-silva',
			name: 'Charles da Silva',
			title: '',
			dan: '1er. Dan',
			country: 'brazil'
		}
	],
	chile: [
		{
			id: 'alejandro-reyes',
			name: 'Shihan Alejandro Mauricio Reyes Orellana',
			title: 'Shihan',
			dan: '7mo. Dan',
			country: 'chile'
		},
		{
			id: 'sergio-reyes',
			name: 'Shihan Sérgio Marcelo Reyes Orellana',
			title: 'Shihan',
			dan: '6to. Dan',
			country: 'chile'
		},
		{
			id: 'cristian-solan',
			name: 'Sensei Cristian Andrés Solan Contreras',
			title: 'Sensei',
			dan: '3er. Dan',
			country: 'chile'
		}
	],
	spain: [
		{
			id: 'javier-lopez',
			name: 'Sensei Javier López Romero',
			title: 'Sensei',
			dan: '4to. Dan',
			country: 'spain'
		},
		{
			id: 'josep-carbonell',
			name: 'Shidoin Josep Carbonell',
			title: 'Shidoin',
			dan: '1er. Dan',
			country: 'spain'
		},
		{
			id: 'alifran-inojosa',
			name: 'Shidoin Alifran Inojosa Rodríguez',
			title: 'Shidoin',
			dan: '1er. Dan',
			country: 'spain'
		},
		{
			id: 'javier-garcia',
			name: 'Shidoin Javier García del Pozo',
			title: 'Shidoin',
			dan: '1er. Dan',
			country: 'spain'
		},
		{
			id: 'giuseppe-ferrari',
			name: 'Giuseppe Ferrari Olguin',
			title: '',
			dan: '1er. Dan',
			country: 'spain'
		}
	],
	japan: [
		{
			id: 'rintaro-kawahara',
			name: 'Shihan Rintaro Kawahara',
			title: 'Shihan',
			dan: '3er. Dan',
			country: 'japan'
		}
	],
	uruguay: [
		{
			id: 'jorge-martinez',
			name: 'Sensei Jorge Martínez',
			title: 'Sensei',
			dan: '3er. Dan',
			country: 'uruguay'
		},
		{
			id: 'jose-iguini',
			name: 'Sensei José Iguini',
			title: 'Sensei',
			dan: '3er. Dan',
			country: 'uruguay'
		}
	]
};

export const directors: Director[] = [
	{
		id: 'soke-masahiro-motomura',
		name: 'Soke Masahiro Motomura',
		title: 'Soke',
		role: 'Director Mundial WBKL'
	},
	{
		id: 'dai-shihan-william-boss',
		name: 'Dai Shihan William Boss',
		title: 'Dai Shihan',
		role: 'Director Latam/Europa Kyokushin WBKL'
	},
	{
		id: 'shihan-marilucio-alvez',
		name: 'Shihan Marilucio Alvez',
		title: 'Shihan',
		role: 'Director Kyokushin WBKL Brasil',
		country: 'Brasil',
		countryFlag: '🇧🇷'
	},
	{
		id: 'shihan-alejandro-reyes',
		name: 'Shihan Alejandro Reyes Orellana',
		title: 'Shihan',
		role: 'Director Kyokushin WBKL Chile',
		country: 'Chile',
		countryFlag: '🇨🇱'
	},
	{
		id: 'shihan-rintaro-kawahara',
		name: 'Shihan Rintaro Kawahara',
		title: 'Shihan',
		role: 'Director Kyokushin WBKL Japón',
		country: 'Japón',
		countryFlag: '🇯🇵'
	},
	{
		id: 'shidoin-josep-carbonell',
		name: 'Shidoin Josep Carbonell García',
		title: 'Shidoin',
		role: 'Director Kyokushin WBKL España',
		country: 'España',
		countryFlag: '🇪🇸'
	},
	{
		id: 'sensei-jorge-martinez',
		name: 'Sensei Jorge Martínez',
		title: 'Sensei',
		role: 'Director Kyokushin WBKL Uruguay',
		country: 'Uruguay',
		countryFlag: '🇺🇾'
	}
];

export const news: NewsArticle[] = [
	{
		slug: 'world-championship-results-2024',
		title: 'Resultados del Campeonato Mundial 2024',
		excerpt:
			'Los mejores atletas de Kyokushin de todo el mundo se reunieron para competir en el campeonato más prestigioso del año.',
		date: '15 Diciembre, 2024',
		category: 'result',
		image: '/images/tournament1.jpg',
		content: `
			<p>El Campeonato Mundial de Kyokushin 2024 ha concluido con gran éxito, reuniendo a los mejores atletas de más de 80 países en una competencia que demostró el verdadero espíritu del Budo.</p>
			
			<h2>Resultados Destacados</h2>
			<p>En la categoría masculina, el campeón mundial es <strong>Takeshi Yamamoto</strong> de Japón, quien demostró una técnica impecable y un espíritu indomable durante toda la competencia.</p>
			
			<p>En la categoría femenina, <strong>Maria Silva</strong> de Brasil se llevó el título mundial, convirtiéndose en la primera campeona de Sudamérica en esta categoría.</p>
			
			<h2>Momentos Memorables</h2>
			<p>El campeonato estuvo lleno de momentos emocionantes, desde las rondas preliminares hasta las finales. Los atletas demostraron no solo su habilidad técnica, sino también su respeto por el oponente y el espíritu de superación.</p>
			
			<p>La ceremonia de clausura contó con la presencia de maestros de todo el mundo, quienes entregaron los reconocimientos a los ganadores y destacaron la importancia de mantener vivos los valores del Kyokushin.</p>
			
			<h2>Próximos Pasos</h2>
			<p>La WBKL ya está preparando el próximo Campeonato Mundial para 2025, que promete ser aún más emocionante. Mantente atento a nuestras redes sociales para más información sobre fechas y sedes.</p>
		`
	},
	{
		slug: 'new-dojo-certification-program',
		title: 'Nuevo Programa de Certificación para Dojos',
		excerpt:
			'La WBKL lanza un programa integral de certificación que garantiza los más altos estándares de enseñanza del Kyokushin.',
		date: '10 Diciembre, 2024',
		category: 'news',
		image: '/images/tournament2.jpg',
		content: `
			<p>La World Budo Karate League se complace en anunciar el lanzamiento de su nuevo programa de certificación internacional para dojos, diseñado para garantizar los más altos estándares de enseñanza del Kyokushin en todo el mundo.</p>
			
			<h2>Objetivos del Programa</h2>
			<p>Este programa tiene como objetivo principal establecer estándares uniformes de calidad técnica y pedagógica en todos los dojos afiliados a la WBKL, asegurando que cada estudiante reciba una formación consistente y de alta calidad.</p>
			
			<h2>Requisitos de Certificación</h2>
			<p>Los dojos interesados en obtener la certificación deben cumplir con una serie de requisitos que incluyen:</p>
			<ul>
				<li>Instructores certificados por la WBKL</li>
				<li>Instalaciones adecuadas y seguras</li>
				<li>Programa de enseñanza alineado con los estándares de la WBKL</li>
				<li>Participación en eventos y seminarios oficiales</li>
			</ul>
			
			<h2>Beneficios</h2>
			<p>Los dojos certificados recibirán reconocimiento oficial, acceso a recursos exclusivos, y la posibilidad de participar en campeonatos y eventos internacionales de la WBKL.</p>
		`
	},
	{
		slug: 'international-kata-seminar-barcelona',
		title: 'Seminario Internacional de Kata en Barcelona',
		excerpt:
			'Anunciamos el próximo seminario internacional de Kata que se llevará a cabo en Barcelona el próximo mes de marzo.',
		date: '5 Diciembre, 2024',
		category: 'event',
		image: '/images/fighter1.png',
		content: `
			<p>Nos complace anunciar el próximo Seminario Internacional de Kata que se realizará en Barcelona, España, durante el próximo mes de marzo. Este evento reunirá a expertos de todo el mundo.</p>
			
			<h2>Detalles del Evento</h2>
			<p>El seminario se llevará a cabo en las instalaciones del Dojo Central Barcelona y contará con la participación de maestros internacionales de reconocido prestigio.</p>
			
			<h2>Programa</h2>
			<p>El programa incluye sesiones de kata tradicional, aplicaciones prácticas y sesiones de perfeccionamiento para todos los niveles.</p>
			
			<h2>Inscripciones</h2>
			<p>Las inscripciones están abiertas para todos los practicantes de Kyokushin. Para más información, contacta a tu dojo afiliado o escribe a eventos@wbkl.org.</p>
		`
	},
	{
		slug: 'kyokushin-values-conference',
		title: 'Conferencia sobre Valores del Kyokushin',
		excerpt:
			'Expertos internacionales debaten sobre la importancia de preservar los valores tradicionales del Kyokushin en la era moderna.',
		date: '28 Noviembre, 2024',
		category: 'news',
		content: `
			<p>La WBKL organizó una conferencia internacional sobre los valores tradicionales del Kyokushin, con la participación de maestros y expertos de más de 30 países.</p>
			
			<h2>Temas Principales</h2>
			<p>Los temas tratados incluyeron la importancia del respeto, la disciplina, la perseverancia y el espíritu indomable en la práctica del Karate Kyokushin contemporáneo.</p>
			
			<h2>Conclusiones</h2>
			<p>Los participantes coincidieron en la necesidad de mantener vivos los valores del Budo, adaptándolos a las necesidades de las nuevas generaciones sin perder su esencia.</p>
			
			<p>La WBKL publicará próximamente un documento con las conclusiones de la conferencia, que servirá como guía para todos los dojos afiliados.</p>
		`
	}
];

export const events: Event[] = [
	{
		slug: 'world-championship-2025',
		title: 'Campeonato Mundial de Kyokushin WBKL 2025',
		description:
			'La máxima competición de Karate Kyokushin a nivel mundial. Atletas de más de 80 países competirán por el título.',
		date: '15 - 20 Julio, 2025',
		location: 'Tokyo, Japón',
		eventType: 'championship',
		image: '/images/tournament1.jpg',
		featured: true,
		details: {
			schedule:
				'El evento comenzará el 15 de julio con las ceremonias de apertura y finalizará el 20 de julio con las finales y la ceremonia de clausura.',
			requirements: [
				'Cinturón negro o equivalente certificado por organización afiliada',
				'Certificado médico vigente',
				'Inscripción completada antes del 1 de Junio de 2025',
				'Seguro de competencia válido'
			],
			categories: [
				'Categoría Masculina: -60kg, -70kg, -80kg, -90kg, +90kg',
				'Categoría Femenina: -50kg, -55kg, -60kg, -65kg, +65kg',
				'Categoría Juvenil: 16-17 años (masculino y femenino)'
			],
			venue: 'Nippon Budokan, Tokio, Japón'
		}
	},
	{
		slug: 'european-cup-2025',
		title: 'Copa Europea WBKL Madrid 2025',
		description:
			'El campeonato europeo más importante del año. Participa o asiste a este evento que reúne a los mejores atletas del continente.',
		date: '8 - 10 Marzo, 2025',
		location: 'Madrid, España',
		eventType: 'championship',
		image: '/images/tournament2.jpg',
		details: {
			schedule:
				'La competición se desarrollará durante tres días, con eliminatorias los primeros dos días y finales el tercer día.',
			requirements: [
				'Cinturón negro certificado',
				'Certificado médico de aptitud física',
				'Inscripción antes del 15 de Febrero de 2025'
			],
			categories: [
				'Categoría Masculina: -65kg, -75kg, -85kg, +85kg',
				'Categoría Femenina: -55kg, -65kg, +65kg'
			],
			venue: 'Palacio de Deportes de la Comunidad, Madrid'
		}
	},
	{
		slug: 'seminar-osaka-2025',
		title: 'Seminario con Kancho - Osaka',
		description:
			'Aprende directamente del Kancho en este seminario exclusivo. Técnicas avanzadas, filosofía budo y entrenamiento intensivo.',
		date: '5 - 7 Abril, 2025',
		location: 'Osaka, Japón',
		eventType: 'seminar',
		details: {
			schedule:
				'Tres días de entrenamiento intensivo, con sesiones de mañana y tarde. Incluye práctica de kumite, kata y aplicaciones avanzadas.',
			requirements: [
				'Cinturón negro 1er dan o superior',
				'Experiencia mínima de 5 años en Kyokushin',
				'Inscripción antes del 1 de Marzo de 2025'
			],
			categories: ['Todos los niveles de cinturón negro'],
			venue: 'Dojo Central Osaka, Japón'
		}
	},
	{
		slug: 'instructor-certification-2025',
		title: 'Certificación de Instructores Nivel 1',
		description:
			'Programa de certificación oficial para instructores de la WBKL. Obtén reconocimiento internacional.',
		date: '20 - 22 Marzo, 2025',
		location: 'Barcelona, España',
		eventType: 'clinic',
		details: {
			schedule:
				'Programa de tres días que incluye metodología de enseñanza, técnicas avanzadas y evaluación práctica.',
			requirements: [
				'Cinturón negro 2do dan o superior',
				'Mínimo 3 años de experiencia como instructor',
				'Solicitud y carta de recomendación'
			],
			categories: ['Certificación de Instructor nivel 1'],
			venue: 'Centro de Entrenamiento WBKL, Barcelona'
		}
	}
];

export function getNewsArticle(slug: string): NewsArticle | undefined {
	return news.find((article) => article.slug === slug);
}

export function getEvent(slug: string): Event | undefined {
	return events.find((event) => event.slug === slug);
}

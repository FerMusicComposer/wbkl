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

export interface Program {
	id: string;
	slug: string;
	title: string;
	description: string;
	descriptionExtended?: string;
	category: 'kyokushin' | 'combat';
	image?: string;
	features: string[];
	schedule?: string;
	level?: string;
	featured?: boolean;
}

export const programs: Program[] = [
	{
		id: 'kyokushin-adults',
		slug: 'kyokushin-adults',
		title: 'Kyokushin Adultos',
		description:
			'Entrenamiento tradicional de Karate Kyokushin para adultos. Desarrolla fuerza, disciplina y técnica.',
		descriptionExtended:
			'Nuestro programa de Kyokushin para adultos está diseñado para estudiantes de todos los niveles, desde principiantes hasta avanzados. El entrenamiento incluye kihon (técnicas básicas), kata (formas), kumite (combate) y acondicionamiento físico.',
		category: 'kyokushin',
		image: '/images/fighter1.png',
		features: [
			'Técnicas básicas y avanzadas',
			'Kata tradicional',
			'Kumite (combate)',
			'Acondicionamiento físico',
			'Filosofía budo',
			'Entrenamiento de contacto pleno'
		],
		schedule: 'Lunes, Miércoles y Viernes - 19:00 a 21:00',
		level: 'Todos los niveles',
		featured: true
	},
	{
		id: 'kyokushin-kids',
		slug: 'kyokushin-kids',
		title: 'Kyokushin Niños',
		description:
			'Programa especializado para niños que fomenta la disciplina, el respeto y la coordinación.',
		descriptionExtended:
			'El programa de Kyokushin para niños está diseñado para desarrollar la confianza, la disciplina y el respeto mientras aprenden técnicas de karate de manera divertida y segura. Adaptamos las técnicas para que sean apropiadas para cada edad.',
		category: 'kyokushin',
		image: '/images/tournament1.jpg',
		features: [
			'Desarrollo de disciplina',
			'Mejora de coordinación',
			'Técnicas adaptadas por edad',
			'Valores del budo',
			'Avance gradual de cinturones',
			'Ambiente seguro y divertido'
		],
		schedule: 'Martes y Jueves - 17:00 a 18:30',
		level: '4 a 14 años'
	},
	{
		id: 'kickboxing',
		slug: 'kickboxing',
		title: 'Kickboxing',
		description:
			'Arte marcial de contacto que combina técnicas de boxeo y karate. Ideal para fitness y autodefensa.',
		descriptionExtended:
			'Nuestras clases de kickboxing combinan técnicas de boxeo occidental con patadas del karate y muay thai. Es ideal para mejorar tu condición física, aprender autodefensa y liberar estrés.',
		category: 'combat',
		image: '/images/tournament2.jpg',
		features: [
			'Técnicas de puño y patada',
			'Acondicionamiento cardiovascular',
			'Trabajo con saco',
			'Sparring controlado',
			'Acondicionamiento funcional',
			'Técnicas de defensa personal'
		],
		schedule: 'Lunes, Miércoles y Viernes - 18:00 a 19:30',
		level: 'Principiantes y avanzados'
	},
	{
		id: 'boxing',
		slug: 'boxing',
		title: 'Boxeo',
		description:
			'El arte de la boxeo profesional. Aprende técnicas de puño, movimiento y estrategia.',
		descriptionExtended:
			'Las clases de boxeo enseñan las técnicas fundamentales del "noble arte": jabs, cruces, ganchos, uppercuts, movimiento de pies, defensa y estrategia.perfecto para mejorar tu fitness y aprender habilidades de autodefensa.',
		category: 'combat',
		features: [
			'Técnicas de puño',
			'Movimiento y footwork',
			'Defensa y bloqueos',
			'Trabajo con saco y speed bag',
			'Acondicionamiento específico',
			'Sparring técnico'
		],
		schedule: 'Martes y Jueves - 19:00 a 20:30',
		level: 'Todos los niveles'
	},
	{
		id: 'krav-maga',
		slug: 'krav-maga',
		title: 'Krav Maga',
		description:
			'Sistema de autodefensa efectivo y práctico. Aprende a defenderte en situaciones reales.',
		descriptionExtended:
			'El Krav Maga es un sistema de autodefensa desarrollado para el ejército israelí. Se enfoca en técnicas prácticas y efectivas para situaciones reales de combate y autodefensa. Aprenderás a defender contra agresiones, armas y múltiples atacantes.',
		category: 'combat',
		features: [
			'Técnicas de autodefensa',
			'Defensa contra armas',
			'Escapes y contraataques',
			'Técnicas de ground fighting',
			'Simulaciones realistas',
			'Preparación mental'
		],
		schedule: 'Sábados - 10:00 a 12:00',
		level: 'Todos los niveles'
	}
];

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

export interface Document {
	id: string;
	title: string;
	description: string;
	category: 'rules' | 'techniques' | 'certifications' | 'administrative';
	fileUrl?: string;
	fileSize?: string;
	fileType?: string;
}

export const documents: Document[] = [
	{
		id: 'org-rules',
		title: 'Reglamento de la Organización WBKL',
		description:
			'Documento oficial con las reglas y estatutos de la World Budo Karate League. Incluye estructura organizativa, derechos y obligaciones de los miembros.',
		category: 'rules',
		fileSize: '2.4 MB',
		fileType: 'PDF'
	},
	{
		id: 'tournament-rules',
		title: 'Reglamento de Competencia',
		description:
			'Reglamento oficial para competencias de Kyokushin. Incluye categorías, sistema de puntuación, faltas y sanciones.',
		category: 'rules',
		fileSize: '1.8 MB',
		fileType: 'PDF'
	},
	{
		id: 'kihon-syllabus',
		title: 'Programa de Kihon',
		description:
			'Guía completa de técnicas básicas (kihon) requeridas para cada grado. Incluye katas básicos, técnicas de puño y patada.',
		category: 'techniques',
		fileSize: '5.2 MB',
		fileType: 'PDF'
	},
	{
		id: 'kata-guide',
		title: 'Guía de Katas',
		description:
			'Listado oficial de katas del curriculum de Kyokushin con descripciones detalladas, diagramas y aplicaciones.',
		category: 'techniques',
		fileSize: '12.5 MB',
		fileType: 'PDF'
	},
	{
		id: 'instructor-certification',
		title: 'Manual de Certificación de Instructores',
		description:
			'Requisitos y procedimientos para obtener la certificación oficial de instructor WBKL. Niveles 1, 2 y 3.',
		category: 'certifications',
		fileSize: '3.1 MB',
		fileType: 'PDF'
	},
	{
		id: 'dojo-certification',
		title: 'Certificación de Dojos Afiliados',
		description:
			'Proceso de certificación para dojos afiliados. Requisitos de instalaciones, equipamiento y personal.',
		category: 'certifications',
		fileSize: '1.5 MB',
		fileType: 'PDF'
	},
	{
		id: 'belt-requirements',
		title: 'Requisitos de Grado',
		description:
			'Programa oficial de requisitos para cada cinturón, desde blanco hasta negro. Técnicas, katas y requisitos físicos.',
		category: 'techniques',
		fileSize: '4.3 MB',
		fileType: 'PDF'
	},
	{
		id: 'competition-forms',
		title: 'Formularios de Competencia',
		description:
			'Formularios oficiales para inscripción en competencias, autorización médica y registro de atletas.',
		category: 'administrative',
		fileSize: '0.8 MB',
		fileType: 'PDF'
	},
	{
		id: 'membership-form',
		title: 'Formulario de Afiliación',
		description: 'Formulario de inscripción para nuevos miembros y dojos afiliados a la WBKL.',
		category: 'administrative',
		fileSize: '0.5 MB',
		fileType: 'PDF'
	},
	{
		id: 'grading-form',
		title: 'Formulario de Examen de Grado',
		description:
			'Formulario oficial para solicitudes de examen de grado. Incluye requisitos y procedimientos.',
		category: 'administrative',
		fileSize: '0.6 MB',
		fileType: 'PDF'
	},
	{
		id: 'judge-certification',
		title: 'Certificación de Árbitros y Jueces',
		description:
			'Manual y requisitos para la certificación de árbitros y jueces oficiales de la WBKL.',
		category: 'certifications',
		fileSize: '2.7 MB',
		fileType: 'PDF'
	},
	{
		id: 'referee-guide',
		title: 'Guía de Arbitraje',
		description:
			'Guía completa de señales, procedimientos y criterios de juzgaje para competencias oficiales.',
		category: 'rules',
		fileSize: '1.9 MB',
		fileType: 'PDF'
	}
];

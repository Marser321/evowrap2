import React from 'react';
import { Shield, Sparkles, Droplets, Sun, Layers, Microscope, Scan, UserCheck } from 'lucide-react';

export interface ProcessStep {
    title: string;
    description: string;
    icon: React.ElementType; // Lucide icon component
}

export interface ServiceData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    heroImage: string; // Placeholder for now
    technicalSpecs: {
        label: string;
        value: string;
    }[];
    process: ProcessStep[];
    faq: {
        question: string;
        answer: string;
    }[];
    gallery?: string[];
}

export const servicesData: Record<string, ServiceData> = {
    'ceramic-coating': {
        id: 'ceramic-coating',
        title: 'Tratamiento Cerámico Gtechniq',
        subtitle: 'Protección molecular de vanguardia para una estética inigualable.',
        description: 'Nuestro tratamiento cerámico crea una barrera química permanente que se une a la pintura de su vehículo. No es una cera, es una capa de vidrio líquido que endurece, proporcionando resistencia extrema a químicos, rayos UV y suciedad, manteniendo un brillo de exhibición por años.',
        heroImage: '/images/services/ceramic-macro.png',
        technicalSpecs: [
            { label: 'Dureza', value: '9H/10H (Escala Mohs)' },
            { label: 'Duración', value: 'Hasta 5 años' },
            { label: 'Resistencia Química', value: 'pH 2 - pH 13' },
            { label: 'Efecto Hidrofóbico', value: 'Extremo' },
        ],
        process: [
            {
                title: 'Descontaminación Química y Férrica',
                description: 'Eliminación profunda de partículas metálicas, brea y savia incrustadas en el poro del barniz que el lavado tradicional no quita. Prepara la superficie para una adhesión molecular perfecta.',
                icon: Microscope,
            },
            {
                title: 'Corrección de Barniz (Pulido)',
                description: 'Nivelación microscópica de la laca para eliminar swirls, hologramas y arañazos. Este paso es crítico: el brillo real proviene de la planitud de la superficie, no solo del producto aplicado.',
                icon: Sparkles,
            },
            {
                title: 'Desengrasado IPA',
                description: 'Limpieza final con alcohol isopropílico puro para remover cualquier aceite de pulimento residual, asegurando que el cerámico ancle directamente sobre el barniz virgen.',
                icon: Droplets,
            },
            {
                title: 'Aplicación Multicapa',
                description: 'Aplicación manual precisa de Crystal Serum Light y EXO. Controlamos humedad y temperatura para garantizar un curado uniforme y la máxima dureza estructural.',
                icon: Layers,
            },
            {
                title: 'Curado IR y Control de Calidad',
                description: 'Inspección final bajo luces de espectro corregido y curado acelerado con lámparas infrarrojas para sellar la protección antes de la entrega.',
                icon: Scan,
            },
        ],
        faq: [
            {
                question: '¿Necesito encerar mi auto después del cerámico?',
                answer: 'No. El cerámico reemplaza la necesidad de ceras. De hecho, aplicar cera puede disminuir las propiedades hidrofóbicas del recubrimiento.',
            },
            {
                question: '¿Protege contra arañazos profundos?',
                answer: 'Aumenta la resistencia a micro-arañazos de lavado (swirls), pero no es un escudo contra golpes o llaves. Para esa protección física, recomendamos PPF.',
            },
        ],
        gallery: [
            '/images/services/ceramic-card.png',
            '/images/showcase/grey-detail-macro.jpg',
            '/images/showcase/grey-futuristic-rear.png'
        ]
    },
    'ppf': {
        id: 'ppf',
        title: 'Paint Protection Film (PPF)',
        subtitle: 'El escudo invisible definitivo contra impactos y desgaste.',
        description: 'El PPF es una película de poliuretano termoplástico transparente y autorregenerativa. Es la única protección real contra impactos de piedras, raspones de estacionamiento y vandalismo menor, manteniendo la pintura original intacta bajo un escudo invisible.',
        heroImage: '/images/services/ppf-macro.png',
        technicalSpecs: [
            { label: 'Espesor', value: '200 Micrones' },
            { label: 'Autorregeneración', value: 'Sí (con calor)' },
            { label: 'Garantía', value: '10 Años' },
            { label: 'Acabado', value: 'Invisible / Mate' },
        ],
        process: [
            {
                title: 'Descontaminación Extrema',
                description: 'Limpieza exhaustiva para asegurar que ninguna partícula quede atrapada bajo el film. Cualquier imperfección se magnificaría, por lo que la limpieza es quirúrgica.',
                icon: Microscope,
            },
            {
                title: 'Diseño y Corte Digital',
                description: 'Utilizamos software de precisión para cortar los patrones exactos de su modelo de vehículo. Esto minimiza el uso de navajas sobre la pintura y garantiza un ajuste perfecto en bordes y esquinas.',
                icon: Scan,
            },
            {
                title: 'Instalación con Gel',
                description: 'Posicionamiento del film utilizando geles de deslizamiento especiales. Es un arte que requiere paciencia para eliminar burbujas y tensión sin distorsionar la claridad óptica del material.',
                icon: Layers,
            },
            {
                title: 'Sellado de Bordes',
                description: 'Doblamos y adherimos los bordes hacia el interior de los paneles siempre que sea posible, haciendo que la instalación sea prácticamente indetectable a simple vista.',
                icon: Shield,
            },
            {
                title: 'Inspección Final',
                description: 'Revisión minuciosa después de 24 horas de asentamiento para asegurar la adherencia total y la ausencia de defectos antes de entregar su vehículo protegido.',
                icon: UserCheck,
            },
        ],
        faq: [
            {
                question: '¿El PPF se pone amarillo con el tiempo?',
                answer: 'Nuestras láminas de alta gama cuentan con inhibidores UV avanzados que previenen el amarillamiento, garantizado por 10 años.',
            },
            {
                question: '¿Si se raya el film, se puede arreglar?',
                answer: 'Sí. El PPF tiene propiedades autorregenerativas (self-healing). El calor del sol o agua caliente hace que los micro-arañazos desaparezcan solos al volver el polímero a su forma original.',
            },
        ],
        gallery: [
            '/images/services/ppf-card.png',
            '/images/showcase/grey-ferrari.png',
            '/images/showcase/black-mustang.png'
        ]
    },
    'detailing': {
        id: 'detailing',
        title: 'Detailing de Interiores',
        subtitle: 'Restauración profunda para una experiencia de cabina nueva.',
        description: 'No es solo una limpieza, es una restauración. Utilizamos vapor a alta presión, química enzimática y acondicionadores de cuero con pH neutro para devolver la textura, el olor y el acabado mate original de fábrica a su interior, eliminando bacterias y alérgenos.',
        heroImage: '/images/services/detailing-card.png',
        technicalSpecs: [
            { label: 'Tiempo', value: '1 Día' },
            { label: 'Desinfección', value: 'Ozono / Vapor' },
            { label: 'Protección', value: 'Hidratación UV' },
            { label: 'Alcance', value: 'Tapizados, Alfombras, Techo' },
        ],
        process: [
            {
                title: 'Aspirado de Precisión',
                description: 'Utilizamos boquillas especiales y aire comprimido para remover suciedad de rieles de asientos, ductos de ventilación y costuras donde la aspiradora común no llega.',
                icon: Scan,
            },
            {
                title: 'Limpieza Enzimática',
                description: 'Aplicación de limpiadores biológicos que descomponen la materia orgánica en alfombras y telas, eliminando olores de raíz en lugar de enmascararlos.',
                icon: Droplets,
            },
            {
                title: 'Vaporizado Térmico',
                description: 'Inyección de vapor a 140°C para matar bacterias en ductos de aire y disolver grasitud en plásticos y cueros sin usar químicos agresivos.',
                icon: Sparkles,
            },
            {
                title: 'Restauración de Cuero',
                description: 'Limpieza profunda de poros del cuero seguida de una hidratación con acondicionadores de lanolina que devuelven la flexibilidad y el acabado mate original.',
                icon: Layers,
            },
            {
                title: 'Dressing de Plásticos',
                description: 'Protección UV para tableros y puertas con acabado satinado "No-Grasoso". Previene el agrietamiento por sol y repele el polvo.',
                icon: Shield,
            },
        ],
        faq: [
            {
                question: '¿Sacan butacas para limpiar?',
                answer: 'Solo si es estrictamente necesario y seguro (sin sensores de airbag). Generalmente, nuestras herramientas de alcance profundo logran mejores resultados sin desarmar el vehículo.',
            },
            {
                question: '¿Cuándo seca el interior?',
                answer: 'Entregamos el vehículo 100% seco. Utilizamos turbinas de calor para secar alfombras y tapizados antes de la entrega para evitar olor a humedad.',
            },
        ],
        gallery: [
            '/images/process/red-gtr-foam.jpg',
            '/images/services/detailing-card.png'
        ]
    },
};

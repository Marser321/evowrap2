
// Business Logic for Evo Wrap
// Rules defined by Maldonado/Punta del Este context

interface LocationContext {
    city: string; // e.g., 'Punta del Este', 'Montevideo', 'Interior'
    isCoastal: boolean;
}

interface MaintenanceSchedule {
    frequencyMonths: number;
    reason: string;
    suggestedProducts: string[];
}

export function calculateMaintenance(serviceType: string, location: LocationContext): MaintenanceSchedule {
    // Default Non-Coastal Rule
    let frequency = 12; // Once a year
    let reason = "Mantenimiento estándar.";
    const products = ["Lavado Neutro"];

    // Rule 1: Salinity Logic (Maldonado/Punta del Este)
    if (location.isCoastal || location.city.includes('Punta del Este') || location.city.includes('Maldonado')) {
        frequency = frequency / 2; // Twice as frequent
        reason = "Alta exposición a salinidad y humedad marina (Corrosión acelerada).";
        products.push("Eliminador de Sal", "Booster Cerámico");
    }

    // Rule 2: Service specific logic
    if (serviceType.includes('Cerámico') || serviceType.includes('Ceramic')) {
        // Ceramic needs 'Top Coat' recharge
        products.push("Recarga de Top Coat");
    } else if (serviceType.includes('PPF')) {
        // PPF is more resistant but needs cleaning
        frequency = Math.max(frequency, 6); // At least every 6 months even in coast
    }

    return {
        frequencyMonths: frequency,
        reason,
        suggestedProducts: products
    };
}

export const detectLocationMock = (): LocationContext => {
    // In a real app, uses Geolocation API or Supabase user profile
    // Mocking 'Punta del Este' for the demo
    return {
        city: 'Punta del Este',
        isCoastal: true
    };
};

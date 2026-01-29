interface ClientData {
    name: string;
    phone: string;
    service: string;
}

export async function notifyClient(citaId: string, status: string, clientData: ClientData) {
    try {
        const webhookUrl = 'http://localhost:5678/webhook/evo-notify';

        // In a real app, you might validate the secret or use a different method.
        // For local n8n, a simple POST is sufficient.

        const payload = {
            cita_id: citaId,
            status: status,
            client_name: clientData.name,
            client_phone: clientData.phone,
            service_name: clientData.service,
            timestamp: new Date().toISOString(),
        };

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.error('Webhook failed:', response.statusText);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error triggering webhook:', error);
        return false;
    }
}

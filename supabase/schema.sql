-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. CLIENTES
-- Stores customer information. Designed for WhatsApp integration.
create table public.clientes (
  id uuid primary key default uuid_generate_v4(),
  nombre text not null,
  telefono text not null unique, -- Format: 09...
  modelo_auto text, -- e.g., "Toyota Hilux", "BMW X5"
  matricula text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- 2. SERVICIOS
-- Catalog of available services with duration and pricing.
create table public.servicios (
  id uuid primary key default uuid_generate_v4(),
  nombre text not null, -- e.g., "PPF Frontal", "Lavado Premium"
  descripcion text,
  categoria text check (categoria in ('PPF', 'Ploteo', 'Ceramico', 'Limpieza', 'Otros')),
  precio_base numeric(10, 2) not null, -- Base price in local currency or USD
  duracion_estimada interval not null, -- e.g., '3 days', '4 hours'
  requires_bay_blocking boolean default true, -- Does this service block a physical bay?
  created_at timestamp with time zone default now()
);

-- 3. CITAS (Appointments)
-- Relates clients, services, and scheduling.
create type cita_estado as enum ('Pendiente', 'En Proceso', 'Listo para Entrega', 'Completado', 'Cancelado');

create table public.citas (
  id uuid primary key default uuid_generate_v4(),
  cliente_id uuid references public.clientes(id) on delete cascade not null,
  servicio_id uuid references public.servicios(id) on delete set null not null,
  fecha_inicio timestamp with time zone not null,
  fecha_fin timestamp with time zone not null, -- Calculated based on servicio.duracion_estimada
  estado cita_estado default 'Pendiente',
  notas_internas text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- 4. INSPECCION
-- Damage reports and pre-existing conditions. Vital for liability.
create table public.inspeccion (
  id uuid primary key default uuid_generate_v4(),
  cita_id uuid references public.citas(id) on delete cascade not null,
  descripcion_dano text,
  fotos_urls text[], -- Array of image URLs from Storage
  aprobado_por_cliente boolean default false,
  created_at timestamp with time zone default now()
);

-- Row Level Security (RLS)
-- Enable RLS on all tables
alter table public.clientes enable row level security;
alter table public.servicios enable row level security;
alter table public.citas enable row level security;
alter table public.inspeccion enable row level security;

-- Policies (Simple public access for MVP, refine for Production)
-- WARNING: These policies are open for MVP demonstration. Secure them before production!

create policy "Enable read access for all users" on public.servicios for select using (true);
create policy "Enable read access for all users" on public.clientes for select using (true); -- Usually restricted
create policy "Enable insert for all users" on public.clientes for insert with check (true);
create policy "Enable read access for all users" on public.citas for select using (true);
create policy "Enable insert for all users" on public.citas for insert with check (true);
create policy "Enable all access for all users" on public.inspeccion for all using (true);

-- Triggers for updated_at
create or replace function update_modified_column()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language 'plpgsql';

create trigger update_clientes_modtime
    before update on public.clientes
    for each row execute procedure update_modified_column();

create trigger update_citas_modtime
    before update on public.citas
    for each row execute procedure update_modified_column();

-- Seed Data (Optional, for testing)
insert into public.servicios (nombre, categoria, precio_base, duracion_estimada, requires_bay_blocking) values
('Ploteo Completo (Mate/Saten)', 'Ploteo', 1500.00, '3 days', true),
('PPF Frontal (High Impact)', 'PPF', 800.00, '1 day', true),
('Tratamiento Cerámico (3 años)', 'Ceramico', 400.00, '6 hours', true),
('Limpieza Interior Detallada', 'Limpieza', 80.00, '3 hours', true);

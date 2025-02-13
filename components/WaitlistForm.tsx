"use client"

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const supabase = createClient(
  "https://TU_SUPABASE_URL.supabase.co",  // Reemplaza con tu URL de Supabase
  "TU_SUPABASE_ANON_KEY"  // Reemplaza con tu Anon Key
);

export function WaitlistForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    email: "",
    country: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.from("waitlist").insert([formState]);

      if (error) throw error;

      alert("¡Registro exitoso!");
      setFormState({ name: "", surname: "", email: "", country: "", phone: "" });
    } catch (error) {
      alert("Error al registrar: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" placeholder="Tu nombre" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="surname">Apellido</Label>
        <Input id="surname" placeholder="Tu apellido" value={formState.surname} onChange={(e) => setFormState({ ...formState, surname: e.target.value })} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="tu@email.com" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="country">País</Label>
        <Select value={formState.country} onValueChange={(value) => setFormState({ ...formState, country: value })}>
          <SelectTrigger><SelectValue placeholder="Selecciona tu país" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="venezuela">Venezuela</SelectItem>
            <SelectItem value="colombia">Colombia</SelectItem>
            <SelectItem value="mexico">México</SelectItem>
            <SelectItem value="argentina">Argentina</SelectItem>
            <SelectItem value="chile">Chile</SelectItem>
            <SelectItem value="peru">Perú</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Teléfono</Label>
        <Input id="phone" type="tel" placeholder="Tu número" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} required />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Unirme a la lista de espera"}
      </Button>
    </form>
  );
}


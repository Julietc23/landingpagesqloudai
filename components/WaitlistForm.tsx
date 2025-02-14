"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type React from "react" // Added import for React
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  "https://tsfmtbtkipspmbpwyocm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZm10YnRraXBzcG1icHd5b2NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0Nzc4NDAsImV4cCI6MjA1NTA1Mzg0MH0.rf0JuLaonPGpgi6UGgAiS2AsQ17xIwUz9weZowG4XjQ",
)

export function WaitlistForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    email: "",
    country: "",
    companyName: "",
    companySector: "",
    useDatabase: "",
    databaseType: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = await supabase.from("waitlist").insert([formState])

      if (error) throw error

      alert("¡Registro exitoso!")
      setFormState({
        name: "",
        surname: "",
        email: "",
        country: "",
        companyName: "",
        companySector: "",
        useDatabase: "",
        databaseType: "",
      })
    } catch (error) {
      alert("Error al registrar: " + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          placeholder="Tu nombre"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="surname">Apellido</Label>
        <Input
          id="surname"
          placeholder="Tu apellido"
          value={formState.surname}
          onChange={(e) => setFormState({ ...formState, surname: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="country">País</Label>
        <Input
          id="country"
          placeholder="Tu país"
          value={formState.country}
          onChange={(e) => setFormState({ ...formState, country: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="companyName">Nombre de la empresa</Label>
        <Input
          id="companyName"
          placeholder="Nombre de tu empresa"
          value={formState.companyName}
          onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="companySector">Sector de la empresa</Label>
        <Input
          id="companySector"
          placeholder="Sector de tu empresa"
          value={formState.companySector}
          onChange={(e) => setFormState({ ...formState, companySector: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="useDatabase">¿Utilizan una base de datos?</Label>
        <Select
          value={formState.useDatabase}
          onValueChange={(value) =>
            setFormState({
              ...formState,
              useDatabase: value,
              databaseType: value === "no" ? "" : formState.databaseType,
            })
          }
        >
          <SelectTrigger id="useDatabase">
            <SelectValue placeholder="Selecciona una opción" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Sí, utilizo una</SelectItem>
            <SelectItem value="no">No, no tenemos</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {formState.useDatabase === "yes" && (
        <div className="space-y-2">
          <Label htmlFor="databaseType">Tipo de base de datos</Label>
          <Input
            id="databaseType"
            placeholder="Tipo de base de datos"
            value={formState.databaseType}
            onChange={(e) => setFormState({ ...formState, databaseType: e.target.value })}
          />
        </div>
      )}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Unirme a la lista de espera"}
      </Button>
    </form>
  )
}

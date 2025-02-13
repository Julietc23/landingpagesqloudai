"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function WaitlistForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    email: "",
    country: "",
    phone: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulación de envío de formulario
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form
      setFormState({
        name: "",
        surname: "",
        email: "",
        country: "",
        phone: "",
      })

      alert("¡Gracias por registrarte! Te notificaremos cuando sQloud AI esté disponible.")
    } catch (error) {
      console.error("Error:", error)
      alert("Error al enviar el formulario. Por favor, intenta de nuevo.")
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
          placeholder="tu@email.com"
          type="email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="country">País</Label>
        <Select value={formState.country} onValueChange={(value) => setFormState({ ...formState, country: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona tu país" />
          </SelectTrigger>
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
        <div className="flex gap-2">
          <Select
            value={formState.phone.split(" ")[0] || ""}
            onValueChange={(value) =>
              setFormState({ ...formState, phone: `${value} ${formState.phone.split(" ")[1] || ""}` })
            }
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Código" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="+58">+58</SelectItem>
              <SelectItem value="+57">+57</SelectItem>
              <SelectItem value="+52">+52</SelectItem>
              <SelectItem value="+54">+54</SelectItem>
              <SelectItem value="+56">+56</SelectItem>
              <SelectItem value="+51">+51</SelectItem>
            </SelectContent>
          </Select>
          <Input
            id="phone"
            type="tel"
            placeholder="Tu número"
            value={formState.phone.split(" ")[1] || ""}
            onChange={(e) =>
              setFormState({
                ...formState,
                phone: `${formState.phone.split(" ")[0] || ""} ${e.target.value}`,
              })
            }
            className="flex-1"
          />
        </div>
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Unirme a la lista de espera"}
      </Button>
    </form>
  )
}


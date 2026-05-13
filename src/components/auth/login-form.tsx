"use client";

import { useState } from "react";

import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

export function LoginForm() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin() {
    try {
      setLoading(true);

      const result = await signIn(
        "credentials",
        {
          email,
          password,
          redirect: false,
        }
      );

      if (result?.error) {
        alert(
          "Credenciales incorrectas"
        );

        return;
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">
            DG CRM
          </h1>

          <p className="text-muted-foreground mt-1">
            Inicia sesión para acceder.
          </p>
        </div>

        <div className="space-y-4">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />
        </div>

        <Button
          className="w-full"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading
            ? "Entrando..."
            : "Entrar"}
        </Button>
      </CardContent>
    </Card>
  );
}
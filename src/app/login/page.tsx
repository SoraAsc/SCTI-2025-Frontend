"use client";
import { handleLoginSubmit } from "@/actions/auth-actions";
import { useActionState, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, formAction, isLoading] = useActionState(handleLoginSubmit, "");
  return (
    <form
      action={formAction}
      className="flex flex-col gap-6 max-w-md mx-auto p-8 bg-white shadow-lg rounded-xl border border-gray-100 text-black font-mono"
    >
      <label
        htmlFor="email"
        className="block text-sm font-semibold text-gray-700"
      >
        Seu E-mail
      </label>
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="seuemail@gmail.com"
        autoComplete="email"
        className="w-full p-3 border-gray-200 rounded-lg bg-gray-50"
      />
      <label
        htmlFor="password"
        className="block text-sm font-semibold text-gray-700"
      >
        Sua Senha
      </label>
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="******"
        className="w-full p-3 border-gray-200 rounded-lg bg-gray-50"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold cursor-pointer"
      >
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
      {state && <p className="text-red-600 text-sm">{state}</p>}
    </form>
  );
}

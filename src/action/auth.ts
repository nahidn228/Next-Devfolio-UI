"use server";

import { FieldValues } from "react-hook-form";

export const registerUser = async (data: FieldValues) => {
  console.log("From api", data);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res?.ok) {
    const errData = await res.json();
    throw new Error(errData.message || "User registration failed");
  }

  return await res.json();
};

export const loginUser = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res?.ok) {
    return console.error("User Login Failed");
  }

  return await res.json();
};

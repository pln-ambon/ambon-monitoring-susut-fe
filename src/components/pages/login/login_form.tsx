"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from 'lucide-react';

// import { AppDispatchContext } from "@/components/pages/context";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { loginRequest } from "@/api/login";

function LoginForm() {
  const router = useRouter();
  // const dispatch = React.useContext(AppDispatchContext);
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  const formSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(2)
      .max(50)
      .refine((password) => !/\s/.test(password), {
        message: "Password cannot contain spaces",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // try {
    //   await loginRequest({
    //     body: values,
    //   });
    //   router.push("/");
    // } catch (error) {
    //   dispatch({
    //     type: "SET",
    //     modalType: "ERROR",
    //     isError: true,
    //     title: "Login Error",
    //     message: error.message,
    //   });
    // }
    router.push("/")
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 mt-8"
        method="post"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="w-full">
                <label className="text-sm text-[#9FA0BC]">Email</label>
                <FormControl>
                  <Input placeholder="Ketik Alamat Email" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="w-full">
                <label className="text-sm text-[#9FA0BC]">Password</label>
                <FormControl>
                  <div className="relative">
                  <Input placeholder="Ketik Password" {...field} type={`${showPassword ? "text" : "password"}`}/>
                  { !showPassword && <Eye className="absolute top-2 right-4 font-light cursor-pointer hover:scale-105" onClick={() => setShowPassword(!showPassword)}/>}
                  { showPassword && 
                  <EyeOff className="absolute top-2 right-4 font-light cursor-pointer hover:scale-105" onClick={() => setShowPassword(!showPassword)}/>
                  }
                  </div>
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Masuk
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PublicPage } from "../layout/PublicPage";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CookingPot, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import {
  initialValue,
  loginSchema,
  type LoginFormValues,
} from "@/schemas/login";
import { userData } from "@/userData";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialValue,
  });

  const onSubmit = (data: LoginFormValues) => {
    const user = userData.find(
      (u) => u.username === data.username && u.password === data.password,
    );

    if (user) {
      localStorage.setItem("auth_token", user.token);
      localStorage.setItem("user_name", user.username);
      navigate("/");
      window.location.reload();
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <PublicPage>
      <Card className="w-full max-w-full grid md:grid-cols-2 rounded-none  md:h-auto bg-amber-300 p-0 m-0">
        <div className="hidden lg:block relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1717838206417-c4fe2b9fb043?..."
            alt="Chef cooking"
            className="absolute inset-0 w-full h-full object-cover "
          />
        </div>
        <LoginForm form={loginForm} onSubmit={onSubmit} />
      </Card>
    </PublicPage>
  );
}

const LoginForm = ({ form, onSubmit }: { form: any; onSubmit: any }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const quote = [
    {
      key: "login",
      text: "A plate is a canvas, login & rate it!",
      isRegistered: true,
    },
    {
      key: "register",
      text: "Join us and start rating delicious plates!",
      isRegistered: false,
    },
  ];
  return (
    <div className="relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8">
      <Card className="z-1 w-full border-none shadow-xl sm:max-w-lg bg-white p-4 sm:p-6 lg:p-8">
        <CardHeader className="gap-4 flex flex-col items-center pt-4">
          <div>
            <CookingPot className="mx-auto mb-4 h-16 w-16 text-amber-600" />
          </div>
          <div className="text-center">
            <CardTitle className="mb-1.5 text-2xl">RateMyPlate</CardTitle>
            <CardDescription className="text-sm font-semibold text-nowrap">
              {isRegistered
                ? quote.find((q) => !q.isRegistered)?.text
                : quote.find((q) => q.isRegistered)?.text}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className=" sm:px-6 lg:px-16">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="chef-restaurant" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pr-10"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-600 transition-colors"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                        >
                          {showPassword ? (
                            <EyeOff className="size-5" />
                          ) : (
                            <Eye className="size-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              {isRegistered && (
                <FormField
                  control={form.control}
                  name="cnf-password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pr-10"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-600 transition-colors"
                            aria-label={
                              showPassword ? "Hide password" : "Show password"
                            }
                          >
                            {showPassword ? (
                              <EyeOff className="size-5" />
                            ) : (
                              <Eye className="size-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
              )}
              <>
                <span className="cursor-pointer text-amber-600 hover:underline">
                  Forget Password
                </span>{" "}
                |{" "}
                <span
                  onClick={() => {
                    setIsRegistered((prev) => !prev);
                  }}
                  className="cursor-pointer text-amber-600 hover:underline"
                >
                  {isRegistered ? "Login" : "Register"}
                </span>
              </>
              <div className="mt-6 flex w-full justify-end">
                <Button
                  type="submit"
                  variant="secondary"
                  className="w-auto bg-amber-950 text-white hover:bg-amber-900"
                >
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

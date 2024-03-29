"use client";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextField, Text } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SingInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (!res?.ok) console.log("error");

    router.push("/dashboard");
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="email">Email</label>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                message: "Email is required",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="email"
                  placeholder="Email"
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        {errors.email && (
          <Text color="red" className="text-xs p-1">
            {errors.email.message}
          </Text>
        )}

        <label htmlFor="password">Password</label>
        <TextField.Root>
          <TextField.Slot>
            <LockClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                message: "Password is required",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="password"
                  placeholder="Password"
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        {errors.password && (
          <Text color="red" className="text-xs p-1">
            {errors.password.message}
          </Text>
        )}

        <Button mt="4">Enter</Button>
      </Flex>
    </form>
  );
};

export default SingInForm;

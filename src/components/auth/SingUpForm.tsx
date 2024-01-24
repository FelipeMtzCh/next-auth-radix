"use client";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const SingUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post("/api/auth/register", data);
    console.log(res);
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="username">Username</label>
        <TextField.Root>
          <TextField.Slot>
            <PersonIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="username"
            control={control}
            rules={{
              required: {
                message: "Username is required",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="text"
                  placeholder="Username"
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        {errors.username && (
          <Text color="red" className="text-xs p-1">
            {errors.username.message}
          </Text>
        )}

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
                <TextField.Input type="email" placeholder="Email" {...field} />
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
              minLength: {
                message: "Password must be at least 8 characters long",
                value: 8,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="password"
                  placeholder="Password"
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

        <Button mt="4">Register</Button>
      </Flex>
    </form>
  );
};

export default SingUpForm;

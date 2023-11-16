"use client";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";

const SingUpForm = () => {
  return (
    <Flex direction="column" gap="2">
      <label htmlFor="username">Username</label>
      <TextField.Root>
        <TextField.Slot>
          <PersonIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          type="text"
          placeholder="Username"
          autoFocus
          name="username"
        />
      </TextField.Root>

      <label htmlFor="email">Email</label>
      <TextField.Root>
        <TextField.Slot>
          <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input type="email" placeholder="Email" name="email" />
      </TextField.Root>

      <label htmlFor="password">Password</label>
      <TextField.Root>
        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          type="password"
          placeholder="Password"
          autoFocus
          name="password"
        />
      </TextField.Root>

      <Button>Register</Button>
    </Flex>
  );
};

export default SingUpForm;

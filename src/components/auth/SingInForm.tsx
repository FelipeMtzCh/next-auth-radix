"use client";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";

const SingInForm = () => {
  return (
    <Flex direction="column" gap="2">
      <label htmlFor="email">Email</label>
      <TextField.Root>
        <TextField.Slot>
          <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          type="email"
          placeholder="Email"
          autoFocus
          name="email"
        />
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

      <Button>Enter</Button>
    </Flex>
  );
};

export default SingInForm;

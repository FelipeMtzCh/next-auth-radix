"use client";
import {
  Flex,
  Heading,
  Link,
  Container,
  Avatar,
  Text,
  Button,
} from "@radix-ui/themes";
import NavLink from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-zinc-800 h-16 py-4 ">
      <Container>
        <Flex justify="between" align="center">
          <NavLink href="/">
            <Heading>Hoop</Heading>
          </NavLink>

          <ul className="flex gap-x-3 items-center h-full">
            {!session && (
              <>
                <li>
                  <Link asChild>
                    <NavLink href="/auth/login" passHref>
                      Log In
                    </NavLink>
                  </Link>
                </li>
                <li>
                  <Link asChild>
                    <NavLink href="/auth/register" passHref>
                      Sign Up
                    </NavLink>
                  </Link>
                </li>
              </>
            )}

            {session && (
              <>
                <li>
                  <Link asChild>
                    <NavLink href="/dashboard" passHref>
                      Dashboard
                    </NavLink>
                  </Link>
                </li>

                <li>
                  <Button
                    variant="outline"
                    color="crimson"
                    radius="large"
                    onClick={() => signOut()}
                  >
                    Log Out
                  </Button>
                </li>

                {session?.user && (
                  <li>
                    <Flex justify="between" align="center" gap="2">
                      <Avatar
                        fallback={
                          session?.user?.name
                            ? session.user.name[0].toUpperCase()
                            : ""
                        }
                      />
                      <Text weight="medium">{session?.user?.name}</Text>
                    </Flex>
                  </li>
                )}
              </>
            )}
          </ul>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;

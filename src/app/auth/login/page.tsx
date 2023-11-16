import SingInForm from "@/components/auth/SingInForm";
import { Card, Container, Flex, Heading, Text, Link } from "@radix-ui/themes";
import NavLink from "next/link";

const LoginPage = () => {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">
            <Heading>Log In</Heading>
            <SingInForm />

            <Flex justify="between" my="4">
              <Text>{"Don't have an account?"}</Text>
              <Link asChild>
                <NavLink href="/auth/register" passHref>
                  Sing Up
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default LoginPage;

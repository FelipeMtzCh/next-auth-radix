import SingUpForm from "@/components/auth/SingUpForm";
import { Card, Container, Flex, Heading, Text, Link } from "@radix-ui/themes";
import NavLink from "next/link";

const RegisterPage = () => {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">
            <Heading>Sing Up</Heading>
            <SingUpForm />

            <Flex justify="between" my="4">
              <Text>{"Already have an account?"}</Text>
              <Link asChild>
                <NavLink href="/auth/login" passHref>
                  Log In
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default RegisterPage;

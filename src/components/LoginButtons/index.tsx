import { Button, Link, Stack } from "@chakra-ui/react";

export default function LoginButtons() {
  return (
    <Stack
      direction={["row"]}
      spacing={6}
      display={{ base: "none", lg: "block" }}
      alignItems="flex-end"
    >
      <Link href="/servicos">
        <Button
          as="a"
          variant="solid"
          colorScheme="brand"
          fontSize={14}
          h={1}
          py={3}
          px={5}
        >
          Assinar
        </Button>
      </Link>
      <Button
        as="a"
        href="/acesso"
        variant="outline"
        colorScheme="brand"
        fontSize={14}
        h={1}
        py={3}
        px={5}
      >
        Entrar
      </Button>
    </Stack>
  );
}

export { LoginButtons };
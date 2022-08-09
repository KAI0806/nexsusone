import { Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Heading as='h1' fontWeight='bold' m={0} fontSize='5rem'>Hello World</Heading>
      <Text m={0}>このHPは下記のツールでコーディングを行います。</Text>
      <UnorderedList m={0}>
        <ListItem>Next.js</ListItem>
        <ListItem>Chakra UI</ListItem>
        <ListItem>AOS.js</ListItem>
      </UnorderedList>
    </main>
  )
};
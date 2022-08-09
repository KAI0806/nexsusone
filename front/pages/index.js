import { Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Heading as='h1'>Hello World</Heading>
      <Text>このHPは下記の技術でコーディングを行います。</Text>
      <UnorderedList>
        <ListItem>Next.js</ListItem>
        <ListItem>Chakra UI</ListItem>
        <ListItem>Framer Motion</ListItem>
      </UnorderedList>
    </main>
  )
};
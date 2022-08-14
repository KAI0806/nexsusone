import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default function entryButton ({txt}) {
    return (
        <NextLink href='/' passHref>
            <Link className='entry_button'>{txt}</Link>
        </NextLink>
    );
}
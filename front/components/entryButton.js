import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default function entryButton ({txt, path}) {
    const pathName = `${path}`
    
    return (
        <NextLink href={pathName} passHref>
            <Link className='entry_button'>{txt}</Link>
        </NextLink>
    );
}
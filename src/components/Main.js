import React from 'react'
import { Flex } from '@chakra-ui/react'
import Graph from './Graph'
import SalesDisplay from './SalesDisplay'

export default function Main() {
  return (
    <Flex direction="column" mr={5}>
        <Graph/>
        <SalesDisplay/>
    </Flex>
  )
}

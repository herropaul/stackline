import React from 'react'
import { Flex, Text, HStack, Divider } from '@chakra-ui/react'
import { useSelector } from 'react-redux';

export default function SalesDisplay() {

  const myData = useSelector(state => state.dataSlice.data);
  //const newItem = myData[0];
  
  const RowData = () => {
    const newItem = myData[0];
    return(
    newItem.sales.map(sale =>
      <Flex key={Math.random()} fontSize={14} mt={5}>
          <Text ml="3rem" mr="5rem">{sale.weekEnding}</Text>
          <Text ml="5rem" mr="5rem">${sale.retailSales}</Text>
          <Text ml="6rem" mr="5rem">${sale.wholesaleSales}</Text>
          <Text ml="6rem" mr="5rem">{sale.unitsSold}</Text>
          <Text ml="6rem" mr="5rem">{sale.retailerMargin}</Text>
      </Flex>)
    )
  }

  return (
    <Flex overflowX="scroll" sx={{scrollbarWidth: "none"}} w="100%" h="15rem" bg="white" mt={10} direction="column">
        <Flex mt={5}>
          <Text ml="3rem" mr="5rem">Week Ending</Text>
          <Text ml="3rem" mr="5rem">Retail Sales</Text>
          <Text ml="3rem" mr="5rem">Wholesale Sales</Text>
          <Text ml="3rem" mr="5rem">Units Sold</Text>
          <Text ml="3rem" mr="5rem">Retailer Margin</Text>
        </Flex>
        <RowData/>
    </Flex>
  )
}

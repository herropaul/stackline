import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../app/slices/getDataSlice'
import { Flex, Image, Box, Text, Divider, Tag, HStack} from '@chakra-ui/react'

export default function Sidebar() {

    const myData = useSelector(state => state.dataSlice.data);

    const dispatch = useDispatch();

    const getData = () => {
      fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson)
        dispatch(setData(myJson))
      });
    }
    
    useEffect(() => {
        getData();
    }, [])


    const Item = () => {
      const newItem = myData[0];
        return(
        <Flex w="100%" h="22rem" bg="white" alignItems="center" direction="column" borderBottom="1px solid" borderColor="gray.200">
            <Box boxSize='175px' mt={5}>
                <Image src={newItem.image} alt=""/>
            </Box>
            <Flex direction="column" textAlign="center">
              <Text fontSize={20} fontWeight="bold">{newItem.title}</Text>
              <Text fontSize={13}>{newItem.subtitle}</Text>
            </Flex>
            <Divider m={3}/>
            <HStack isInline wrap="wrap" spacing="15px" >
              {newItem.tags.map(tag => 
                  <Tag key={Math.random()} m={1}>{tag}</Tag>
                )}
            </HStack>
        </Flex>
        )
      }

  return (
    <Flex w="30rem" h="100vh" bg="white" mt={12} mx={5} direction="column" boxShadow={3}>
      <Item/>
    </Flex>
  )
}

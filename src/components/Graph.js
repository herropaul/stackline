import React, {useEffect} from 'react'
import { Flex } from '@chakra-ui/react'
import LineChart from './charts/LineChart';
import { lineChartDataOverallRevenue, lineChartOptionsOverallRevenue } from './charts/chartData';
import { useSelector } from 'react-redux';

export default function Graph() {
  // Grab sales array from myData

  /*
  const myData = useSelector(state => state.dataSlice.data);
  const newItem = myData[0];
  const itemRetailSales = newItem.sales;
  const retailSales = lineChartDataOverallRevenue[0].data;
  const wholesaleSales = lineChartDataOverallRevenue[1].data;
  */

  /*
  const storeData = () => {
    // Store retailSales data from myData into retailSales array
    itemRetailSales.forEach(item => {
      retailSales.push(item.retailSales);
      wholesaleSales.push(item.wholesaleSales);
    })
  }
  
  useEffect(() => {
    storeData();
  },[])
  */

  return (
    <Flex w="100%" h="25rem" bg="white" mt={12} p={3}>
        <LineChart 
        chartData={lineChartDataOverallRevenue}
        chartOptions={lineChartOptionsOverallRevenue}
        />
    </Flex>
  )
}

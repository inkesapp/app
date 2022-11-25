import React, { useContext, useState } from 'react';
import {
  Text,
  Center,
  Link,
  Box,
  Table,
  Tr,
  Td,
  Tbody,
  Button,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { ThemeContext } from '../../context';
import { TagsGroup } from '../ui/tag';

const TableData = ({ children, withoutBorderRight, w }, props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Td
      px={3}
      mx={0}
      w="auto"
      minWidth={0}
      borderColor={theme.black}
      borderBottom="1px"
    >
      <Box minWidth={0}>{children}</Box>
    </Td>
  );
};

const TableRow = ({ rowData, colsLengths }) => {
  const hours = rowData.time.hours ? rowData.time.hours + 'h ' : '';
  const minutes = rowData.time.minutes ? rowData.time.minutes + 'm ' : '';
  const seconds = rowData.time.seconds ? rowData.time.seconds + 's ' : '';
  const time = `${hours}${minutes}${seconds}`;

  return (
    <Tr>
      <TableData>
        <Link>{rowData.file_name}</Link>
      </TableData>
      <TableData>{rowData.program_name}</TableData>
      <TableData>
        <TagsGroup tags={rowData.tags} fileName={rowData.file_name} />
      </TableData>
      <TableData>{time}</TableData>
    </Tr>
  );
};

const TableView = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const [colsLengths, setColsLengths] = useState({
    fileName: 50,
    programName: 20,
    tags: 35,
    time: 5,
  });

  console.log('data', data);

  return (
    <Box pl="120px" pr="20px" w="100%" pt="10px">
      <Table>
        <Tbody>
          {data &&
            data.map((data, i) => (
              <TableRow rowData={data} colsLengths={colsLengths} key={i} />
            ))}
        </Tbody>
      </Table>

      {data.length === 0 && (
        <Center pt="calc(100vh - 20px - 90vh)">
          <Text color={theme.lightGray}>No data yet</Text>
        </Center>
      )}
    </Box>
  );
};

export default TableView;

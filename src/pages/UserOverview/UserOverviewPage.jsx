import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { TableVirtuoso } from "react-virtuoso";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import userProfileService from "../../service/userProfileService";

const sample = [
  ["FrozenYoghurt", false],
  ["IceCreamSandwich", true],
  ["Eclair", false],
  ["Cupcake", false],
  ["Gingerbread", true],
];

function createData(data) {
  console.log(data);
  const username = data.username;
  const avatarLetter = data.username.charAt(0).toUpperCase();
  const chipColor = data.isOnline ? "success" : "error";
  return {
    picture: <Avatar sx={{ bgcolor: deepOrange[500] }}>{avatarLetter}</Avatar>,
    username,
    status: <Chip label={data.isOnline ? "online" : "offline"} color={chipColor} />,
  };
}

const columns = [
  {
    width: 1, // Updated width to take less space
    label: "Picture",
    dataKey: "picture",
  },
  {
    width: 120,
    label: "Username",
    dataKey: "username",
    numeric: true,
  },
  {
    width: 120,
    label: "Status",
    dataKey: "status",
    numeric: true,
  },
];

// const rows = Array.from({ length: 200 }, (_, index) => {
//   const randomSelection = sample[Math.floor(Math.random() * sample.length)];
//   return ;
// });

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      <TableCell
        key="picture"
        variant="head"
        align="left"
        style={{ width: columns[0].width }} // Set the width to the specified value
        sx={{
          backgroundColor: "background.paper",
        }}
      >
        {columns[0].label}
      </TableCell>
      {columns.slice(1).map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      <TableCell align="left">{row.picture}</TableCell>
      {columns.slice(1).map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {
    const [searchQuery, setSearchQuery] = React.useState(""); // State variable for search query
    const [showOnlineOnly, setShowOnlineOnly] = React.useState(false); // State variable for online-only switch

    const [users, setUsers] = React.useState([]);
    const dataFetch = async () => {
      const result = await userProfileService.getUsersActivityStatuses();
      const rows = result.map(createData);
      setUsers(rows);
    };
  
    React.useEffect(() => {
      dataFetch();
    }, []);
  
    // Filter the rows based on the search query
    const filteredRows = users.filter((row) =>
      row.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Filter the rows based on the online-only switch
    const filteredRowsOnlineOnly = filteredRows.filter((row) => {
      const isOnline = row.status.props.label === "online";
      return !showOnlineOnly || (showOnlineOnly && isOnline);
    });
  
    // Handle search query change
    const handleSearchQueryChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    // Handle online-only switch change
    const handleShowOnlineOnlyChange = (event) => {
      setShowOnlineOnly(event.target.checked);
    };
  
    return (
      users && 
        <Paper style={{ height: "80vh", width: "100%" }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          style={{ marginBottom: 10 }}
        />
  
        <FormControlLabel
          control={
            <Switch
              checked={showOnlineOnly}
              onChange={handleShowOnlineOnlyChange}
            />
          }
          label="Online Only"
        />
  
        <TableVirtuoso
          data={filteredRowsOnlineOnly} // Render filtered rows with online-only filter
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
        />
      </Paper>
    );
  }
  

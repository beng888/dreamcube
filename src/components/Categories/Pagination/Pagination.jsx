import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import {
  Divider,
  Grid,
  Table,
  TableFooter,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { motion } from "framer-motion";

import TablePaginationActions from "./sections/TablePaginationActions";
import Items from "./sections/Items";

import useStyles from "../styles";
import { Link } from "react-router-dom";
import Videos from "./sections/Videos";

export default function Pagination({ datas, category, c }) {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    window.scrollTo(0, 800);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log(category);
  let random = category && category.sort(() => 0.5 - Math.random()).slice(0, 4);

  //?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  // console.log(rowsPerPage);

  // let rowsPerPageData = [];

  // console.log(rowsPerPageData);

  // for (let i = 0; i < rowsPerPage; i++) {
  //   rowsPerPageData.push("value");
  // }

  // let result = datas.map((a) => a.media.source);

  // console.log(result.slice(0, rowsPerPage));

  //?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  const useStyles2 = makeStyles((theme) => ({
    category: {
      minHeight: "20vw",
      [theme.breakpoints.down("xs")]: {
        "& p": { fontSize: "0.7rem" },
      },
    },
  }));
  const classes2 = useStyles2();

  return (
    <>
      {c === "NOTABLES CRAFTSMEN WORKS" ? (
        <Grid container justify="center" spacing={3}>
          {(rowsPerPage > 0
            ? datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : datas
          ).map((d, i) => (
            <Videos key={i} d={d} />
          ))}
        </Grid>
      ) : (
        <Grid container justify="center" spacing={3}>
          {(rowsPerPage > 0
            ? datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : datas
          ).map((d, i) => (
            <Items key={i} d={d} />
          ))}
        </Grid>
      )}
      <div style={{ height: "50px", width: "50px" }} />
      <Grid container spacing={3} className={classes2.category}>
        {random.map((d) => (
          <Grid
            component={Link}
            to={`/collections/:categories/${d.categories[0].slug}`}
            xs={6}
            md={2}
            item
            key={d.id}
            className={classes.categories}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              src={d.media.source}
              alt="category img"
            />

            <div>
              {" "}
              <Typography variant="body1">{d.categories[0].name}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid classes={{ root: classes.gridRoot }} style={{ margin: "3rem 0" }}>
        <Table>
          <TableFooter>
            <TableRow>
              <TablePagination
                classes={{
                  root: classes.paginationRoot,
                  toolbar: classes.toolbar,
                }}
                rowsPerPageOptions={[4, 8, 12, { label: "All", value: -1 }]}
                colSpan={6}
                count={datas.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              >
                {" "}
              </TablePagination>
            </TableRow>
          </TableFooter>
        </Table>
      </Grid>
      <Divider style={{ width: "100vw", marginBottom: "3rem" }} />
    </>
  );
}

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import {
  Button,
  Divider,
  Grid,
  Table,
  TableBody,
  TableFooter,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TablePaginationActions from "./sections/TablePaginationActions";
import Items from "./sections/Items";

import useStyles from "../styles";
import { Link } from "react-router-dom";

export default function Pagination({ datas, category }) {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
    Items: {
      minHeight: `${(rowsPerPage / 2) * 50}vw  `,
      [theme.breakpoints.down("xs")]: {
        minHeight: `${rowsPerPage * 100}vw  `,
      },
    },

    category: {
      minHeight: "20vw",
      [theme.breakpoints.down("xs")]: {
        minHeight: "150vw",
      },
    },
  }));
  const classes2 = useStyles2();

  return (
    <>
      <Grid container justify="center" spacing={3} className={classes2.Items}>
        {(rowsPerPage > 0
          ? datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : datas
        ).map((d) => (
          <Items d={d} />
        ))}
      </Grid>
      <div style={{ height: "50px", width: "50px" }} />
      <Grid container spacing={3} className={classes2.category}>
        {category.map((d) => (
          <Grid
            component={Link}
            to={`/collections/:categories/${d.categories[0].slug}`}
            xs={6}
            sm={2}
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
                  gutters: classes.gutters,
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

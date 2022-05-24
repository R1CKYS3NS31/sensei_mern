import React, { Component } from "react";
import ReactTable from "react-table";
import api from "../api/api";

import styled from "styled-components";
import "react-table";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      columns: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({
      isLoading: true,
    });
    await api.getAllMovies().then((movies) => {
      this.setState({
        movies: movies.data.data,
        isLoading: false,
      });
    });
  };
  render() {
    const { movies, isLoading } = this.state;
    console.log("TCL:MoviesList -> render -> movies", movies);

    const columns = [
      {
        header: "ID",
        accessor: "_id",
        filterable: true,
      },
      {
        header: "Name",
        accessor: "name",
        filterable: true,
      },
      {
        header: "Rating",
        accessor: "rating",
        filterable: true,
      },
      {
        header: "Time",
        accessor: "time",
        Cell: (props) => <span>{props.value.join("/")}</span>,
      },
    ];

    let showTable = true
    if(!movies.length){
        showTable = false
    }

    return (
        <Wrapper>
            {showTable && (
                <ReactTable
                    data = {movies}
                    columns={columns}
                    loading = {isLoading}
                    defaultPageSize = {10}
                    showPageSizeOptions = {true}
                    minRows = {0}
                />
            )}
        </Wrapper>
    );
  }
}

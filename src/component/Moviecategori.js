import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieListadmin from "./MovieListadmin";
import { useQuery } from 'react-query';
import { API } from '../config/api';
import { UserContext } from '../context/userContext';


function MovieContaineradmin() {
    // Fetching product data from database
    const [state] = useContext(UserContext);


    let { data: films } = useQuery('filmCache', async () => {
        const response = await API.get('/films');
        console.log("ini response", response)

        const filterCategory = response.data.data;
        const filterResult = filterCategory.filter((e) => {
            if (e.category.id === 2) {
                return e.category.id === 2;

            }
        });
        console.log("ini film", filterResult);
        return filterResult;
    });

    return (
        <div>
            <Container className="my-5 overflow-hidden">
                <h3 className="text-light">Movies</h3>
                <Row>
                    {films?.map((movies, index) => {
                        return (
                            <Col md={2} key={index}>
                                <MovieListadmin
                                    id={movies.id}
                                    movieImg={movies.thumbnailfilm}
                                    title={movies.title}
                                    year={movies.year}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default MovieContaineradmin;
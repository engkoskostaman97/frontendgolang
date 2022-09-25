import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SeriesListadmin from "./SeriesListadmin";
import { useQuery, useMutation } from 'react-query';
import { API } from '../config/api';
import { UserContext } from '../context/userContext';
import Film from "../components/Film";

function SeriesContaineradmin() {
    const [state] = useContext(UserContext);
    let { data: films } = useQuery('seriesCache', async () => {
        const response = await API.get('/films');
        console.log("ini response", response)

        const filterCategory = response.data.data;
        const filterResult = filterCategory.filter((e) => {
            if (e.category.id === 1) {
                return e.category.id === 1;

            }
        });
        console.log("ini film", filterResult);
        return filterResult;
    });
    return (
        <div>
            <Container className="my-5 overflow-hidden" id="">
                <h4 className="text-light mb-4">TV Series</h4>
                <Row>
                    {films?.map((item, id) => {
                        return (
                            <Col md={2} key={item}>
                                <SeriesListadmin
                                    id={item.id}
                                    seriesImg={item.thumbnailfilm}
                                    title={item.title}
                                    year={item.year}

                                />{" "}
                                {/* Looping */}
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default SeriesContaineradmin;
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import Pagination from 'src/components/common/Pagination';

const PaginationContainer = ({location}) => {
    const {lastPage, applys, loading} = useSelector(({applys, loading}) => ({
        lastPage: applys.lastPage,
        applys: applys.applys,
        loading: loading['applys/LIST_APPLYS'],
    }));

    if(!applys || loading) return null;

    const {lang, page = 1} = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    })

    return (
        <Pagination lang={lang} page={parseInt(page, 10)} lastPage={lastPage} />
    );
};

export default withRouter(PaginationContainer);
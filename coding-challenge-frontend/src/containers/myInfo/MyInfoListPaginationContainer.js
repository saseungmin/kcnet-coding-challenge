import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import qs from 'qs';
import Pagination from 'src/components/common/Pagination';

const MyInfoListPaginationContainer = ({location}) => {
    const {myInfoList, receiveLastPage, loading} = useSelector(({myInfo, loading}) => ({
        myInfoList: myInfo.myInfoList,
        receiveLastPage: myInfo.receiveLastPage,
        loading: loading['myInfo/MYINFO_APPLY_LIST'],
    }));

    if(!myInfoList || loading) return null;

    const {page = 1} = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    })

    return (
        <Pagination page={parseInt(page, 10)} receiveLastPage={receiveLastPage} />
    );
};

export default withRouter(MyInfoListPaginationContainer);